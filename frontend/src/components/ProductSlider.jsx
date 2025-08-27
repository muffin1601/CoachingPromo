import React, { useEffect, useState } from "react";
import "../styles/ProductSlider.css";
import CategorySlider from "./CategorySlider";
import axios from "axios";

const ProductSlider = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="product-sliders">
      <h2>Explore Our Best-Selling Products</h2>
      <p className="subtitle-cat">
        Branded Merchandise Tailored for Coaching Institutes – Boost Your Brand
        with Style & Utility
      </p>
      {categories.map((category) => (
        <CategorySlider key={category._id} category={category} />
      ))}
    </div>
  );
};

export default ProductSlider;
