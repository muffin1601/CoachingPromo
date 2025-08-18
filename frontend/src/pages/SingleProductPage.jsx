import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaCogs, FaEye } from "react-icons/fa";
import "../styles/SingleProductPage.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchSlugMap, slugify } from "../utils/slugMap";
import { Helmet } from "react-helmet-async";

const SingleProductPage = () => {
  const { category: catSlug, productName: prodSlug, subproduct: subSlug } = useParams();
  const [slugMap, setSlugMap] = useState({});
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(50);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [deslugNames, setDeslugNames] = useState({ categoryName: "", productName: "", subproductName: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const loadSlugMap = async () => {
      const map = await fetchSlugMap();
      setSlugMap(map);
    };
    loadSlugMap();
  }, []);

  useEffect(() => {
    if (!Object.keys(slugMap).length) return;

    const categoryName = slugMap[catSlug] || catSlug;
    const productName = slugMap[`${catSlug}/${prodSlug}`] || prodSlug;
    const subproductName = slugMap[`${catSlug}/${prodSlug}/${subSlug}`] || subSlug;

    setDeslugNames({ categoryName, productName, subproductName });

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/${categoryName}/${productName}`);
        const selected = (res.data.products || []).find(p => p.name === subproductName);
        if (!selected) return;

        setProduct(selected);
        setMainImage(selected.image || "");
        setRelatedProducts((res.data.products || []).filter(p => p._id !== selected._id));
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [slugMap, catSlug, prodSlug, subSlug]);

  if (!product) return <p className="error-message-1">Loading product...</p>;

  const canonicalUrl = `${window.location.origin}/${catSlug}/${prodSlug}/${subSlug}`;

  return (
    <div className="single-product-page-wrapper">
      <div className="single-product-container-1">
        <div className="product-image-container-2">
          

          {product.subImages && product.subImages.length > 0 && (
            <div className="product-thumbnails-1">
              {[product.image, ...product.subImages].map((img, idx) =>
                img && (
                  <img
                    key={idx}
                    src={`${import.meta.env.VITE_IMAGE_API_URL}${img}`}
                    alt={`${product.name} ${idx}`}
                    className={`thumbnail-image-1 ${img === mainImage ? "active" : ""}`}
                    onClick={() => setMainImage(img)}
                  />
                )
              )}
            </div>
          )}
          <div className="product-image-section-1">
            <img className="main-product-image-1" src={`${import.meta.env.VITE_IMAGE_API_URL}${mainImage}`} alt={product.name} />
          </div>
        </div>

        <div className="product-details-1">
          <h1 className="product-title-1">{product.name}</h1>
          <p className="product-stock-1">In Stock</p>
          <p className="product-rating-1">Rating: <span>★★★★☆</span></p>
          <p className="product-description-1">{product.content}</p>

          <div className="quantity-input-1">
            <input
              type="number"
              min="50"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="quantity-input"
            />
          </div>

          {(() => {
            const routeMap = {
              "Polo T-Shirts": "/customize/polotshirt",
              "Round Neck T-Shirts": "/customize/roundneck"
            };
            const ProductList = ["Hoodies-Jackets","Nehru Jacket","Teacher Jacket","Formal Shirts","Corporate Shirts","Institute Backpack"];
            const customizeRoute = routeMap[product.name];
            if (customizeRoute)
              return <button className="customize-btn-1" onClick={() => navigate(customizeRoute)}><FaCogs /> Customize</button>;
            if (ProductList.includes(product.name))
              return (
                <button
                  className="customize-btn-1"
                  onClick={() =>
                    navigate(`/${catSlug}/${prodSlug}/${subSlug}/customize`, {
                      state: {
                        productImages: [product.image, ...(product.subImages || [])],
                        productName: product.name
                      }
                    })
                  }
                >
                  <FaCogs /> Customize
                </button>
              );
            return null;
          })()}

          <p className="product-category-1">
            <span>Categories:</span> {deslugNames.categoryName}, {deslugNames.productName}
          </p>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products-container">
          <div className="related-products-section">
            <h2 className="related-products-title">You might like</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{ 640:{slidesPerView:2}, 768:{slidesPerView:3}, 1024:{slidesPerView:6} }}
              navigation
              pagination={{ clickable:true }}
              autoplay={{ delay:3000, disableOnInteraction:false }}
            >
              {relatedProducts.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="related-product-card">
                    <img src={`${import.meta.env.VITE_IMAGE_API_URL}${item.image}`} alt={item.name} className="related-product-image" />
                    <h3 className="related-product-name">{item.name}</h3>
                    <Link to={`/${catSlug}/${prodSlug}/${slugify(item.name)}`} className="view-button">
                      <FaEye /> View
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
