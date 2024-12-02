const Post = require('../models/Post');
const { AppError } = require('../utils/errorHandler');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name email')
      .sort('-createdAt');
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'name email');
      
    if (!post) {
      throw new AppError('Post not found', 404);
    }
    
    res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      ...req.body,
      author: req.user.id
    });
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      throw new AppError('Post not found', 404);
    }
    
    if (post.author.toString() !== req.user.id) {
      throw new AppError('Unauthorized', 403);
    }
    
    Object.assign(post, req.body);
    await post.save();
    res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      throw new AppError('Post not found', 404);
    }
    
    if (post.author.toString() !== req.user.id) {
      throw new AppError('Unauthorized', 403);
    }
    
    await post.deleteOne();
    res.status(200).json({ 
      success: true,
      message: 'Post successfully deleted'
    });
  } catch (error) {
    next(error);
  }
};