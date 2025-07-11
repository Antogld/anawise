// src/apps/web/src/components/auth/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: React.ReactNode;
}

/**
 * Componente per proteggere le rotte che richiedono autenticazione
 * Reindirizza al percorso specificato se l'utente non è autenticato
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = '/login',
  children
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Mostra un loader mentre verifichiamo lo stato di autenticazione
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Se l'utente non è autenticato, reindirizza al percorso specificato
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Renderizza i children o l'Outlet per le rotte annidate
  return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoute;
