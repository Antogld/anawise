import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, SignUp, ResetPassword } from '../pages/auth';
import Dashboard from '../pages/dashboard';
import ProtectedRoute from '../components/auth/ProtectedRoute';

// Il componente ProtectedRoute è stato spostato in components/auth/ProtectedRoute.tsx

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rotte pubbliche */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      
      {/* Rotte protette */}
      <Route path="/" element={<ProtectedRoute redirectPath="/auth/login"><Dashboard /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute redirectPath="/auth/login"><div>Profilo (da implementare)</div></ProtectedRoute>} />
      <Route path="/explore" element={<ProtectedRoute redirectPath="/auth/login"><div>Esplora (da implementare)</div></ProtectedRoute>} />
      <Route path="/messages" element={<ProtectedRoute redirectPath="/auth/login"><div>Messaggi (da implementare)</div></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute redirectPath="/auth/login"><div>Notifiche (da implementare)</div></ProtectedRoute>} />
      
      {/* Reindirizzamento predefinito */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
