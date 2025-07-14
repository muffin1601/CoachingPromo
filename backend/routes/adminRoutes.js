const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET;

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@coachingpromo.in" && password === "mfcoachingpromo") {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token, user: { email } });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
