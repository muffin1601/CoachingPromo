import React, { useState, useEffect, useRef } from "react";
import "../styles/HeroSection.css";
import axios from "axios";

const HeroSection = ({ offerBannerRef }) => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/banners`);
        const bannerData = Array.isArray(res.data) ? res.data : res.data.banners;

        if (Array.isArray(bannerData)) {
          setSlides(bannerData);
        } else {
          console.error("Invalid banner data format:", res.data);
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [slides]);

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleEnquireNowClick = (e) => {
    e.preventDefault();
    offerBannerRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="slider">
        <div
          className="slide-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="media"
                />
              ) : (
                <img src={slide.src} alt={slide.title} className="media" />
              )}
              {/* Only show overlay, tag, and button if id is not 1 or 2 */}
              {slide.id !== 1 && slide.id !== 2 && (
                <>
                  <div className="overlay" />
                  <div className="slide-content">
                    <span className="tag">From Passion to Profits – Promote Smarter!</span>
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-subtitle">{slide.subtitle}</p>
                    <a href="#" onClick={handleEnquireNowClick} className="btn-hero">
                      Enquire Now
                    </a>
                  </div>
                </>
              )}
              {/* If id is 1 or 2, still show title and subtitle */}
              {(slide.id === 1 || slide.id === 2) && (
                <div className="slide-content">
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="nav prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav next" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;