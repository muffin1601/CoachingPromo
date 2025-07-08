import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "../styles/contactform.css";
import axios from "axios";
import { toast } from "react-toastify";
// re_NMYTtHWj_HaayAkH7tP5S9uktt7vWSgS1
const ContactForm = ({ showForm, toggleForm }) => {
  
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
    // 1. Send lead to CRM
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

    // 2. Send email
    await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);

    // Success message
    toast.success("Thank you! Your inquiry has been submitted.");
    console.log("Lead captured and email sent.");

    // Reset form
    setFormData({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    location: "",
    message: "",
    });
    toggleForm();
  } catch (error) {
    console.error("Submission failed:", error);
    toast.error("Something went wrong. Please try again later.");
  }
  };
  return (
  <>
    {showForm && (
    <div className="form-overlay">
      <div className="form-container">
      <button className="close-button" onClick={toggleForm}>
        <FaTimes className="close-icon"/>
      </button>
      <h2 className="head form-title">Enquire Now</h2>
      <p className="subtitle-form form-subtitle">Fill in the form, and we’ll get back to you shortly.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        </div>
        <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        </div>
        <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Phone (+91)"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="\d{10}"
          title="Phone number must be 10 digits"
          className="form-input"
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="companyname"
          placeholder="Company Name"
          value={formData.companyname}
          onChange={handleChange}
          required
          className="form-input"
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="form-input"
        />
        </div>
        <div className="form-group">
        <textarea
          name="message"
          placeholder="Tell us about your requirement..."
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        ></textarea>
        </div>
        <button type="submit" className="submit-button form-submit-btn">
        Request a Call Back
        </button>
      </form>
      </div>
    </div>
    )}
  </>
  );
};
export default ContactForm;
