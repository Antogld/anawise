import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, SignUp, ResetPassword } from '../pages/auth';
import Dashboard from '../pages/dashboard';

// Layout protetto che richiede autenticazione (simulato)
const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  // Qui in futuro implementeremo la verifica dell'autenticazione
  const isAuthenticated = true; // Per ora, simuliamo che l'utente sia sempre autenticato
  
  return isAuthenticated ? (
    <>{element}</>
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rotte pubbliche */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      
      {/* Rotte protette */}
      <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/profile" element={<ProtectedRoute element={<div>Profilo (da implementare)</div>} />} />
      <Route path="/explore" element={<ProtectedRoute element={<div>Esplora (da implementare)</div>} />} />
      <Route path="/messages" element={<ProtectedRoute element={<div>Messaggi (da implementare)</div>} />} />
      <Route path="/notifications" element={<ProtectedRoute element={<div>Notifiche (da implementare)</div>} />} />
      
      {/* Reindirizzamento predefinito */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
