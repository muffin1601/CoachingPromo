import React, { useState } from "react";
import "../styles/OfferBanner.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { toast } from "react-toastify";

const OfferBanner = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        import.meta.env.VITE_CRM_API_URL,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_CRM_API_KEY,
          },
        }
      );

      await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);

      toast.success("Thank you! Your inquiry has been submitted.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyname: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="offer-banner">
      <div className="offer-banner__overlay"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="offer-banner__animated-section"
      >
        <div className="offer-container">
          <h2 className="head">Get a free Quote</h2>
          <p className="subtitle-form">
            Fill in the form, and we’ll get back to you shortly.
          </p>
          <form className="offer-banner__form" onSubmit={handleSubmit}>
            <div className="offer-banner__form-group">
              <input
                className="offer-banner__input"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="offer-banner__form-group">
              <input
                className="offer-banner__input"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="offer-banner__form-group">
              <input
                className="offer-banner__input"
                type="tel"
                name="phone"
                placeholder="Phone (+91)"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="\d{10}"
                title="Phone number must be 10 digits"
              />
            </div>
            <div className="offer-banner__form-group">
              <input
                className="offer-banner__input"
                type="text"
                name="companyname"
                placeholder="Company Name"
                value={formData.companyname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="offer-banner__form-group">
              <input
                className="offer-banner__input"
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="offer-banner__form-group">
              <textarea
                className="offer-banner__textarea"
                name="message"
                placeholder="Tell us about your requirement..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Request a Call Back
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferBanner;
