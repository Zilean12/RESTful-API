const express = require('express');
const cors = require('cors');
const passport = require('./config/passport');
const connectDB = require('./config/db');
const { handleErrors } = require('./utils/errorHandler');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Error handling
app.use(handleErrors);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;