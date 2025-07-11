import React from 'react';
import ForgotPasswordForm from '../../components/auth/ForgotPasswordForm';

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Recupera la tua password</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Inserisci la tua email per ricevere un link di recupero
          </p>
        </div>
        
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
