// src/apps/web/src/api/authApi.ts
import axios from './axios';
import { AuthResponse, RefreshResponse, User } from './types';

/**
 * Effettua il login di un utente
 * @param email Email dell'utente
 * @param password Password dell'utente
 * @returns Risposta con token e dati utente
 */
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post('/auth/login', { email, password });
  
  // Salva i token nel localStorage
  if (response.data.success) {
    localStorage.setItem('accessToken', response.data.tokens.accessToken);
    localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
  }
  
  return response.data;
};

/**
 * Registra un nuovo utente
 * @param name Nome dell'utente
 * @param email Email dell'utente
 * @param password Password dell'utente
 * @returns Risposta con token e dati utente
 */
export const register = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post('/auth/register', { name, email, password });
  
  // Salva i token nel localStorage
  if (response.data.success) {
    localStorage.setItem('accessToken', response.data.tokens.accessToken);
    localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
  }
  
  return response.data;
};

/**
 * Effettua il logout dell'utente
 */
export const logout = async (): Promise<void> => {
  // Rimuovi i token dal localStorage
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

/**
 * Rinnova l'access token usando il refresh token
 * @param refreshToken Token di refresh
 * @returns Nuovo access token
 */
export const refreshToken = async (refreshToken: string): Promise<RefreshResponse> => {
  const response = await axios.post('/auth/refresh', { refreshToken });
  
  // Salva il nuovo access token
  if (response.data.success) {
    localStorage.setItem('accessToken', response.data.accessToken);
  }
  
  return response.data;
};

/**
 * Ottiene i dati dell'utente corrente
 * @returns Dati dell'utente
 */
export const getCurrentUser = async (): Promise<User> => {
  const response = await axios.get('/auth/me');
  return response.data.user;
};

export default {
  login,
  register,
  logout,
  refreshToken,
  getCurrentUser
};
