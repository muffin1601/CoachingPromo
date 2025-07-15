const express = require('express');
require ("dotenv").config();
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET;

router.post("/login", (req, res) => {
  console.log("🔐 Login request received:", req.body);

  const { email, password } = req.body;

  if (email === "admin@coachingpromo.in" && password === "mfcoachingpromo") {
    if (!SECRET_KEY) {
      console.error("❌ JWT_SECRET is undefined!");
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token, user: { email } });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
