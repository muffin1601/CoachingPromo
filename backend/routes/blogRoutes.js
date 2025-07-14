const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Comment = require('../models/Comment');

router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1});
        res.json(blogs);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/blogs/:id', async (req,res) => {
    try {
       const blog = await Blog.findById(req.params.id);
       res.json(blog);
    } catch (err) {
        res.status(404).json({error: "Blog not found "});
    }
});

router.post('/post-blogs', async(req, res) => {
    const {title, content , media, author} = req.body;
    try {
        const newBlog = new Blog({title, content, media , author});
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});

router.get('/blogs/:blogId', async (req, res) => {
    try {
        const comments = await Comment.find({ blogId: req.params.blogId}).sort({ createfdAt: -1 });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/comments', async (req, res) => {
  const { blogId, user, text } = req.body;
  try {
    const newComment = new Comment({ blogId, user, text });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;