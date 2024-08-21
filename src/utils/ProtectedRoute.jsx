import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the import path as needed

const ProtectedRoute = ({ element: Element, requiredRole, ...rest }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/log-in" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/home" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;
