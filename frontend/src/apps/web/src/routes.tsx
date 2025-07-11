import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import { useAuth } from './hooks/useAuth';

// Componente per le route protette che richiedono autenticazione
const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" replace />;
};

// Componente per le route pubbliche che sono accessibili solo se NON autenticati
const PublicRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{element}</> : <Navigate to="/dashboard" replace />;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Route di autenticazione */}
      <Route path="/login" element={<PublicRoute element={<Login />} />} />
      <Route path="/register" element={<PublicRoute element={<div>Registrazione (da implementare)</div>} />} />
      
      {/* Route dell'applicazione protette */}
      <Route path="/dashboard/*" element={<ProtectedRoute element={<div>Dashboard (da implementare)</div>} />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<div>Dashboard (da implementare)</div>} />} />
      
      {/* Reindirizzamento per percorsi non trovati all'interno dell'app */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
