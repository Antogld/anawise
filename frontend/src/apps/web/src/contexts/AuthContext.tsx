// src/apps/web/src/contexts/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../api/types';
import { getCurrentUser, logout } from '../api/authApi';
import { handleApiError } from '../utils/errorHandler';

// Interfaccia per il contesto di autenticazione
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (user: User) => void;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
  clearError: () => void;
}

// Valore di default per il contesto
const defaultAuthContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  login: () => {},
  logout: async () => {},
  updateUser: () => {},
  clearError: () => {}
};

// Creazione del contesto
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Props per il provider
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Provider per il contesto di autenticazione
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Verifica se l'utente è autenticato all'avvio dell'app
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('accessToken');
      
      if (!token) {
        setIsLoading(false);
        return;
      }
      
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        // Se c'è un errore nell'autenticazione, pulisci lo stato
        setError(handleApiError(error).message);
        await handleLogout();
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);

  /**
   * Imposta l'utente autenticato
   */
  const handleLogin = (userData: User) => {
    setUser(userData);
    setError(null);
  };

  /**
   * Gestisce il logout dell'utente
   */
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Errore durante il logout:', error);
    } finally {
      setUser(null);
      setError(null);
    }
  };

  /**
   * Aggiorna i dati dell'utente
   */
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  /**
   * Pulisce gli errori
   */
  const clearError = () => {
    setError(null);
  };

  // Valore del contesto
  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login: handleLogin,
    logout: handleLogout,
    updateUser,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
