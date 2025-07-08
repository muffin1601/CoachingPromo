import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles/AddProductModal.css";
import { toast } from 'react-toastify';

const AddProductModal = ({ isOpen, onClose, onSave }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    product_code: '',
    content: '',
    price: '',
    image: null,
    subImages: [],
  });

  useEffect(() => {
    if (!isOpen) return;

    setSelectedCategoryId('');
    setSelectedSubcategoryId('');
    setProductData({
      name: '',
      product_code: '',
      content: '',
      price: '',
      image: null,
      subImages: [],
    });

    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-categories`);
        setCategories(res.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, [isOpen]);

  useEffect(() => {
    if (!selectedCategoryId) {
      setSubcategories([]);
      setSelectedSubcategoryId('');
      return;
    }

    const fetchSubcategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-subcategories/${selectedCategoryId}`
        );
        setSubcategories(res.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };
    fetchSubcategories();
  }, [selectedCategoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProductData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      alert("You can upload a maximum of 3 subimages.");
      e.target.value = ''; // clear the input
      return;
    }
    setProductData((prev) => ({ ...prev, subImages: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategoryId || !selectedSubcategoryId) {
      alert('Please select category and subcategory');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('product_code', productData.product_code);
      formData.append('content', productData.content);
      formData.append('price', productData.price);
      formData.append('image', productData.image);
      productData.subImages.forEach((file) => formData.append('subImages', file));

      await axios.post(
        `${import.meta.env.VITE_API_URL}/categories/${selectedCategoryId}/subcategories/${selectedSubcategoryId}/add-product`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      toast.success('Product added successfully!');
      onSave();
      onClose();
    } catch (error) {
      toast.error(`Error adding product: ${error.response?.data?.message || error.message}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="apm-backdrop">
      <div className="apm-modal">
        <h2 className="apm-title">Add New Product</h2>
        <form className="apm-form" onSubmit={handleSubmit}>
          <div className="apm-form-group">
            <select
              id="apm-category"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
              required
              className="apm-input"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="apm-form-group">
            <select
              id="apm-subcategory"
              value={selectedSubcategoryId}
              onChange={(e) => setSelectedSubcategoryId(e.target.value)}
              required
              className="apm-input"
            >
              <option value="">Select Subcategory</option>
              {subcategories.map((sub) => (
                <option key={sub._id} value={sub._id}>{sub.name}</option>
              ))}
            </select>
          </div>

          <div className="apm-form-group">
            <input
              id="apm-name"
              name="name"
              type="text"
              value={productData.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="apm-input"
            />
          </div>

          <div className="apm-form-group">
            <input
              id="apm-code"
              name="product_code"
              type="text"
              value={productData.product_code}
              onChange={handleChange}
              placeholder="Product Code"
              className="apm-input"
            />
          </div>

          <div className="apm-form-group">
            <textarea
              id="apm-content"
              name="content"
              value={productData.content}
              onChange={handleChange}
              placeholder="Description"
              className="apm-textarea"
            />
          </div>

          <div className="apm-form-group">
            <input
              id="apm-price"
              name="price"
              type="number"
              step="0.01"
              value={productData.price}
              onChange={handleChange}
              placeholder="Price"
              className="apm-input"
            />
          </div>

          <div className="apm-form-group">
            <input
              id="apm-image"
              name="image"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="apm-input-file"
            />
          </div>

          <div className="apm-form-group">
            <input
              id="apm-subImages"
              name="subImages"
              type="file"
              multiple
              onChange={handleSubImagesChange}
              accept="image/*"
              className="apm-input-file"
            />
            {productData.subImages.length > 0 && (
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                {productData.subImages.length} image(s) selected (max 3)
              </p>
            )}
          </div>

          <div className="apm-buttons">
            <button type="submit" className="apm-btn-submit">Add Product</button>
            <button type="button" className="apm-btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
