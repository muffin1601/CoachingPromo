import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/productpage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEye, FaWhatsapp, FaGlobe } from "react-icons/fa";
import axios from "axios";
import SearchOverlay from "../components/SearchOverlay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Helmet } from "react-helmet-async";
import { metaByProductName } from "../data/metaData";
import { fetchSlugMap, slugify } from "../utils/slugMap";

const ProductPage = () => {
  const [filteredSubproducts, setFilteredSubproducts] = useState([]);
  const [relatedSubcategories, setRelatedSubcategories] = useState([]);
  const [subcategoryMeta, setSubcategoryMeta] = useState({});
  const [slugMap, setSlugMap] = useState({});
  const { category: rawCategory, productName: rawProductName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadSlugMap = async () => {
      const map = await fetchSlugMap();
      setSlugMap(map);
    };
    loadSlugMap();
  }, []);

  const category = slugMap[rawCategory] || rawCategory;
  const productName = slugMap[`${rawCategory}/${rawProductName}`] || rawProductName;

  const meta = metaByProductName[productName] || {
    title: "CoachingPromo – Custom Promotional Products",
    description: "Explore premium promotional products for coaching institutes. T-Shirts, Bags, Stationery, and more. Bulk custom printing. PAN India shipping."
  };

  const canonicalUrl = `https://coachingpromo.in/${rawCategory}/${rawProductName}`;

  useEffect(() => {
    if (!category) return;
    axios.get(`${import.meta.env.VITE_API_URL}/related-subcategories/${category}`)
      .then((res) => setRelatedSubcategories(res.data))
      .catch((err) => console.error(err));
  }, [category]);

  useEffect(() => {
    if (!category || !productName) return;
    axios.get(`${import.meta.env.VITE_API_URL}/${category}/${productName}`)
      .then((res) => {
        setSubcategoryMeta(res.data.subcategory || {});
        setFilteredSubproducts(res.data.products || []);
      })
      .catch((err) => console.error(err));
  }, [category, productName]);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar />
      <SearchOverlay />
      <div>
        <h2 className="product-heading">{decodeURIComponent(productName)}</h2>
        <h3 className="product-subheading-2">{subcategoryMeta.sec_head}</h3>
        <h4 className="product-subheading-3">{subcategoryMeta.third_head}</h4>
        <div className="subproduct-container">
          {filteredSubproducts.length > 0 ? filteredSubproducts.map((sub, index) => {
            const categorySlug = slugify(category);
            const productSlug = slugify(productName);
            const subproductSlug = slugify(sub.name);
            return (
              <div key={index} className="subproduct-card">
                <img src={`${import.meta.env.VITE_IMAGE_API_URL}${sub.image}`} alt={sub.name} />
                <div className="subproduct-text">
                  <h3 className="subproduct-name">{sub.name}</h3>
                  <p className="subproduct-content">{sub.content}</p>
                  <div className="button-container">
                    <button className="view-button" onClick={() => navigate(`/${categorySlug}/${productSlug}/${subproductSlug}`)}>
                      <FaEye /> View
                    </button>
                  </div>
                </div>
              </div>
            );
          }) : <p>No subproducts available.</p>}
        </div>
        <div className="container-2">
          <h2 className="foot-head">{subcategoryMeta.foot_head}</h2>
          <h3 className="foot-subhead">{subcategoryMeta.foot_subhead}</h3>
          <p className="foot-content">{subcategoryMeta.foot_content}</p>
        </div>
        <div className="cta-section">
          <h2 className="cta-heading">📦 Bulk Orders | 🖨️ Custom Designs & Logo Engraving | 🚚 Fast Pan-India Delivery</h2>
          <p className="cta-contact">
            <FaWhatsapp className="icn" /> <a href="https://wa.me/+919266013059" target="_blank" rel="noopener noreferrer">+91 9266 013059</a> &nbsp;|&nbsp; 
            <FaGlobe className="icn-2" /> <a href="https://www.coachingpromo.in" target="_blank" rel="noopener noreferrer">www.CoachingPromo.in</a>
          </p>
        </div>
        {relatedSubcategories.length > 0 && (
          <>
            <h3 className="related-heading">Explore More</h3>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={15}
              slidesPerView={2}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
              className="related-swiper"
            >
              {relatedSubcategories.map((subcat, idx) => {
                const subcatSlug = slugify(subcat.name);
                const categorySlug = slugify(category);
                return (
                  <SwiperSlide key={idx}>
                    <div className="related-card">
                      <img src={`${import.meta.env.VITE_IMAGE_API_URL}${subcat.image}`} alt={subcat.name} className="related-image" />
                      <h4 className="related-title">{subcat.name}</h4>
                      <button className="cta-button" onClick={() => navigate(`/${categorySlug}/${subcatSlug}`)}>View Products</button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        )}
      
      </div>
    </>
  );
};

export default ProductPage;
