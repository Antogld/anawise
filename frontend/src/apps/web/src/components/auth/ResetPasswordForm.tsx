import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { resetPassword } from '../../api/authApi';
import { handleApiError } from '../../utils/errorHandler';

const ResetPasswordForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Estrai il token dall'URL (es. /auth/reset-password?token=abc123)
  const token = new URLSearchParams(location.search).get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione
    if (password !== confirmPassword) {
      setMessage({ text: 'Le password non corrispondono', type: 'error' });
      return;
    }
    
    if (password.length < 8) {
      setMessage({ text: 'La password deve contenere almeno 8 caratteri', type: 'error' });
      return;
    }
    
    if (!token) {
      setMessage({ text: 'Token di reset non valido o mancante', type: 'error' });
      return;
    }
    
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await resetPassword(token, password);
      setMessage({ 
        text: response.message || 'Password reimpostata con successo!', 
        type: 'success' 
      });
      
      // Reindirizza al login dopo 3 secondi
      setTimeout(() => {
        navigate('/auth/login');
      }, 3000);
      
    } catch (error) {
      const errorResult = handleApiError(error);
      setMessage({ 
        text: errorResult.message || 'Si è verificato un errore durante il reset della password.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Se non c'è un token nell'URL, mostra un messaggio di errore
  if (!token) {
    return (
      <div className="mt-8 space-y-6">
        <div className="p-4 rounded-md bg-red-50 text-red-800">
          Link di reset password non valido o scaduto. Richiedi un nuovo link di reset.
        </div>
        <div className="text-center">
          <Link to="/auth/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
            Richiedi un nuovo link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      {message && (
        <div className={`p-4 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message.text}
        </div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Nuova password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Inserisci la nuova password"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
            Conferma password
          </label>
          <div className="mt-1">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Conferma la nuova password"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Reimpostazione in corso...' : 'Reimposta password'}
          </button>
        </div>
      </form>

      <div className="text-sm text-center">
        <Link to="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
          Torna al login
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
