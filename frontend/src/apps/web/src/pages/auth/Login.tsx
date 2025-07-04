import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Accedi al tuo account</h2>
        </div>
        
        {/* Utilizziamo il componente LoginForm che gestisce l'autenticazione */}
        <LoginForm />
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Non hai un account?{' '}
            <Link to="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Registrati ora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
