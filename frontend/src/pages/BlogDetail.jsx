import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/blogs/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      {blog.media && (
        blog.media.includes('mp4') ?
        <video width="500" controls src={blog.media} /> :
        <img src={blog.media} alt={blog.title} width="500" />
      )}
      <p>{blog.content}</p>
      <CommentSection blogId={id} />
    </div>
  );
};

export default BlogDetail;
