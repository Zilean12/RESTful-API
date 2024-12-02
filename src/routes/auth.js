const express = require('express');
const router = express.Router();
const { register, login, googleCallback } = require('../controllers/authController');
const { authenticateGoogle, googleCallback: googleCallbackMiddleware } = require('../middleware/auth');
const { registerValidation, loginValidation } = require('../utils/validation');

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.get('/google', authenticateGoogle);
router.get('/google/callback', googleCallbackMiddleware, googleCallback);

module.exports = router;