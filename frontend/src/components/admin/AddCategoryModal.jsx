import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "../../styles/contactform.css";

const AddCategoryModal = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [showDeleteSection, setShowDeleteSection] = useState(false);
  const [showEditSection, setShowEditSection] = useState(false);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    if (isOpen) fetchCategories();
  }, [isOpen]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-categories`);
      setCategories(res.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category.trim()) {
      setError('Category name is required');
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/add-category`, { name: category });
      toast.success('Category added successfully');
      setCategory('');
      setError('');
      fetchCategories();
      onClose();
    } catch (err) {
      console.error(err);
      setError('Failed to add category');
    }
  };

  const handleDelete = async () => {
    if (!selectedCategoryId) {
      toast.error('Please select a category to delete.');
      return;
    }

    const categoryToDelete = categories.find(cat => cat._id === selectedCategoryId)?.name;
    const confirmDelete = window.confirm(`Are you sure you want to delete category "${categoryToDelete}"?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/delete-category/${selectedCategoryId}`);
      toast.success('Category deleted successfully');
      setSelectedCategoryId('');
      setShowDeleteSection(false);
      fetchCategories();
    } catch (err) {
      console.error('Delete error:', err);
      toast.error('Failed to delete category');
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!selectedCategoryId || !editName.trim()) {
      toast.error('Please select a category and enter a new name.');
      return;
    }

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/update-category/${selectedCategoryId}`, {
        name: editName.trim()
      });
      toast.success('Category updated successfully');
      setSelectedCategoryId('');
      setEditName('');
      setShowEditSection(false);
      fetchCategories();
    } catch (err) {
      console.error('Edit error:', err);
      toast.error('Failed to update category');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2 className="head">Add Category</h2>
        <p className="subtitle-form">Enter a new category name below</p>

        <form onSubmit={handleSubmit}>
          <input
          className='filter-modal-select'
            type="text"
            placeholder="Category Name"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setError('');
            }}
            required
          />
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="submit-button">Add</button>
        </form>

        <button
          onClick={() => setShowDeleteSection(prev => !prev)}
          className="submit-button"
          style={{ marginTop: '20px', backgroundColor: '#f39c12' }}
        >
          {showDeleteSection ? 'Hide' : 'Delete Categories'}
        </button>

        {showDeleteSection && (
          <>
            <h2 className="head" style={{ marginTop: '20px' }}>Delete Category</h2>
            <select
              className='category-select'
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
            >
              <option value="">Select Category to Delete</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleDelete}
              className="submit-button"
              style={{ backgroundColor: '#e74c3c' }}
            >
              Delete
            </button>
          </>
        )}

        <button
          onClick={() => setShowEditSection(prev => !prev)}
          className="submit-button"
          style={{ marginTop: '20px', backgroundColor: '#3498db' }}
        >
          {showEditSection ? 'Hide' : 'Edit Category'}
        </button>

        {showEditSection && (
          <>
            <h2 className="head" style={{ marginTop: '20px' }}>Edit Category</h2>
            <form onSubmit={handleEdit}>
              <select className='filter-modal-select'
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
              >
                <option value="">Select Category to Edit</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <input
              className='filter-modal-select'
                type="text"
                placeholder="New Category Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button type="submit" className="submit-button">Update</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AddCategoryModal;
