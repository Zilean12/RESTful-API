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

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment variables
cp .env.example .env
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yourdatabase
JWT_SECRET=your_very_secret_and_long_random_string
NODE_ENV=development
```

### 4. Run the Application

```bash
# Start the backend server
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
