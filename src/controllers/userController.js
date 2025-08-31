const User = require('../models/User');
const { AppError } = require('../utils/errorHandler');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      throw new AppError('User not found', 404);
    }
    
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      throw new AppError('User not found', 404);
    }
    
    // Prevent updating password through this endpoint
    const { password, ...updateData } = req.body;
    
    Object.assign(user, updateData);
    await user.save();
    
    // Return user without password
    const updatedUser = await User.findById(user.id).select('-password');
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      throw new AppError('User not found', 404);
    }
    
    await user.deleteOne();
    res.status(200).json({
      success: true,
      message: 'User successfully deleted'
    });
  } catch (error) {
    next(error);
  }
};