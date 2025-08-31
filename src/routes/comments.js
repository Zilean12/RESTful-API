const express = require('express');
const router = express.Router({ mergeParams: true });
const { authenticateJWT } = require('../middleware/auth');
const { commentValidation, idValidation } = require('../utils/validation');
const {
  getPostComments,
  createComment,
  updateComment,
  deleteComment
} = require('../controllers/commentController');

router.use(authenticateJWT);

router.route('/')
  .get(getPostComments)
  .post(commentValidation, createComment);

router.route('/:id')
  .put([idValidation, commentValidation], updateComment)
  .delete(idValidation, deleteComment);

module.exports = router;