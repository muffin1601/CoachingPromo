import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/ProductSlider.css";

const CategorySlider = ({ category }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

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
          modules={[Navigation, Pagination, Autoplay]} 
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
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
                          window.location.href = `/${slugify(category.name)}/${slugify(product.name)}`
                        }
                      >
                        View Products
                      </button>
                    </div>
                  </div>
                  <button
                    href='#'
                    type="button"
                    className="custom-btn"
                    aria-label="Add to favorites"
                  >
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
