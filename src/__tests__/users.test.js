const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

let token;
let userId;
let testUserId;

beforeAll(async () => {
  // Create a test user for authentication
  const user = await User.create({
    name: 'Test User',
    email: 'test@test.com',
    password: 'password123'
  });
  userId = user.id;
  token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your-secret-key');
  
  // Create another test user for CRUD operations
  const testUser = await User.create({
    name: 'Test User 2',
    email: 'test2@test.com',
    password: 'password123'
  });
  testUserId = testUser.id;
});

describe('User Management API Tests', () => {
  test('GET /api/users - Get all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(2);
    // Should not include password field
    expect(res.body[0]).not.toHaveProperty('password');
  });

  test('GET /api/users/:id - Get user by ID', async () => {
    const res = await request(app)
      .get(`/api/users/${testUserId}`)
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(res.body._id).toBe(testUserId);
    expect(res.body.name).toBe('Test User 2');
    expect(res.body).not.toHaveProperty('password');
  });

  test('GET /api/users/:id - User not found', async () => {
    const fakeId = '507f1f77bcf86cd799439011';
    const res = await request(app)
      .get(`/api/users/${fakeId}`)
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(404);
    expect(res.body.message).toBe('User not found');
  });

  test('PUT /api/users/:id - Update user', async () => {
    const res = await request(app)
      .put(`/api/users/${testUserId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Updated Test User'
      });
    
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Updated Test User');
    expect(res.body).not.toHaveProperty('password');
  });

  test('DELETE /api/users/:id - Delete user', async () => {
    const res = await request(app)
      .delete(`/api/users/${testUserId}`)
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('User successfully deleted');
  });
});

describe('Auth Profile API Tests', () => {
  test('GET /api/auth/me - Get current user profile', async () => {
    const res = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(res.body._id).toBe(userId);
    expect(res.body.name).toBe('Test User');
    expect(res.body).not.toHaveProperty('password');
  });

  test('POST /api/auth/logout - Logout user', async () => {
    const res = await request(app)
      .post('/api/auth/logout')
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('Successfully logged out');
  });
});

afterAll(async () => {
  await User.deleteMany({});
});