/**
 * Login Page Component
 * 
 * Handles user authentication. Users enter email and password to receive an auth token.
 * 
 * UI/UX Enhancement Ideas:
 * - Add form validation (email format, password requirements)
 * - Add "Show/Hide password" toggle button
 * - Implement "Remember me" checkbox
 * - Add loading spinner during login attempt
 * - Improve error message display (consider toast notifications)
 * - Add "Forgot password" link
 * - Add social login buttons (Google, Facebook, etc.)
 * - Improve form layout and styling
 * - Add autofocus to first input
 * - Add keyboard shortcuts (Enter to submit)
 * - Consider adding password strength indicator
 * - Add accessibility labels (aria-labels)
 * - Implement form field error states
 */

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/client";
import { setToken } from "../auth/auth";

export default function Login() {
  // Form state management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // TODO: Add loading state: const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * Handle form submission
   * 
   * TODO: Add form validation before API call
   * TODO: Add loading state to disable form during submission
   * TODO: Consider adding rate limiting feedback
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // TODO: setLoading(true);

    try {
      const response = await login(email, password);
      // Handle different possible response formats (API might return token in different fields)
      const token = response?.token || response?.accessToken || response?.access_token || response?.data?.token;
      if (token) {
        setToken(token);
        navigate("/");
      } else {
        setError("Login successful but no token received.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login failed. Please check your credentials.";
      setError(errorMessage);
    } finally {
      // TODO: setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

