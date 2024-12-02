const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/auth');
const { postValidation, idValidation } = require('../utils/validation');
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

router.use(authenticateJWT);

router.route('/')
  .get(getAllPosts)
  .post(postValidation, createPost);

router.route('/:id')
  .get(idValidation, getPost)
  .put([idValidation, postValidation], updatePost)
  .delete(idValidation, deletePost);

module.exports = router;