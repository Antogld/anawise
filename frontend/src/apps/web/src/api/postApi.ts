// src/apps/web/src/api/postApi.ts
import axios from './axios';
import { Post, PaginatedResponse, ApiResponse } from './types';

/**
 * Ottiene tutti i post con paginazione
 * @param page Numero di pagina
 * @param limit Numero di post per pagina
 * @returns Lista paginata di post
 */
export const getPosts = async (page = 1, limit = 10): Promise<PaginatedResponse<Post>> => {
  const response = await axios.get(`/posts?page=${page}&limit=${limit}`);
  return response.data;
};

/**
 * Ottiene un singolo post per ID
 * @param postId ID del post
 * @returns Post
 */
export const getPostById = async (postId: string): Promise<ApiResponse<Post>> => {
  const response = await axios.get(`/posts/${postId}`);
  return response.data;
};

/**
 * Crea un nuovo post
 * @param content Contenuto testuale del post
 * @param imageUrl URL dell'immagine (opzionale)
 * @param videoUrl URL del video (opzionale)
 * @returns Post creato
 */
export const createPost = async (
  content: string, 
  imageUrl?: string, 
  videoUrl?: string
): Promise<ApiResponse<Post>> => {
  const response = await axios.post('/posts', { content, imageUrl, videoUrl });
  return response.data;
};

/**
 * Carica un post con file multimediale
 * @param formData FormData con contenuto e file
 * @returns Post creato
 */
export const uploadPost = async (formData: FormData): Promise<ApiResponse<Post>> => {
  const response = await axios.post('/posts/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};

/**
 * Aggiorna un post esistente
 * @param postId ID del post
 * @param content Nuovo contenuto
 * @param imageUrl Nuova URL immagine
 * @param videoUrl Nuova URL video
 * @returns Post aggiornato
 */
export const updatePost = async (
  postId: string,
  content?: string,
  imageUrl?: string,
  videoUrl?: string
): Promise<ApiResponse<Post>> => {
  const response = await axios.put(`/posts/${postId}`, { content, imageUrl, videoUrl });
  return response.data;
};

/**
 * Elimina un post
 * @param postId ID del post
 * @returns Messaggio di conferma
 */
export const deletePost = async (postId: string): Promise<ApiResponse<null>> => {
  const response = await axios.delete(`/posts/${postId}`);
  return response.data;
};

/**
 * Aggiunge/rimuove un like a un post
 * @param postId ID del post
 * @returns Stato aggiornato del like
 */
export const toggleLike = async (postId: string): Promise<ApiResponse<{liked: boolean, likesCount: number}>> => {
  const response = await axios.put(`/posts/${postId}/like`);
  return response.data;
};

/**
 * Aggiunge un commento a un post
 * @param postId ID del post
 * @param text Testo del commento
 * @returns Post aggiornato con il nuovo commento
 */
export const addComment = async (postId: string, text: string): Promise<ApiResponse<Post>> => {
  const response = await axios.post(`/posts/${postId}/comment`, { text });
  return response.data;
};

export default {
  getPosts,
  getPostById,
  createPost,
  uploadPost,
  updatePost,
  deletePost,
  toggleLike,
  addComment
};
