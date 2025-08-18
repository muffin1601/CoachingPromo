import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../styles/Blog.css";

const BlogForm = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [media, setMedia] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (media) data.append("media", media);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/blogs/post-blogs`, data);
      alert("Blog posted!");
      setForm({ title: "", content: "", author: "" });
      setMedia(null);
      navigate("/blogs");
    } catch (err) {
      console.error("Error posting blog:", err);
      alert("Failed to post blog.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Blog | CoachingPromo</title>
        <meta
          name="description"
          content="Write and publish a new blog on CoachingPromo."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://coachingpromo.in/blogs/new" />
      </Helmet>

      <div className="form-overlay-4">
        <div className="form-container-4">
          <button className="close-button-4" onClick={() => navigate(-1)}>
            ×
          </button>
          <h2 className="head-4">Create New Blog</h2>
          <p className="subtitle-form-4">
            Fill out the form below to post your blog.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="form-input-4"
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <input
              className="form-input-4"
              type="text"
              name="author"
              placeholder="Author Name"
              value={form.author}
              onChange={handleChange}
              required
            />
            <textarea
              className="form-textarea-4"
              name="content"
              placeholder="Content"
              rows="6"
              value={form.content}
              onChange={handleChange}
              required
            />
            <input
            className="form-file-input-4"
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setMedia(e.target.files[0])}
            />
            <button className="form-button-4" type="submit">
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
