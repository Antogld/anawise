import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/auth/RegisterForm';

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Crea il tuo account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Unisciti alla nostra community
          </p>
        </div>
        
        {/* Utilizziamo il componente RegisterForm che gestisce la registrazione */}
        <RegisterForm />
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Hai già un account?{' '}
            <Link to="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
              Accedi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
