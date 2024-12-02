const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { AppError } = require('../utils/errorHandler');
const { JWT_SECRET } = require('../config/constants');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET);
};

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      throw new AppError('Email already registered', 400);
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user.id);
    
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await user.comparePassword(password))) {
      throw new AppError('Invalid credentials', 401);
    }
    
    const token = generateToken(user.id);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

exports.googleCallback = (req, res) => {
  const token = generateToken(req.user.id);
  res.json({ token });
};