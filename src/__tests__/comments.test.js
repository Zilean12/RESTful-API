const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken');

let token;
let userId;
let postId;

beforeAll(async () => {
  // Create a test user
  const user = await User.create({
    name: 'Test User',
    email: 'test@test.com',
    password: 'password123'
  });
  userId = user.id;
  token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your-secret-key');
  
  // Create a test post
  const post = await Post.create({
    title: 'Test Post',
    content: 'Test Content',
    author: userId
  });
  postId = post.id;
}, 30000);

describe('Comment API Tests', () => {
  let commentId;

  test('POST /api/posts/:postId/comments - Create new comment', async () => {
    const res = await request(app)
      .post(`/api/posts/${postId}/comments`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        content: 'Test comment content'
      });
    
    expect(res.status).toBe(201);
    expect(res.body.content).toBe('Test comment content');
    expect(res.body.author.name).toBe('Test User');
    commentId = res.body._id;
  });

  test('GET /api/posts/:postId/comments - Get all comments for post', async () => {
    const res = await request(app)
      .get(`/api/posts/${postId}/comments`)
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].content).toBe('Test comment content');
  });

  test('PUT /api/posts/:postId/comments/:id - Update comment', async () => {
    const res = await request(app)
      .put(`/api/posts/${postId}/comments/${commentId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        content: 'Updated comment content'
      });
    
    expect(res.status).toBe(200);
    expect(res.body.content).toBe('Updated comment content');
  });

  test('DELETE /api/posts/:postId/comments/:id - Delete comment', async () => {
    const res = await request(app)
      .delete(`/api/posts/${postId}/comments/${commentId}`)
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('Comment successfully deleted');
  });

  test('POST /api/posts/:postId/comments - Create comment on non-existent post', async () => {
    const fakePostId = '507f1f77bcf86cd799439011';
    const res = await request(app)
      .post(`/api/posts/${fakePostId}/comments`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        content: 'Test comment'
      });
    
    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Post not found');
  });

  test('PUT /api/posts/:postId/comments/:id - Update non-existent comment', async () => {
    const fakeCommentId = '507f1f77bcf86cd799439011';
    const res = await request(app)
      .put(`/api/posts/${postId}/comments/${fakeCommentId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        content: 'Updated content'
      });
    
    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Comment not found');
  });
});

afterAll(async () => {
  await User.deleteMany({});
  await Post.deleteMany({});
  await Comment.deleteMany({});
}, 30000);