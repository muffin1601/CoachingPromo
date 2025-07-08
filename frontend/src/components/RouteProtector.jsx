import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteProtector = ({ children }) => {
  // Check if token exists
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render children components
  return children;
};

export default RouteProtector;
