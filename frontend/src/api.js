import axios from 'axios';

// Set your backend base URL here
const BASE_URL = 'http://localhost:8000/api'; // Change as needed

// Get token from localStorage (or another storage if you use a different method)
const getToken = () => localStorage.getItem('access_token');

// Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Example: login function
export const login = async (username, password) => {
  const response = await api.post('/token/', { username, password });
  if (response.data.access) {
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
  }
  return response.data;
};

// Example: refresh token function
export const refreshAccessToken = async () => {
  const refresh = localStorage.getItem('refresh_token');
  if (!refresh) throw new Error('No refresh token');
  const response = await api.post('/token/refresh/', { refresh });
  if (response.data.access) {
    localStorage.setItem('access_token', response.data.access);
  }
  return response.data;
};

// Export the axios instance for custom requests
export default api; 