/**
 * Authentication Token Management
 * 
 * This module handles storing and retrieving authentication tokens.
 * Tokens are stored in localStorage, which persists across browser sessions.
 * 
 * Security Considerations:
 * - localStorage is accessible to JavaScript, making it vulnerable to XSS attacks
 * - For production apps, consider using httpOnly cookies (requires backend changes)
 * - You might want to add token expiration checking
 * 
 * UI/UX Enhancement Ideas:
 * - Add token expiration warnings
 * - Implement automatic token refresh
 * - Add "Remember me" functionality with different storage strategies
 * - Consider session vs persistent login options
 */

// Key used to store the authentication token in localStorage
const TOKEN_KEY = "auth_token";

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return getToken() !== null;
}

