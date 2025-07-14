import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [user, setUser] = useState('');

  const fetchComments = () => {
    axios.get(`/api/comments/${blogId}`).then((res) => setComments(res.data));
  };

  useEffect(() => {
    fetchComments();
  }, [blogId]);

  const handleComment = async (e) => {
    e.preventDefault();
    if (!text) return;
    await axios.post(`${import.meta.env.VITE_API_URL}/comments`, { blogId, text, user });
    setText('');
    setUser('');
    fetchComments();
  };

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleComment}>
        <input
          type="text"
          placeholder="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <textarea
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Post Comment</button>
      </form>
      <ul>
        {comments.map((c) => (
          <li key={c._id}>
            <strong>{c.user}</strong>: {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
