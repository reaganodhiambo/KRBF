import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in headers, except for auth endpoints
api.interceptors.request.use(
  (config) => {
    const noAuthNeeded = [
      '/api/accounts/register/',
      '/api/accounts/login/',
      '/api/token/',
      '/api/token/refresh/',
    ];
    if (!noAuthNeeded.some((url) => config.url.endsWith(url))) {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api; 