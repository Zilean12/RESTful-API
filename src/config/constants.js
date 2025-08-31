require('dotenv').config(); // Load environment variables from .env file

const constants = {
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-api',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || '/api/auth/google/callback',
};

module.exports = constants;
