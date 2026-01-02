/**
 * Register Page Component
 * 
 * Handles new user registration. After successful registration, users are
 * redirected to the login page (registration doesn't return an auth token).
 * 
 * UI/UX Enhancement Ideas:
 * - Add password confirmation field with validation
 * - Add password strength indicator
 * - Add email format validation with real-time feedback
 * - Improve success/error message display (toast notifications, better styling)
 * - Add loading state during registration
 * - Add "Terms of Service" and "Privacy Policy" checkboxes
 * - Improve form layout and visual design
 * - Add form field validation with inline error messages
 * - Consider adding CAPTCHA for spam prevention
 * - Add accessibility improvements (aria-labels, focus management)
 * - Implement form auto-save (localStorage) in case user navigates away
 */

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/client";

export default function Register() {
  // Form state management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // TODO: Add loading state: const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * Handle form submission
   * 
   * TODO: Add form validation before API call:
   * - Email format validation
   * - Password strength requirements
   * - Password confirmation matching
   * 
   * TODO: Add loading state to show progress during registration
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await register(email, password);
      // Registration successful - API returns user info but no token
      // User needs to login separately to get a token
      setError("");
      setSuccess(true);
      // Redirect to login after showing success message
      // TODO: Consider making redirect time configurable or adding a "Go to Login" button
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setSuccess(false);
      const errorMessage = err instanceof Error ? err.message : "Registration failed. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {success && <div style={{ color: "green" }}>Registration successful! Redirecting to login...</div>}
        <button type="submit">Register</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

