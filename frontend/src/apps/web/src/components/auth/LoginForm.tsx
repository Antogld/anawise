// src/apps/web/src/components/auth/LoginForm.tsx
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isAuthLoading, getFieldError, clearFormErrors } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearFormErrors();
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      }
    } catch (err: any) {
      // Gli errori generici sono già gestiti dall'hook useAuth
      console.error('Errore durante il login:', err.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Accedi</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow appearance-none border ${
              getFieldError('email') ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            placeholder="Email"
            required
          />
          {getFieldError('email') && (
            <p className="text-red-500 text-xs italic">{getFieldError('email')}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`shadow appearance-none border ${
              getFieldError('password') ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            placeholder="Password"
            required
          />
          {getFieldError('password') && (
            <p className="text-red-500 text-xs italic">{getFieldError('password')}</p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isAuthLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            {isAuthLoading ? 'Accesso in corso...' : 'Accedi'}
          </button>
        </div>
        
        <div className="text-center mt-4">
          <a
            href="/register"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Non hai un account? Registrati
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
