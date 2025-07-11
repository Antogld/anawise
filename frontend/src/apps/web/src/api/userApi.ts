// src/apps/web/src/api/userApi.ts
import axios from './axios';
import { User, ApiResponse } from './types';

/**
 * Ottiene un utente per ID
 * @param userId ID dell'utente
 * @returns Dati dell'utente
 */
export const getUserById = async (userId: string): Promise<ApiResponse<User>> => {
  const response = await axios.get(`/users/${userId}`);
  return response.data;
};

/**
 * Aggiorna il profilo dell'utente corrente
 * @param data Dati da aggiornare
 * @returns Profilo aggiornato
 */
export const updateUserProfile = async (data: {
  name?: string;
  bio?: string;
  avatarUrl?: string;
}): Promise<ApiResponse<User>> => {
  const response = await axios.put('/users/me', data);
  return response.data;
};

/**
 * Carica un'immagine profilo
 * @param formData FormData con l'immagine
 * @returns URL dell'immagine caricata
 */
export const uploadProfileImage = async (formData: FormData): Promise<ApiResponse<{avatarUrl: string}>> => {
  const response = await axios.post('/users/upload-avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};

/**
 * Ottiene gli utenti suggeriti (es. da seguire)
 * @param limit Numero massimo di utenti da ottenere
 * @returns Lista di utenti suggeriti
 */
export const getSuggestedUsers = async (limit = 5): Promise<ApiResponse<User[]>> => {
  const response = await axios.get(`/users/suggested?limit=${limit}`);
  return response.data;
};

/**
 * Segue un utente
 * @param userId ID dell'utente da seguire
 * @returns Stato dell'operazione
 */
export const followUser = async (userId: string): Promise<ApiResponse<{following: boolean}>> => {
  const response = await axios.post(`/users/${userId}/follow`);
  return response.data;
};

/**
 * Smette di seguire un utente
 * @param userId ID dell'utente da non seguire più
 * @returns Stato dell'operazione
 */
export const unfollowUser = async (userId: string): Promise<ApiResponse<{following: boolean}>> => {
  const response = await axios.delete(`/users/${userId}/follow`);
  return response.data;
};

export default {
  getUserById,
  updateUserProfile,
  uploadProfileImage,
  getSuggestedUsers,
  followUser,
  unfollowUser
};
