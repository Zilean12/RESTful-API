import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to MERN Auth API
          </h1>
          <p className="hero-description">
            A comprehensive RESTful API built with the MERN stack, offering robust 
            authentication and user management features with a beautiful, responsive interface.
          </p>
          
          <div className="hero-actions">
            {isAuthenticated ? (
              <Link to="/dashboard" className="cta-button primary">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/register" className="cta-button primary">
                  Get Started
                </Link>
                <Link to="/login" className="cta-button secondary">
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Secure Authentication</h3>
              <p>JWT-based authentication with bcrypt password encryption and Google OAuth integration.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>User Management</h3>
              <p>Complete CRUD operations for user accounts with profile management and role-based access control.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Protected Routes</h3>
              <p>Secure API endpoints with middleware protection and comprehensive error handling.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Beautiful, modern interface that works perfectly on all devices and screen sizes.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-section">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          
          <div className="tech-grid">
            <div className="tech-item">
              <strong>Frontend:</strong> React.js, React Router, Axios
            </div>
            <div className="tech-item">
              <strong>Backend:</strong> Node.js, Express.js
            </div>
            <div className="tech-item">
              <strong>Database:</strong> MongoDB with Mongoose
            </div>
            <div className="tech-item">
              <strong>Authentication:</strong> JWT, Google OAuth 2.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;