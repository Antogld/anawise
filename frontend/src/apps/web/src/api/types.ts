// src/apps/web/src/api/types.ts

export interface User {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  avatarUrl?: string;
  bio?: string;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface RefreshResponse {
  success: boolean;
  accessToken: string;
}

export interface Post {
  _id: string;
  user: User;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  likes: string[]; // userIds
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  _id: string;
  user: User;
  text: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any;
}

export interface PaginatedResponse<T> {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: T[];
}

export interface ApiError {
  status?: number;
  message: string;
  errors?: Record<string, string[]>;
}
