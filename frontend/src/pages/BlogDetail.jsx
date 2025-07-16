import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import "../styles/Blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/blogs/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <p className="blog-loading">Loading...</p>;

  return (
    <div className="blog-detail-container">
      <h2 className="blog-detail-title">{blog.title}</h2>
      {blog.media && (
        blog.media.includes('mp4') ? (
          <video className="blog-detail-media" width="100%" controls src={blog.media} />
        ) : (
          <img className="blog-detail-media" src={blog.media} alt={blog.title} width="100%" />
        )
      )}
      <p className="blog-detail-content">{blog.content}</p>
      <CommentSection blogId={id} />
    </div>
  );
};

export default BlogDetail;
