import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/Blog.css";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/blogs`).then((res) => setBlogs(res.data));
    }, []);

    return (
        <div className="blog-list-container">
            <div className="blog-list-header">
                <h2 className="blog-list-title">All Blogs</h2>
                <Link to="/blogs/new" className="blog-create-button">+ Create New Blog</Link>
            </div>
            <div className="blog-list-grid">
                {blogs.map((blog) => (
                    <div className="blog-card" key={blog._id}>
                        <h3 className="blog-card-title">{blog.title}</h3>
                        {blog.media && (
                            blog.media.includes('mp4') ?
                                <video className="blog-card-media" width="100%" controls src={blog.media} /> :
                                <img className="blog-card-media" src={blog.media} alt={blog.title} width="100%" />
                        )}
                        <p className="blog-card-content">{blog.content.slice(0, 100)}...</p>
                        <Link to={`/blogs/${blog._id}`} className="blog-readmore-link">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
