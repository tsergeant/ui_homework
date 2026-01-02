/**
 * Protected Route Component
 * 
 * A wrapper component that protects routes requiring authentication.
 * Redirects to login if user is not authenticated.
 * 
 * Usage:
 * <Route path="/protected" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
 * 
 * UI/UX Enhancement Ideas:
 * - Add loading state while checking authentication
 * - Add redirect to original page after login
 * - Add role-based access control
 * - Show a message explaining why access was denied
 */

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  // TODO: Add loading state while checking authentication
  // TODO: Consider checking token validity, not just existence

  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    // TODO: Save the current location to redirect back after login
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

