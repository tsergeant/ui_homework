/**
 * Logout Page Component
 * 
 * Handles user logout by calling the logout API endpoint and removing the
 * authentication token. Automatically redirects to home page after logout.
 * 
 * UI/UX Enhancement Ideas:
 * - Add a loading spinner or animation during logout
 * - Show a "Logging out..." message with better styling
 * - Add a confirmation dialog before logging out (optional)
 * - Consider showing a success message before redirect
 * - Add smooth transition/animation on redirect
 * - Consider adding "Are you sure?" confirmation for accidental clicks
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/client";
import { removeToken } from "../auth/auth";

export default function Logout() {
  const navigate = useNavigate();

  /**
   * Handle logout when component mounts
   * 
   * This component automatically logs out the user when it's rendered.
   * The logout process:
   * 1. Calls the logout API endpoint (optional - continues even if it fails)
   * 2. Removes the token from localStorage
   * 3. Redirects to the home page
   * 
   * TODO: Consider adding a delay before redirect to show logout confirmation
   */
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
      } catch (err) {
        // Continue with logout even if API call fails
        // This ensures the user is logged out locally even if server is unreachable
      } finally {
        removeToken();
        navigate("/");
      }
    };

    handleLogout();
  }, [navigate]);

  // TODO: Improve loading state with spinner or better message
  return <div>Logging out...</div>;
}

