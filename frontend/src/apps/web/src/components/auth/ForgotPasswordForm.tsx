import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestPasswordReset } from '../../api/authApi';
import { handleApiError } from '../../utils/errorHandler';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await requestPasswordReset(email);
      setMessage({ 
        text: response.message || 'Email di recupero password inviata. Controlla la tua casella di posta.', 
        type: 'success' 
      });
      setEmail('');
    } catch (error) {
      const errorResult = handleApiError(error);
      setMessage({ 
        text: errorResult.message || 'Si è verificato un errore durante l\'invio dell\'email di recupero.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      {message && (
        <div className={`p-4 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message.text}
        </div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Indirizzo email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Inserisci la tua email"
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
            {isSubmitting ? 'Invio in corso...' : 'Invia email di recupero'}
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

export default ForgotPasswordForm;
