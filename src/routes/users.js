const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/auth');
const { idValidation, userUpdateValidation } = require('../utils/validation');
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.use(authenticateJWT);

router.route('/')
  .get(getAllUsers);

router.route('/:id')
  .get(idValidation, getUser)
  .put([idValidation, userUpdateValidation], updateUser)
  .delete(idValidation, deleteUser);

module.exports = router;