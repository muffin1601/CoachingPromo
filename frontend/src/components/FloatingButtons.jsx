import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import "../styles/FloatingButtons.css";
import ContactForm from "./ContactForm";
import RegisterInstituteForm from "./RegisterInstituteForm";

const FloatingButtons = () => {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const toggleRegistrationForm = () => {
    setShowRegistrationForm((prev) => !prev);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-buttons">
      
      <a
        href="#"
        className="register-button"
        onClick={toggleRegistrationForm}
        data-title="Insert details"
      >
        <MdSchool className="icon-btn" />
      </a>
      <RegisterInstituteForm
        showRegistrationForm={showRegistrationForm}
       toggleRegistrationForm={toggleRegistrationForm}
      />
      
      <a
        href="https://wa.me/+919266013059"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        data-title="Chat on WhatsApp"
      >
        <FaWhatsapp className="icon-btn" />
      </a>

     
      <a
        href="#"
        onClick={toggleForm}
        className="email-button"
        data-title="Enquiry"
      >
        <FaEnvelope className="icon-btn" />
      </a>
      <ContactForm showForm={showForm} toggleForm={toggleForm} />

      
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button"

          aria-label="Go to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
