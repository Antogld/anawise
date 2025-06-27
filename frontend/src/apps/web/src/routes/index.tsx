import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp, ResetPassword } from '../pages/auth';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};
