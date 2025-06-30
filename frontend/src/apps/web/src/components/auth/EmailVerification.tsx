import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { verifyEmail, requestEmailVerification } from '../../api/authApi';
import { handleApiError } from '../../utils/errorHandler';
import { useAuth } from '../../hooks/useAuth';

const EmailVerification: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  
  // Estrai il token dall'URL (es. /auth/verify-email?token=abc123)
  const token = new URLSearchParams(location.search).get('token');

  // Verifica il token se presente nell'URL
  useEffect(() => {
    if (token) {
      verifyEmailWithToken(token);
    } else if (location.pathname === '/auth/verify-email' && !token) {
      setMessage({ 
        text: 'Per verificare la tua email, clicca sul link che ti abbiamo inviato via email o richiedi un nuovo link di verifica.', 
        type: 'info' 
      });
    }
  }, [token, location.pathname]);

  const verifyEmailWithToken = async (verificationToken: string) => {
    setIsVerifying(true);
    setMessage(null);

    try {
      const response = await verifyEmail(verificationToken);
      setMessage({ 
        text: response.message || 'Email verificata con successo!', 
        type: 'success' 
      });
      
      // Aggiorna lo stato dell'utente se è loggato
      if (user) {
        updateUser({ ...user, emailVerified: true } as typeof user);
      }
      
      // Reindirizza alla dashboard dopo 3 secondi
      setTimeout(() => {
        navigate('/');
      }, 3000);
      
    } catch (error) {
      const errorResult = handleApiError(error);
      setMessage({ 
        text: errorResult.message || 'Si è verificato un errore durante la verifica dell\'email.', 
        type: 'error' 
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleRequestVerification = async () => {
    setIsRequesting(true);
    setMessage(null);

    try {
      const response = await requestEmailVerification();
      setMessage({ 
        text: response.message || 'Email di verifica inviata. Controlla la tua casella di posta.', 
        type: 'success' 
      });
    } catch (error) {
      const errorResult = handleApiError(error);
      setMessage({ 
        text: errorResult.message || 'Si è verificato un errore durante l\'invio dell\'email di verifica.', 
        type: 'error' 
      });
    } finally {
      setIsRequesting(false);
    }
  };

  // Mostra un messaggio diverso in base allo stato dell'utente
  const renderContent = () => {
    if (isVerifying) {
      return <div className="text-center">Verifica dell'email in corso...</div>;
    }

    if (message?.type === 'success' && token) {
      return (
        <div className="text-center">
          <div className="p-4 rounded-md bg-green-50 text-green-800 mb-4">
            {message.text}
          </div>
          <p className="mb-4">Sarai reindirizzato automaticamente alla dashboard.</p>
          <Link to="/" className="font-medium text-blue-600 hover:text-blue-500">
            Vai alla dashboard
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {message && (
          <div className={`p-4 rounded-md ${
            message.type === 'success' ? 'bg-green-50 text-green-800' : 
            message.type === 'error' ? 'bg-red-50 text-red-800' : 
            'bg-blue-50 text-blue-800'
          }`}>
            {message.text}
          </div>
        )}
        
        {!token && (
          <div className="text-center">
            <p className="mb-4">
              {user && user.emailVerified === false 
                ? "La tua email non è ancora verificata. Verifica la tua email per sbloccare tutte le funzionalità." 
                : "Richiedi un nuovo link di verifica se non hai ricevuto l'email o se il link è scaduto."}
            </p>
            <button
              onClick={handleRequestVerification}
              disabled={isRequesting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isRequesting ? 'Invio in corso...' : 'Invia email di verifica'}
            </button>
          </div>
        )}
        
        <div className="text-sm text-center mt-4">
          <Link to="/" className="font-medium text-blue-600 hover:text-blue-500">
            Torna alla dashboard
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verifica Email
          </h2>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default EmailVerification;
