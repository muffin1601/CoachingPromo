import React, { useEffect, useState } from "react";
import "../styles/ProductSlider.css";
import CategorySlider from "./CategorySlider";
import axios from "axios";

const ProductSlider = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="product-sliders">
      <h5>Our Collections</h5>
      {categories.map((category) => (
        <CategorySlider key={category._id} category={category} />
      ))}
    </div>
  );
};

export default ProductSlider;
