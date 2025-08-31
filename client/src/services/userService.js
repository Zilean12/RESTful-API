import api from './api';

class UserService {
  async getAllUsers() {
    const response = await api.get('/api/users');
    return response.data;
  }

  async getUserById(id) {
    const response = await api.get(`/api/users/${id}`);
    return response.data;
  }

  async updateUser(id, userData) {
    const response = await api.put(`/api/users/${id}`, userData);
    return response.data;
  }

  async deleteUser(id) {
    const response = await api.delete(`/api/users/${id}`);
    return response.data;
  }
}

const userService = new UserService();
export default userService;