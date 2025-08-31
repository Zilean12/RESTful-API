const express = require('express');
const router = express.Router();
const { register, login, googleCallback, getMe, logout } = require('../controllers/authController');
const { authenticateGoogle, googleCallback: googleCallbackMiddleware, authenticateJWT } = require('../middleware/auth');
const { registerValidation, loginValidation } = require('../utils/validation');

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.get('/google', authenticateGoogle);
router.get('/google/callback', googleCallbackMiddleware, googleCallback);
router.get('/me', authenticateJWT, getMe);
router.post('/logout', authenticateJWT, logout);

module.exports = router;