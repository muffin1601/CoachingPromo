import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "./styles/EditProductModal.css";

const AddSubcategoryModal = ({ isOpen, onClose }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [showDeleteSection, setShowDeleteSection] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategoryName, setSelectedSubcategoryName] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  
  // For edit mode: fields to edit
  const [editSubcategoryName, setEditSubcategoryName] = useState('');
  const [editImageFile, setEditImageFile] = useState(null);
  const [editPreviewImage, setEditPreviewImage] = useState(null);

  useEffect(() => {
    if (isOpen) fetchCategories();
  }, [isOpen]);

  useEffect(() => {
    if (selectedCategoryId && (showDeleteSection || isEditMode)) {
      fetchSubcategories(selectedCategoryId);
    }
  }, [selectedCategoryId, showDeleteSection, isEditMode]);

  useEffect(() => {
    if (isEditMode && selectedSubcategoryName && subcategories.length) {
      const subcat = subcategories.find(sub => sub.name === selectedSubcategoryName);
      if (subcat) {
        setEditSubcategoryName(subcat.name);
        setEditPreviewImage(subcat.image ? `${import.meta.env.VITE_IMAGE_API_URL}${subcat.image}` : null);
        setEditImageFile(null);
        setError('');
      }
    } else {
      // Clear edit fields if not edit mode or no subcategory selected
      setEditSubcategoryName('');
      setEditPreviewImage(null);
      setEditImageFile(null);
    }
  }, [isEditMode, selectedSubcategoryName, subcategories]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-categories`);
      setCategories(res.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const fetchSubcategories = async (categoryId) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-subcategories/${categoryId}`);
      setSubcategories(res.data);
    } catch (err) {
      console.error('Error fetching subcategories:', err);
    }
  };

  // Add subcategory submit
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategoryId || !subcategoryName.trim() || !imageFile) {
      setError('All fields are required.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('categoryId', selectedCategoryId);
      formData.append('name', subcategoryName);
      formData.append('image', imageFile);

      await axios.post(`${import.meta.env.VITE_API_URL}/add-subcategory`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('Subcategory added successfully!');
      setSubcategoryName('');
      setImageFile(null);
      setError('');
      onClose();
    } catch (err) {
      console.error(err);
      setError('Failed to add subcategory');
    }
  };

  // Edit subcategory submit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategoryId || !selectedSubcategoryName || !editSubcategoryName.trim()) {
      setError('Please fill all fields.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', editSubcategoryName);
      if (editImageFile) {
        formData.append('image', editImageFile);
      }
      
      await axios.put(`${import.meta.env.VITE_API_URL}/edit-subcategory/${selectedCategoryId}/${selectedSubcategoryName}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('Subcategory updated successfully!');
      setError('');
      setIsEditMode(false);
      setSelectedSubcategoryName('');
      fetchSubcategories(selectedCategoryId);
      onClose();
    } catch (err) {
      console.error(err);
      setError('Failed to update subcategory');
    }
  };

  const handleDelete = async () => {
    if (!selectedCategoryId || !selectedSubcategoryName) {
      toast.error('Please select a subcategory to delete.');
      return;
    }

    if (!window.confirm(`Delete subcategory "${selectedSubcategoryName}"?`)) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/delete-subcategory/${selectedCategoryId}/${selectedSubcategoryName}`);
      toast.success('Subcategory deleted successfully');
      setSelectedSubcategoryName('');
      fetchSubcategories(selectedCategoryId);
    } catch (err) {
      console.error('Delete error:', err);
      toast.error('Failed to delete subcategory');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay add-subcategory-modal__overlay">
      <div className="form-container add-subcategory-modal__container">
        <button className="close-button add-subcategory-modal__close" onClick={onClose}>&times;</button>

        {!isEditMode ? (
          <>
            <h2 className="head add-subcategory-modal__title">Add Subcategory</h2>
            <p className="subtitle-form add-subcategory-modal__subtitle">Enter details below</p>
            <form onSubmit={handleAddSubmit} className="add-subcategory-modal__form">
              <select
                className="filter-modal-select add-subcategory-modal__select-category"
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>

              <input
                className="filter-modal-select add-subcategory-modal__input-name"
                type="text"
                placeholder="Subcategory Name"
                value={subcategoryName}
                onChange={(e) => {
                  setSubcategoryName(e.target.value);
                  setError('');
                }}
                required
              />

              <input
                className="filter-modal-select add-subcategory-modal__input-file"
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                required
              />

              {error && <div className="error-message add-subcategory-modal__error">{error}</div>}

              <button type="submit-add" className="submit-button add-subcategory-modal__submit">Add</button>
            </form>
          </>
        ) : (
          <>
            <h2 className="head add-subcategory-modal__title">Edit Subcategory</h2>
            <p className="subtitle-form add-subcategory-modal__subtitle">Select and edit a subcategory</p>
            <form onSubmit={handleEditSubmit} className="add-subcategory-modal__form">
              <select
                className="filter-modal-select add-subcategory-modal__select-category"
                value={selectedCategoryId}
                onChange={(e) => {
                  setSelectedCategoryId(e.target.value);
                  setSelectedSubcategoryName('');
                }}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>

              <select
                className="filter-modal-select add-subcategory-modal__select-subcategory"
                value={selectedSubcategoryName}
                onChange={(e) => setSelectedSubcategoryName(e.target.value)}
                disabled={!selectedCategoryId}
                required
              >
                <option value="">Select Subcategory</option>
                {subcategories.map((sub) => (
                  <option key={sub.name} value={sub.name}>{sub.name}</option>
                ))}
              </select>

              <input
                className="filter-modal-select add-subcategory-modal__input-name"
                type="text"
                placeholder="Subcategory Name"
                value={editSubcategoryName}
                onChange={(e) => {
                  setEditSubcategoryName(e.target.value);
                  setError('');
                }}
                required
              />

              <input
                className="filter-modal-select add-subcategory-modal__input-file"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setEditImageFile(e.target.files[0]);
                  if (e.target.files[0]) {
                    setEditPreviewImage(URL.createObjectURL(e.target.files[0]));
                  } else {
                    setEditPreviewImage(null);
                  }
                }}
              />

              {editPreviewImage && (
                <img
                  className="add-subcategory-modal__preview-image"
                  src={editPreviewImage}
                  alt="Subcategory Preview"
                  style={{ width: '150px', marginTop: '10px', borderRadius: '8px' }}
                />
              )}

              {error && <div className="error-message add-subcategory-modal__error">{error}</div>}

              <button type="submit-s" className="submit-button add-subcategory-modal__submit" style={{ backgroundColor: '#3498db' }}>
                Save Changes
              </button>
            </form>
          </>
        )}

        {/* Toggle Button Add/Edit */}
        <button
          className="submit-e-button add-subcategory-modal__toggle-edit"
          onClick={() => {
            setIsEditMode(prev => !prev);
            setError('');
            setSelectedSubcategoryName('');
          }}
          style={{ marginBottom: '20px', backgroundColor: isEditMode ? '#3498db' : '#2ecc71' }}
        >
          {isEditMode ? 'Add Subcategory' : 'Edit Subcategory'}
        </button>

        {/* Toggle Delete Section */}
        <button
          onClick={() => setShowDeleteSection((prev) => !prev)}
          className="submit-d-button add-subcategory-modal__toggle-delete"
          style={{ marginTop: '25px', backgroundColor: '#f39c12' }}
        >
          {showDeleteSection ? 'Hide' : 'Delete Subcategories'}
        </button>

        {/* Delete Section */}
        {showDeleteSection && (
          <>
            <h2 className="head add-subcategory-modal__title" style={{ marginTop: '25px' }}>Delete Subcategory</h2>
            <select
              className="filter-modal-select add-subcategory-modal__select-delete"
              value={selectedSubcategoryName}
              onChange={(e) => setSelectedSubcategoryName(e.target.value)}
              disabled={!selectedCategoryId}
            >
              <option value="">Select Subcategory to Delete</option>
              {subcategories.map((sub) => (
                <option key={sub.name} value={sub.name}>
                  {sub.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleDelete}
              className="submit-button add-subcategory-modal__delete"
              style={{ backgroundColor: '#e74c3c' }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddSubcategoryModal;
