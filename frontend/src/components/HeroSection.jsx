import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css"; 
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import axios from "axios";


const HeroSection = ({ offerBannerRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [slides, setSlides] = useState([]);

  
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/banners`);
        console.log("Fetched slides:", res.data);

        const bannerData = Array.isArray(res.data) ? res.data : res.data.banners;

        if (Array.isArray(bannerData)) {
          setSlides(bannerData);
        } else {
          console.error("Invalid banner data format:", res.data);
        }
      } catch (err) {
        console.error("Failed to load banners", err);
      }
    };

    fetchSlides();
  }, []);
   
  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleEnquireNowClick = () => {
    offerBannerRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
            <div className="overlay"></div>

            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                playsInline
                loop
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}

            <div className="overlay"></div>

            {/* Animated Content */}
            {/* <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 1, duration: 1.2, ease: "easeOut" }} // Delayed smooth animation
              className="animated-section"
            > */}
              <div className="slide-content">
                <span className="tag">From Passion to Profits – Promote Smarter!</span>
                <h1 className="slide-title">{slide.title}</h1>
                <h3 className="slide-subtitle">{slide.subtitle}</h3>
                <a href="#" onClick={handleEnquireNowClick} className="btn-hero">
                  Enquire Now
                </a>
              </div>
            {/* </motion.div> */}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
