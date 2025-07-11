// src/apps/web/src/hooks/useAuth.ts
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { login as apiLogin, register as apiRegister } from '../api/authApi';
import { handleApiError, ApiError } from '../utils/errorHandler';
import { User } from '../api/types';

/**
 * Hook personalizzato per gestire l'autenticazione
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  if (!context) {
    throw new Error('useAuth deve essere utilizzato all\'interno di un AuthProvider');
  }

  /**
   * Effettua il login di un utente
   * @param email Email dell'utente
   * @param password Password dell'utente
   * @returns Successo dell'operazione
   */
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setFormErrors({});
    
    try {
      const response = await apiLogin(email, password);
      
      if (response.success) {
        context.login(response.user);
        return true;
      }
      
      return false;
    } catch (error) {
      const apiError = handleApiError(error);
      context.clearError();
      
      // Gestione errori di validazione specifici per campo
      if (apiError.errors) {
        const fieldErrors: Record<string, string> = {};
        
        Object.entries(apiError.errors).forEach(([field, messages]) => {
          fieldErrors[field] = messages[0];
        });
        
        setFormErrors(fieldErrors);
      } else {
        // Errore generico
        context.clearError();
        throw apiError;
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Registra un nuovo utente
   * @param name Nome dell'utente
   * @param email Email dell'utente
   * @param password Password dell'utente
   * @returns Successo dell'operazione
   */
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setFormErrors({});
    
    try {
      const response = await apiRegister(name, email, password);
      
      if (response.success) {
        context.login(response.user);
        return true;
      }
      
      return false;
    } catch (error) {
      const apiError = handleApiError(error);
      
      // Gestione errori di validazione specifici per campo
      if (apiError.errors) {
        const fieldErrors: Record<string, string> = {};
        
        Object.entries(apiError.errors).forEach(([field, messages]) => {
          fieldErrors[field] = messages[0];
        });
        
        setFormErrors(fieldErrors);
      } else {
        // Errore generico
        context.clearError();
        throw apiError;
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Verifica se un campo ha errori di validazione
   * @param field Nome del campo
   * @returns Messaggio di errore o null
   */
  const getFieldError = (field: string): string | null => {
    return formErrors[field] || null;
  };

  /**
   * Pulisce gli errori di validazione
   */
  const clearFormErrors = () => {
    setFormErrors({});
  };

  return {
    ...context,
    login,
    register,
    getFieldError,
    clearFormErrors,
    formErrors,
    isAuthLoading: isLoading || context.isLoading
  };
};

export default useAuth;
