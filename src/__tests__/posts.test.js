const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');

let token;
let userId;

beforeAll(async () => {
  // Create a test user
  const user = await User.create({
    name: 'Test User',
    email: 'test@test.com',
    password: 'password123'
  });
  userId = user.id;
  token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your-secret-key');
});

describe('Post API Tests', () => {
  let postId;

  test('POST /api/posts - Create new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Post',
        content: 'Test Content'
      });
    
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test Post');
    postId = res.body._id;
  });

  test('GET /api/posts - Get all posts', async () => {
    const res = await request(app)
      .get('/api/posts')
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  test('PUT /api/posts/:id - Update post', async () => {
    const res = await request(app)
      .put(`/api/posts/${postId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Updated Title'
      });
    
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated Title');
  });

  test('DELETE /api/posts/:id - Delete post', async () => {
    const res = await request(app)
      .delete(`/api/posts/${postId}`)
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(204);
  });
});

afterAll(async () => {
  await User.deleteMany({});
  await Post.deleteMany({});
});