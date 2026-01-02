/**
 * Home Page Component
 * 
 * This is the landing page that shows different options based on authentication status.
 * 
 * UI/UX Enhancement Ideas:
 * - Add a hero section with app description
 * - Improve button styling and layout (consider grid/flexbox)
 * - Add hover states and transitions
 * - Consider adding a navigation bar/header
 * - Add user profile information when authenticated
 * - Implement responsive design for mobile/tablet
 * - Add loading states
 * - Consider adding a footer with links/info
 * - Add keyboard navigation support
 * - Improve visual hierarchy and spacing
 */

import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

export default function Home() {
  // Check if user is authenticated to show appropriate buttons
  const authenticated = isAuthenticated();

  return (
    <div>
      <h1>Welcome</h1>
      <p>Welcome to the application.</p>
      <div>
        {!authenticated ? (
          <>
            <Link to="/register">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/logout">
              <button>Logout</button>
            </Link>
            <Link to="/save-data">
              <button>Save Data</button>
            </Link>
            <Link to="/show-data">
              <button>Show Data</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

