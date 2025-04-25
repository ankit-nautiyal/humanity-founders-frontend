import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const location = useLocation();
  
  // Check if user is logged in by looking for user data in localStorage
  const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return !!user; // Returns true if user exists in localStorage
  };

  // If not authenticated, redirect to login page with the return url
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // If authenticated, render the children components
  return children;
}

export default ProtectedRoute; 