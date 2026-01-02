/**
 * Type Definitions
 * 
 * Centralized type definitions for the application.
 * This makes it easier to maintain consistency and reuse types across components.
 * 
 * TODO: Add more types as you add features:
 * - User type
 * - API response types
 * - Form data types
 * - etc.
 */

// Data item structure returned from the API
export interface DataItem {
  id: number;
  user_id: number;
  json_data: Record<string, unknown>; // Flexible object to hold any JSON data
  timestamp: string; // ISO 8601 format timestamp
}

// User registration response structure
export interface RegisterResponse {
  id: number;
  email: string;
  is_active: boolean;
  roles: string[];
  created_at: string;
}

// Login response structure (may vary - check API docs)
export interface LoginResponse {
  token?: string;
  accessToken?: string;
  access_token?: string;
  data?: {
    token?: string;
  };
}

