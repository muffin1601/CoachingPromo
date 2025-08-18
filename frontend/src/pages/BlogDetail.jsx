import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CommentSection from "../components/CommentSection";
import "../styles/Blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
      .then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <p className="blog-loading">Loading...</p>;

  return (
    <>
      <Helmet>
        <title>{blog.title} | CoachingPromo Blog</title>
        <meta
          name="description"
          content={
            blog.content?.slice(0, 150) ||
            "Read this blog on CoachingPromo about institute promotional products and customization trends."
          }
        />
        <link rel="canonical" href={`https://coachingpromo.in/blogs/${id}`} />
      </Helmet>

      <div className="blog-detail-container">
        <h2 className="blog-detail-title">{blog.title}</h2>
        {blog.media &&
          (blog.media.includes("mp4") ? (
            <video
              className="blog-detail-media"
              width="100%"
              controls
              src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
            />
          ) : (
            <img
              className="blog-detail-media"
              src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
              alt={blog.title}
              width="100%"
            />
          ))}
        <p className="blog-detail-content">{blog.content}</p>
        <CommentSection blogId={id} />
      </div>
    </>
  );
};

export default BlogDetail;
