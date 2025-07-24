import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaCogs, FaEye } from "react-icons/fa";
import "../styles/SingleProductPage.css";
import axios from "axios";
import SearchOverlay from "../components/SearchOverlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SingleProductPage = () => {
  const { category, productName, subproduct } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(50);
  
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/${category}/${productName}/${subproduct}`
        );
        setProduct(res.data);
        setMainImage(res.data.image || "");

        const relatedRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/${category}/${productName}`
        );
        const filtered = (relatedRes.data.products || []).filter((p) => p._id !== res.data._id);
        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Error fetching product or related products:", error);
      }
    };

    if (category && productName && subproduct) {
      fetchProduct();
    }
  }, [category, productName, subproduct]);

  return (
    <div>
      
      {!product ? (
        <p className="error-message-1">Loading product...</p>
      ) : (
        <>
          <div className="single-product-container-1">
            {product.subImages && product.subImages.length > 0 && (
              <div className="product-thumbnails-1">
                {[product.image, ...product.subImages].map((img, idx) => (
                  img ? (
                    <img
                      key={idx}
                      src={`${import.meta.env.VITE_IMAGE_API_URL}${img}`}
                      alt={`${product.name} thumbnail ${idx}`}
                      className={`thumbnail-image-1 ${img === mainImage ? "active" : ""}`}
                      onClick={() => setMainImage(img)}
                    />
                  ) : null
                ))}
              </div>
            )}

            <div className="product-image-section-1">
              <img
                className="main-product-image-1"
                src={`${import.meta.env.VITE_IMAGE_API_URL}${mainImage}`}
                alt={product.name}
              />
            </div>

            <div className="product-details-1">
              <h1 className="product-title-1">{product.name}</h1>
              <p className="product-stock-1">In Stock</p>
              <p className="product-rating-1">
                Rating: <span>★★★★☆</span>
              </p>
              <p className="product-description-1">{product.content}</p>

              <div className="quantity-input-1">
                <input className="quantity-input"
                  type="number"
                  min="50"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

                {(() => {
                  const routeMap = {
                    "Polo T-Shirts": "/customize/polotshirt",
                    "Round Neck T-Shirts": "/customize/roundneck",
                  };
                  const ProductList = [
                    "Hoodies-Jackets", "Nehru Jacket", "Teacher Jacket",
                    "Formal Shirts",
                    "Corporate Shirts","Institute Backpack"
                  ];

                  const customizeRoute = routeMap[productName];

                  if (customizeRoute) {
                    return (
                      <button
                        className="customize-btn-1"
                        onClick={() => (window.location.href = customizeRoute)}
                      >
                        <FaCogs /> Customize
                      </button>
                    );
                  } else if (ProductList.includes(productName)) {
                    return (
                      <button
                        className="customize-btn-1"
                        onClick={() =>
                          navigate(
                            `/${category}/${productName}/${subproduct}/customize`,
                            {
                              state: {
                                productImages: [product.image, ...(product.subImages || [])],
                                productName: product.name,
                              },
                            }
                          )
                        }
                      >
                        <FaCogs /> Customize
                      </button>
                    );
                  } else {
                    return null;
                  }
                })()}
                
              <p className="product-category-1">
                <span>Categories:</span> {category}, {productName}
              </p>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="related-products-section">
              <h2 className="related-products-title">You might like</h2>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 6 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {relatedProducts.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className="related-product-card">
                      <img
                        src={`${import.meta.env.VITE_IMAGE_API_URL}${item.image}`}
                        alt={item.name}
                        className="related-product-image"
                      />
                      <h3 className="related-product-name">{item.name}</h3>
                      <Link
                        to={`/${category}/${productName}/${encodeURIComponent(item.name)}`}
                        className="view-button"
                      >
                        <FaEye /> View
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </>
      )}

      
    </div>
  );
};

export default SingleProductPage;
