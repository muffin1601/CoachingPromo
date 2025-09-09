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
import { Helmet } from "react-helmet";
import { subcategoryTemplates } from "../data/subcategoryTemplates";

// Add this helper function
const getTemplateKey = (productName) => {
  const templateMap = {
    "Polo T-Shirt": "Polo T-Shirts",
    "Round Neck T-Shirt": "Round Neck T-Shirts",
    "Formal Shirt": "Formal Shirts",
    "Corporate Shirt": "Corporate Shirts",
    "Hoodies-Jacket": "Hoodies-Jackets",
    "Nehru Jacket": "Nehru Jacket",
    "Teacher Jacket": "Teacher Jacket",
    "Graduation Hat": "Graduation Hat",
    "Graduation Gown": "Graduation Gown",
    "Graduation Stole": "Graduation Stole",
    "Convocation Sash": "Convocation Sash",
    "Graduation Hood": "Graduation Hood",
    "Kids Graduation Gown and Cap": "Kids Graduation Gown and Cap",
    "Institute Backpack": "Institute Backpack",
    "Backpack": "Backpacks",
    "Jute Bag": "Jute Bags",
    "Messenger Bag": "Messenger Bags",
    "Tote Bag": "Tote Bags",
    "Mug": "Mug",
    "Water Bottle": "Water Bottle",
    "Canopy": "Canopy",
    "Rickshaw Hood": "Rickshaw Hood",
    "Wall Clock": "Wall Clock",
    "Table Clock": "Table Clock",
    "Trophy": "Trophy",
    "Wooden Trophy": "Wooden Trophy",
    "Badge": "Badge",
    "Medal": "Medal",
    "Diary": "Diary",
    "Paper Stand": "Paper Stand",
    "Mobile Stand": "Mobile Stand",
    "Planner": "Planner",
    "Stress Ball": "Stress Ball",
    "Magic Cube": "Magic Cube",
    "Wristband": "Wristband",
    "Flashcards": "Flashcards",
    "Photo Frame": "Photo Frame",
    "Mouse Pad": "Mouse Pad",
    "Graduation Accessories": "Graduation Accessories",
    "Graduation Honor Cards": "Graduation Honor Cards",
    "Table Calendar": "Table Calendar",
    "Wall Calendar": "Wall Calendar",
  };


  return templateMap[productName] || productName;
};

const SingleProductPage = () => {
  const { category: catSlug, productName: prodSlug, subproduct: subSlug } = useParams();
  const [slugMap, setSlugMap] = useState({});
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(50);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [deslugNames, setDeslugNames] = useState({ categoryName: "", productName: "", subproductName: "" });
  const navigate = useNavigate();

  // Load slug map
  useEffect(() => {
    const loadSlugMap = async () => {
      const map = await fetchSlugMap();
      setSlugMap(map);
    };
    loadSlugMap();
  }, []);

  // Fetch product data
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

  const templateKey = getTemplateKey(deslugNames.productName);
  const template = subcategoryTemplates[templateKey] || null;
  const canonicalUrl = `${window.location.origin}/${catSlug}/${prodSlug}/${subSlug}`;

  // Customize button logic
  const customizeButton = (() => {
    const routeMap = {
      "Polo T-Shirts": "/customize/polotshirt",
      "Round Neck T-Shirts": "/customize/roundneck"
    };

    const ProductList = ["Hoodies-Jackets", "Nehru Jacket", "Teacher Jacket", "Formal Shirts", "Corporate Shirts", "Institute Backpack"];
    const customizeRoute = routeMap[templateKey];

    if (customizeRoute) {
      return (
        <button className="customize-btn-1" onClick={() => navigate(customizeRoute)}>
          <FaCogs /> Customize
        </button>
      );
    }

    if (ProductList.includes(templateKey)) {
      return (
        <button
          className="customize-btn-1"
          onClick={() =>
            navigate(`/${catSlug}/${prodSlug}/${subSlug}/customize`, {
              state: { productImages: [product.image, ...(product.subImages || [])], productName: product.name }
            })
          }
        >
          <FaCogs /> Customize
        </button>
      );
    }

    return null;
  })();


  const RelatedProductsSwiper = () => (
    <div className="related-products-container">
      <div className="related-products-section">
        <h2 className="related-products-title">You might like</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 6 } }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
  );

  return (
    <div className="single-product-page-wrapper">
      <Helmet>
        <title>
          {template?.metaTitle
            ? template.metaTitle.replace("{productName}", product.name)
            : product.name}
        </title>
        <meta
          name="description"
          content={
            template?.metaDescription
              ? template.metaDescription.replace("{productName}", product.name)
              : product.content || ""
          }
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="single-product-container-1">
        <div className="product-image-container-2">
          {product.subImages?.length > 0 && (
            <div className="product-thumbnails-1">
              {[product.image, ...product.subImages].map((img, idx) => (
                img && (
                  <img
                    key={idx}
                    src={`${import.meta.env.VITE_IMAGE_API_URL}${img}`}
                    alt={`${product.name} ${idx}`}
                    className={`thumbnail-image-1 ${img === mainImage ? "active" : ""}`}
                    onClick={() => setMainImage(img)}
                  />
                )
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
        </div>

        <div className="product-details-1">
          <h1 className="product-title-1">{template ? template.productTitle.replace("{productName}", product.name) : product.name}</h1>
          <p className="product-stock-1">In Stock</p>
          <p className="product-rating-1">Rating: <span>★★★★☆</span></p>
          <p className="product-description-1">
            {template ? template.shortDescription.replace("{productName}", product.name) : product.content}
          </p>

          <div className="quantity-input-1">
            <input
              type="number"
              min="50"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="quantity-input"
            />
          </div>

          {customizeButton}

          <p className="product-category-1">
            <span>Categories:</span> {deslugNames.categoryName}, {deslugNames.productName}
          </p>
        </div>
      </div>


      {template && (
        <div className="product-info-container">
          <div className="product-specifications">
            <h3>Specifications:</h3>
            <ul>
              {template.specifications.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="product-long-description">
            <h3>About {product.name}:</h3>
            <p>{template.longDescription.replace(/{productName}/g, product.name)}</p>
          </div>
        </div>
      )}


      {template && template.faqs?.length > 0 && (
        <div className="product-faqs-container">
          <h3>FAQs:</h3>
          {template.faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <p className="faq-question">
                <strong>Q:</strong> {faq.q ? faq.q.replace("{productName}", product.name) : "No question available"}
              </p>
              <p className="faq-answer">
                <strong>A:</strong> {faq.a ? faq.a.replace("{productName}", product.name) : "No answer available"}
              </p>
            </div>
          ))}
        </div>
      )}


      {relatedProducts.length > 0 && <RelatedProductsSwiper />}
    </div>
  );
};

export default SingleProductPage;