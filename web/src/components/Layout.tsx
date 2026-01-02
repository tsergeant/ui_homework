/**
 * Layout Component
 * 
 * A wrapper component that provides consistent layout structure across pages.
 * This is where you'd add navigation, header, footer, etc.
 * 
 * UI/UX Enhancement Ideas:
 * - Add navigation bar/header
 * - Add footer
 * - Add sidebar navigation
 * - Implement responsive layout
 * - Add breadcrumb navigation
 * - Add user profile menu
 * - Add search functionality in header
 * - Implement sticky header on scroll
 */

import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const authenticated = isAuthenticated();

  return (
    <div>
      {/* TODO: Add header/navigation bar here */}
      <header>
        <nav>
          <Link to="/">Home</Link>
          {authenticated ? (
            <>
              <Link to="/save-data">Save Data</Link>
              <Link to="/show-data">Show Data</Link>
              <Link to="/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>

      {/* Main content area */}
      <main>
        {children}
      </main>

      {/* TODO: Add footer here */}
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

