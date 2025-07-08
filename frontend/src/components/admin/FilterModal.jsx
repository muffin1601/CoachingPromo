import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterModal = ({ isOpen, onClose, onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  useEffect(() => {
    if (isOpen) {
      fetchCategories();
      resetFilters();
    }
  }, [isOpen]);

  const resetFilters = () => {
    setSelectedCategory("");
    setSubcategories([]);
    setSelectedSubcategory("");
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      setCategories(res.data.categories || res.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      const cat = categories.find(
        (cat) => cat.category === selectedCategory || cat.name === selectedCategory
      );
      if (cat) {
        setSubcategories(cat.products || cat.subcategories || []);
        setSelectedSubcategory("");
      }
    } else {
      setSubcategories([]);
      setSelectedSubcategory("");
    }
  }, [selectedCategory, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ category: selectedCategory, subcategory: selectedSubcategory });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay filter-modal-overlay">
      <div className="form-container filter-modal-container">
        <button className="close-button filter-modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="head filter-modal-title">Filter Products</h2>

        <form className="filter-modal-form" onSubmit={handleSubmit}>
          <label className="filter-modal-label" htmlFor="category">Category</label>
          <select
            className="filter-modal-select filter-modal-category-select"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option className="filter-modal-option" value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option
                className="filter-modal-option"
                key={cat._id || cat.category || cat.name}
                value={cat.category || cat.name}
              >
                {cat.category || cat.name}
              </option>
            ))}
          </select>

          <label className="filter-modal-label" htmlFor="subcategory">Subcategory</label>
          <select
            className="filter-modal-select filter-modal-subcategory-select"
            id="subcategory"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            disabled={!subcategories.length}
          >
            <option className="filter-modal-option" value="">-- Select Subcategory --</option>
            {subcategories.map((sub) => (
              <option
                className="filter-modal-option"
                key={sub._id || sub.name}
                value={sub.name}
              >
                {sub.name}
              </option>
            ))}
          </select>

          <button type="submit" className="submit-button filter-modal-submit-button">
            Apply Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
