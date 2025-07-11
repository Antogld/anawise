// src/apps/web/src/api/axios.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor per aggiungere il token di autenticazione a ogni richiesta
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor per gestire gli errori di risposta
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Se l'errore è 401 (Unauthorized) e non è già un tentativo di refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Tenta di rinnovare il token usando il refresh token
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          // Se non c'è refresh token, logout
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          return Promise.reject(error);
        }
        
        // Chiamata per rinnovare il token
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}/auth/refresh`,
          { refreshToken }
        );
        
        if (response.data.success) {
          // Salva il nuovo token e riprova la richiesta originale
          localStorage.setItem('accessToken', response.data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return instance(originalRequest);
        }
      } catch (refreshError) {
        // Se il refresh fallisce, logout
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default instance;
