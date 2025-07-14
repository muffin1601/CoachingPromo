import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/blogs`).then((res) => setBlogs(res.data));

    }, []);

    return (
        <div>
            <h2>All Blogs</h2>
            <Link to="/blogs/new">+ Create New Blog</Link>
            <div>
                {blogs.map((blog) => (
                    <div key={blog._id}>
                        <h3>{blog.title}</h3>
                        {blog.media && (
                            blog.media.includes('mp4') ?
                                <video width="300" controls src={blog.media} /> :
                                <img src={blog.media} alt={blog.title} width="300" />
                        )}
                        <p>{blog.content.slice(0, 100)}...</p>
                        <Link to={`/blogs/${blog._id}`}>Read More</Link>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList; 
