
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/loginModel');

// Login
router.post('/login', async (req, res) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ email });

if (!user) {
return res.status(401).json({ message: 'Invalid email or password' });
}

const isValidPassword = await user.isValidPassword(password);

if (!isValidPassword) {
return res.status(401).json({ message: 'Invalid email or password' });
}

const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET = 'zxfrtt');
res.json({ token });
} catch (error) {
console.error(error);
res.status(500).json({ message: 'Server error' });
}
});

// Signup
router.post('/signup', async (req, res) => {
try {
const { email, password } = req.body;
const existingUser = await User.findOne({ email });

if (existingUser) {
return res.status(400).json({ message: 'Email already exists' });
}

const newUser = new User({ email, password });
await newUser.save();

const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET='hgiug');
res.json({ token });
} catch (error) {
console.error(error);
res.status(500).json({ message: 'Server error' });
}
});

module.exports = router;