import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterInstituteForm = ({ showRegistrationForm, toggleRegistrationForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    category: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
    setSuccess("");
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Send lead to CRM
      const crmRes = await axios.post(import.meta.env.VITE_CRM_API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CRM_API_KEY,
        },
      });

      // 2. Send email
      const emailRes = await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);

      if ((crmRes.status === 200 || crmRes.status === 201) && (emailRes.status === 200 || emailRes.status === 201)) {
        toast.success("Institute registered successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          category: "",
          description: "",
        });

        setTimeout(() => {
          toggleRegistrationForm();
        }, 1000);
      } else {
        throw new Error("Failed to register institute");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to register institute. Please try again." );
    }
  };

  if (!showRegistrationForm) return null;

  return (
    <div className="form-overlay register-institute-form-overlay">
      <div className="form-container register-institute-form-container">
        <button className="close-button register-institute-close-button" onClick={toggleRegistrationForm}>
          &times;
        </button>
        <h2 className="head register-institute-head">Register Your Institute</h2>
        <p className="subtitle-form register-institute-subtitle">
          Fill out the form below to register your institute
        </p>

        <form onSubmit={handleSubmit} autoComplete="off" className="register-institute-form">
          <input
            type="text"
            name="name"
            placeholder="Institute Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="register-institute-input register-institute-name"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="register-institute-input register-institute-email"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="register-institute-input register-institute-phone"
          />

          <input
            type="text"
            name="address"
            placeholder="Institute Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="register-institute-input register-institute-address"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="register-institute-select register-institute-category"
          >
            <option value="" className="register-institute-option">Select Category</option>
            <option value="coaching" className="register-institute-option">Coaching</option>
            <option value="school" className="register-institute-option">School</option>
            <option value="college" className="register-institute-option">College</option>
            <option value="training" className="register-institute-option">Training Center</option>
          </select>

          <textarea
            name="description"
            placeholder="Brief Description"
            value={formData.description}
            onChange={handleChange}
            className="register-institute-textarea register-institute-description"
          />

          <button type="submit" className="submit-button-institute register-institute-submit-button">
            Submit
          </button>
        </form>

        {error && <div className="error-message register-institute-error">{error}</div>}
        {success && (
          <div className="success-message register-institute-success" style={{ color: "green" }}>
            {success}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterInstituteForm;
