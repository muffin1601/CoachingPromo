import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/productpage.css";
// import subproductsData from "../data/products";
import Navbar from "../components/Navbar";
import { FaBrush, FaEye } from "react-icons/fa";
import Footer from "../components/Footer";
import axios from "axios";
import SearchOverlay from "../components/SearchOverlay";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const ProductPage = () => {  
  const { category, productName } = useParams();
  console.log(productName); // Get product name from URL
  const [filteredSubproducts, setFilteredSubproducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);
  const [relatedSubcategories, setRelatedSubcategories] = useState([]);
  const [subcategoryMeta, setSubcategoryMeta] = useState({});


useEffect(() => {
  if (category) {
    axios
      .get(`${import.meta.env.VITE_API_URL}/related-subcategories/${category}`)
      .then((res) => {
        setRelatedSubcategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching subcategories:", err);
      });
  }
}, [category]);


  useEffect(() => {
    if (category && productName) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/${category}/${productName}`)
        .then((res) => {
          console.log("Fetched from backend:", res.data);
          setSubcategoryMeta(res.data.subcategory || {});
          setFilteredSubproducts(res.data.products || []);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    }
  }, [category, productName]);

  
  return (
    <div>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} toggleSearch={toggleSearch} />
        {showSearch && (
          <SearchOverlay showSearch={showSearch} toggleSearch={toggleSearch} />
        )}
      <h2 className="product-heading">{productName ? decodeURIComponent(productName) : "Product Name"}</h2>
      <h3 className="product-subheading-2">{subcategoryMeta.sec_head}</h3>
      <h4 className="product-subheading-3">{subcategoryMeta.third_head}</h4>
      <div className="subproduct-container">
        {/* Check if there are subproducts */}
        {filteredSubproducts.length > 0 ? (
          filteredSubproducts.map((sub, index) => (
            <div key={index} className="subproduct-card">
              
              {/* Image on Right */}
              <img src={`${import.meta.env.VITE_IMAGE_API_URL}${sub.image}`} alt={sub.name} />

              {/* Text on Left */}
              <div className="subproduct-text">
                <h3 className="subproduct-name">{sub.name}</h3>
                <p className="subproduct-content">{sub.content}</p>
                {/* <p className="subproduct-price">Price: ₹{parseFloat(sub.price.toString().replace("₹", "")).toFixed(2)}</p> */}
                {/* <p className="subproduct-rating">Rating: <span>★★★★☆</span></p> */}
                <div className="button-container">
                <button className="view-button" onClick={() => window.location.href = `/${category}/${productName}/${encodeURIComponent(sub.name)}`} >   
                  <FaEye/> View
                </button>
                {/* <button className="custom-btn1"><span className="custom-icon"><FaBrush/></span>Customize</button> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No subproducts available.</p>
        )}
      </div>
      <div className="container-2">
        <h2 className="foot-head">{subcategoryMeta.foot_head}</h2>
        <h3 className="foot-subhead">{subcategoryMeta.foot_subhead}</h3>
        <p className="foot-content">{subcategoryMeta.foot_content}</p>
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="related-swiper"
          >
            {relatedSubcategories.map((subcat, idx) => (
              <SwiperSlide key={idx}>
                <div className="related-card">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_API_URL}${subcat.image}`}
                    alt={subcat.name}
                    className="related-image"
                  />
                  <h4 className="related-title">{subcat.name}</h4>
                  <button
                        className="cta-button"
                        onClick={() =>
                          window.location.href = `/${encodeURIComponent(category)}/${encodeURIComponent(subcat.name)}`
                        }
                      >
                        View Products
                      </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
