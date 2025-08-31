# 🚀 MERN Stack RESTful API with Authentication

## 📋 Project Overview

A comprehensive RESTful API built with the MERN stack, offering robust authentication and user management features.

## ✨ Key Features

- 🔐 **Secure Authentication**
  - User registration and login
  - JWT-based token authentication
  - Secure password encryption
  - Protected routes

- 🛡️ **User Management**
  - Create, Read, Update, and Delete (CRUD) user operations
  - User profile management
  - Role-based access control

- 💬 **Comment System**
  - Add comments to posts
  - Update and delete own comments
  - View all comments on posts
  - Author-based comment authorization

- 🔒 **Security Measures**
  - JWT token authentication
  - Bcrypt password hashing
  - Middleware route protection
  - Comprehensive error handling

## 🛠️ Technology Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Password Encryption: Bcrypt

## 🔧 Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm or yarn

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Zilean12/RESTful-API.git
cd RESTful-API
```

### 2. file Setup

```bash
# Install dependencies
npm install

# Create environment variables
cp .env.example .env
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yourdatabase
JWT_SECRET=your_very_secret_and_long_random_string
NODE_ENV=development

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
```

### Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Create a new OAuth 2.0 Client ID
5. Set up the authorized redirect URIs
6. Copy the Client ID and Client Secret into your `.env` file

### 4. Run the Application

```bash
# Start the application
npm start
```

## 🌐 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | User login |
| `POST` | `/api/auth/logout` | User logout |
| `GET` | `/api/auth/me` | Get user profile |

### User Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users/` | Get all users (protected) |
| `GET` | `/api/users/:id` | Get user by ID (protected) |
| `PUT` | `/api/users/:id` | Update user (protected) |
| `DELETE` | `/api/users/:id` | Delete user (protected) |

### Comment Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/posts/:postId/comments` | Get all comments for a post (protected) |
| `POST` | `/api/posts/:postId/comments` | Create a new comment on a post (protected) |
| `PUT` | `/api/posts/:postId/comments/:id` | Update a comment (protected) |
| `DELETE` | `/api/posts/:postId/comments/:id` | Delete a comment (protected) |

## 🧪 Postman Testing

1. Register a new user
2. Login and receive JWT token
3. Use token in Authorization header for protected routes
   - Header Key: `Authorization`
   - Header Value: `Bearer your_jwt_token`

## 🛡️ Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected routes
- Token-based logout
- Comprehensive error handling middleware

## 🚨 Troubleshooting

- Ensure MongoDB is running
- Verify `.env` file configuration
- Check Node.js and npm versions

## 📜 License

This project is open-source and available under the MIT License.


## 🌟 Contributing

Contributions are welcome! Please check the GitHub repository for contribution guidelines.

---

**Happy Coding! 👨‍💻👩‍💻**
