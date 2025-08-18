import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../styles/Blog.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Blogs | CoachingPromo</title>
        <meta
          name="description"
          content="Explore CoachingPromo blogs for insights on institute promotional products, customization tips, and branding ideas for schools, colleges, and universities."
        />
        <link rel="canonical" href="https://coachingpromo.in/blogs" />
      </Helmet>

      <div className="blog-list-container">
        <div className="blog-list-header">
          <h2 className="blog-list-title">All Blogs</h2>
          <Link to="/blogs/new" className="blog-create-button">
            + Create New Blog
          </Link>
        </div>

        <div className="blog-list-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <h3 className="blog-card-title">{blog.title}</h3>
              
              <div className="blog-card-meta">
                <span className="blog-card-author">{blog.author}</span> |{" "}
                <span className="blog-card-date">
                  {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              {blog.media &&
                (blog.media.includes("mp4") ? (
                  <video
                    className="blog-card-media"
                    width="100%"
                    controls
                    src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
                  />
                ) : (
                  <img
                    className="blog-card-media"
                    src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
                    alt={blog.title}
                    width="100%"
                  />
                ))}
              <p className="blog-card-content">
                {blog.content.slice(0, 100)}...
              </p>
              <Link to={`/blogs/${blog._id}`} className="blog-readmore-link">
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* New content below the blogs */}
        <div className="blog-list-extra-content">
          <p>
            Discover how promotional items like custom t-shirts, bags, diaries,
            and stationery can help boost your institute or business branding.
            Our latest blogs share creative ideas, real client stories, and
            trending corporate gifting solutions for 2025. Stay updated, grow
            organically, and make your brand memorable.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogList;
