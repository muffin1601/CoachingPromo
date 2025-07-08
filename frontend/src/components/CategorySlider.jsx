import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ import Autoplay
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/ProductSlider.css";

const CategorySlider = ({ category }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="animated-section-1"
    >
      <h2 className="section-title">{category.name}</h2>

      <section className="product-slider">
        <Swiper
          className="swiper"
          modules={[Navigation, Pagination, Autoplay]} // ✅ Add Autoplay
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // ✅ time in ms between slides
            disableOnInteraction: false, // keeps autoplay even after user interaction
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {category.subcategories.map((product) => (
            <SwiperSlide key={product.name}>
              <div className="product-card">
                <div className="product-image-container">
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <div className="product-title">{product.name}</div>
                      <button
                        className="cta-button"
                        onClick={() =>
                          window.location.href = `/${encodeURIComponent(
                            category.name
                          )}/${encodeURIComponent(product.name)}`
                        }
                      >
                        View Products
                      </button>
                    </div>
                  </div>
                  <button className="custom-btn">
                    <FaHeart />
                  </button>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_API_URL}${product.image}`}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </motion.div>
  );
};

export default CategorySlider;
