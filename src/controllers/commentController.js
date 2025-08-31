const Comment = require('../models/Comment');
const Post = require('../models/Post');
const { AppError } = require('../utils/errorHandler');

exports.getPostComments = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    
    if (!post) {
      throw new AppError('Post not found', 404);
    }
    
    const comments = await Comment.find({ post: req.params.postId })
      .populate('author', 'name email')
      .sort('-createdAt');
    
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    
    if (!post) {
      throw new AppError('Post not found', 404);
    }
    
    const comment = await Comment.create({
      ...req.body,
      author: req.user.id,
      post: req.params.postId
    });
    
    await comment.populate('author', 'name email');
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    
    if (!comment) {
      throw new AppError('Comment not found', 404);
    }
    
    if (comment.author.toString() !== req.user.id) {
      throw new AppError('Unauthorized', 403);
    }
    
    Object.assign(comment, req.body);
    await comment.save();
    await comment.populate('author', 'name email');
    
    res.json(comment);
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    
    if (!comment) {
      throw new AppError('Comment not found', 404);
    }
    
    if (comment.author.toString() !== req.user.id) {
      throw new AppError('Unauthorized', 403);
    }
    
    await comment.deleteOne();
    res.status(200).json({ 
      success: true,
      message: 'Comment successfully deleted'
    });
  } catch (error) {
    next(error);
  }
};