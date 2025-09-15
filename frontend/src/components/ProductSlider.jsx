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
      <h2>Check Out Our Top Promotional Products for Coaching Institutes</h2>
      <p className="subtitle-cat">
        Boost your coaching institute’s visibility with our promotional products for coaching institutes in Delhi, Okhla, South Delhi, and Gurgaon. Get custom t-shirts, bags, premium stationery, and event giveaways designed to combine style and practicality, helping your institute build a stronger and more recognizable brand identity.
      </p>
      {categories.map((category) => (
        <CategorySlider key={category._id} category={category} />
      ))}
    </div>
  );
};

export default ProductSlider;
