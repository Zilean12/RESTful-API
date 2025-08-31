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

**Frontend:**
- React.js with modern hooks
- React Router for navigation
- Axios for API communication
- Responsive CSS design

**Backend:**
- Node.js, Express.js
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

### 2. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client && npm install
cd ..
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mern-api
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

### 4. Run the Application

**Development (with both frontend and backend):**
```bash
# Run both frontend and backend concurrently
npm run dev:full
```

**Backend only:**
```bash
npm run dev
```

**Frontend only:**
```bash
npm run client
```

**Production:**
```bash
# Build frontend
npm run build

# Start production server
npm start
```

The frontend will be available at `http://localhost:3001` and backend at `http://localhost:3000` in development.

## 🎨 Frontend Features

- **Modern React App** with functional components and hooks
- **Responsive Design** that works on all devices
- **Authentication UI** with login and registration forms
- **Protected Routes** with automatic redirects
- **User Dashboard** showing user management features
- **Profile Management** with update and delete functionality
- **Google OAuth Integration** (configure in .env)
- **Error Handling** with user-friendly messages

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

**Note:** All comment endpoints require authentication. Users can only update or delete their own comments.

## 🧪 Postman Testing

1. Register a new user
2. Login and receive JWT token
3. Use token in Authorization header for protected routes
   - Header Key: `Authorization`
   - Header Value: `Bearer your_jwt_token`

### Testing Comments System

1. Create a post first using `POST /api/posts`
2. Add comments to the post using `POST /api/posts/:postId/comments`
3. View comments using `GET /api/posts/:postId/comments`
4. Update your comments using `PUT /api/posts/:postId/comments/:id`
5. Delete your comments using `DELETE /api/posts/:postId/comments/:id`

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
