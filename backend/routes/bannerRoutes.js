const express = require('express');
const Slide = require('../models/banner');
const router = express.Router();

router.get("/banners", async (req, res) => {
  try {
    const banners = await Slide.find();
    res.json(banners);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching banners" });
  }
});

module.exports = router;
