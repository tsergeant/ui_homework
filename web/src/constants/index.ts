/**
 * Application Constants
 * 
 * Centralized constants for the application. This makes it easier to
 * maintain consistency and update values in one place.
 * 
 * TODO: Add more constants as needed:
 * - API endpoints
 * - Validation rules
 * - UI constants (colors, spacing, etc.)
 * - Feature flags
 */

// API Configuration
export const API_BASE_URL = "https://fitnessapi.sergeantservices.com";

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  // TODO: Add more storage keys as needed
} as const;

// Route Paths (for consistent navigation)
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout",
  SAVE_DATA: "/save-data",
  SHOW_DATA: "/show-data",
} as const;

// UI Constants
export const UI = {
  // Redirect delays (in milliseconds)
  REGISTRATION_REDIRECT_DELAY: 2000,
  // TODO: Add more UI constants (colors, spacing, breakpoints, etc.)
} as const;

