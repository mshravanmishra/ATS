import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * ProtectedRoute component to restrict access based on allowed roles.
 * 
 * Props:
 * - allowedRoles: array of roles allowed to access the route
 * - children: optional children components
 * 
 * This example assumes you have a way to get the current user's role,
 * e.g., from context or a global state.
 */
const ProtectedRoute = ({ allowedRoles, children }) => {
  // TODO: Replace this with actual user role fetching logic
  const userRole = "user"; // Example: hardcoded user role

  if (!allowedRoles.includes(userRole)) {
    // Redirect to login or unauthorized page if role not allowed
    return <Navigate to="/login" replace />;
  }

  // Render children or nested routes if role is allowed
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
