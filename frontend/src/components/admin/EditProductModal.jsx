import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [formData, setFormData] = useState({
    product_code: "",
    name: "",
    category: "",
    subcategory: "",
    content: "",
    mainImage: null,
    subImages: [null, null, null], // fixed 3 slots
  });

  const [previewMainImage, setPreviewMainImage] = useState(null);
  const [previewSubImages, setPreviewSubImages] = useState([null, null, null]);

  const subImageInputs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-categories`);
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (formData.category) {
      const fetchSubcategories = async () => {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-subcategories/${formData.category}`
        );
        setSubcategories(res.data);
      };
      fetchSubcategories();
    }
  }, [formData.category]);

  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        product_code: product.product_code || "",
        name: product.name || "",
        category: product.category || "",
        subcategory: product.subcategory || "",
        content: product.content || "",
        mainImage: null,
        subImages: [null, null, null],
      }));

      setPreviewMainImage(product.image || "");
      setPreviewSubImages([
        product.subImages?.[0] || null,
        product.subImages?.[1] || null,
        product.subImages?.[2] || null,
      ]);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, mainImage: file }));
    setPreviewMainImage(URL.createObjectURL(file));
  };

  const handleSubImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newSubImages = [...formData.subImages];
    newSubImages[index] = file;

    const newPreviewImages = [...previewSubImages];
    newPreviewImages[index] = URL.createObjectURL(file);

    setFormData((prev) => ({ ...prev, subImages: newSubImages }));
    setPreviewSubImages(newPreviewImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("product_code", formData.product_code);
      data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("subcategory", formData.subcategory);
      data.append("content", formData.content);

      if (formData.mainImage) {
        data.append("mainImage", formData.mainImage);
      }

      formData.subImages.forEach((img) => {
        if (img) data.append("subImages", img);
      });

      await axios.put(
        `${import.meta.env.VITE_API_URL}/products/update-product/${product._id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Product updated successfully!");
      onSave();
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product.");
    }
  };

  return (
    <div className="edit-product-modal-overlay">
      <div className="edit-product-modal-container">
        <h2 className="edit-product-modal-title">Edit Product</h2>
        <form onSubmit={handleSubmit} className="edit-product-modal-form">
          {/* BASIC FIELDS */}
          <div className="edit-product-form-group">
            <input
              name="product_code"
              value={formData.product_code}
              onChange={handleChange}
              placeholder="Product Code"
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="edit-product-input"
            />
          </div>

          {/* CATEGORY */}
          <div className="edit-product-form-group">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="edit-product-input"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="edit-product-form-group">
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              required
              className="edit-product-input"
            >
              <option value="">Select Subcategory</option>
              {subcategories.map((sub, idx) => (
                <option key={idx} value={sub.name}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="edit-product-form-group full-width">
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Description"
              className="edit-product-textarea"
            />
          </div>

          {/* MAIN IMAGE */}
          <div className="edit-product-form-group full-width">
            <label>Main Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImageChange}
              className="edit-product-file-input"
            />
            {previewMainImage && (
              <img
                src={
                  previewMainImage.startsWith("blob")
                    ? previewMainImage
                    : `${import.meta.env.VITE_IMAGE_API_URL}${previewMainImage}`
                }
                alt="Main Preview"
                className="edit-product-main-image-preview"
              />
            )}
          </div>

          {/* SUB IMAGES */}
          <div className="edit-product-form-group full-width">
            <label>Sub Images (Max 3)</label>
            <div className="subimage-container-wrapper">
              {previewSubImages.map((img, i) => (
                <div
                  key={i}
                  className="subimage-slot"
                  onClick={() => subImageInputs[i].current.click()}
                >
                  {img ? (
                    <img
                      src={
                        img.startsWith("blob")
                          ? img
                          : `${import.meta.env.VITE_IMAGE_API_URL}${img}`
                      }
                      alt={`Sub ${i + 1}`}
                      className="edit-product-sub-image"
                    />
                  ) : (
                    <span className="plus-sign">+</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={subImageInputs[i]}
                    style={{ display: "none" }}
                    onChange={(e) => handleSubImageChange(e, i)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="edit-product-modal-actions full-width">
            <button
              type="button"
              className="edit-product-btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="edit-product-btn-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditProductModal;
