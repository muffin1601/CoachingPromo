import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Blog.css";

const BlogForm = () => {
  const [form, setForm] = useState({ title: '', content: '', media: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_API_URL}/post-blogs`, form);
    navigate('/blogs');
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Create New Blog</h2>
      <input
        className="form-input"
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        type="text"
        name="media"
        placeholder="Image or Video URL"
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="author"
        placeholder="Author Name"
        onChange={handleChange}
      />
      <textarea
        className="form-textarea"
        name="content"
        placeholder="Content"
        rows="6"
        onChange={handleChange}
        required
      />
      <button className="form-button" type="submit">Post</button>
    </form>
  );
};

export default BlogForm;
