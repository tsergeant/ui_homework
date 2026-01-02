/**
 * api/api.ts - API communication layer
 * 
 * This file contains all functions that communicate with the backend API.
 * It handles:
 * - Authentication (login, register)
 * - Data operations (save, retrieve user data)
 * - Error handling and response parsing
 * 
 * The API uses JWT (JSON Web Token) authentication. After login, you receive
 * a token that must be included in the Authorization header for protected endpoints.
 */

const API_BASE_URL = 'https://fitnessapi.sergeantservices.com';

// TypeScript interfaces define the shape of data structures
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;  // JWT token used for authenticated requests
  token_type: string;    // Usually "bearer"
}

export interface SavedData {
  id: number;
  user_id: number;
  json_data: any;        // Flexible JSON structure - can be any object
  timestamp: string;     // ISO format date string
}

/**
 * Login function - Authenticates user and returns JWT token
 * 
 * Sends email/password to API and receives a JWT token if credentials are valid.
 * The token should be saved using the AuthContext login() function.
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    let errorMessage = 'Login failed';
    try {
      const errorData = await response.json();
      errorMessage = errorData.detail || errorData.message || 'Login failed';
    } catch {
      errorMessage = response.statusText || 'Login failed';
    }
    throw new Error(errorMessage);
  }

  return response.json();
}

/**
 * Register function - Creates a new user account
 * 
 * Note: The API requires password to be at least 8 characters.
 * Consider adding client-side validation and showing password requirements to users.
 */
export async function register(data: RegisterData): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let errorMessage = 'Registration failed';
    try {
      const errorData = await response.json();
      errorMessage = errorData.detail || errorData.message || errorData.error || `Registration failed (${response.status})`;
    } catch {
      errorMessage = response.statusText || `Registration failed (${response.status})`;
    }
    throw new Error(errorMessage);
  }
}

/**
 * Save data function - Stores JSON data for the authenticated user
 * 
 * IMPORTANT: The jsonData parameter can be ANY JSON structure.
 * 
 * Examples:
 *   - Simple text: { content: "Hello" }
 *   - Workout data: { type: "workout", kind: "run", distance: 3.2 }
 *   - Nutrition: { type: "nutrition", meal: "breakfast", calories: 450 }
 * 
 * The API wraps your data in { json_data: jsonData } before sending.
 * This allows you to structure data however makes sense for your app.
 * 
 * @param token - JWT token from authentication
 * @param jsonData - Any JavaScript object (will be converted to JSON)
 */
export async function saveData(token: string, jsonData: any): Promise<SavedData> {
  const response = await fetch(`${API_BASE_URL}/user-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,  // JWT token required for authenticated endpoints
    },
    body: JSON.stringify({ 
      json_data: jsonData  // Your data structure goes here
    }),
  });

  if (!response.ok) {
    let errorMessage = 'Failed to save data';
    try {
      const errorData = await response.json();
      errorMessage = errorData.detail || errorData.message || 'Failed to save data';
    } catch {
      errorMessage = response.statusText || 'Failed to save data';
    }
    throw new Error(errorMessage);
  }

  return response.json();
}

/**
 * Get saved data function - Retrieves all data entries for the authenticated user
 * 
 * Returns an array of all data entries saved by the current user.
 * Each entry includes the json_data structure you saved, plus metadata (id, timestamp).
 * 
 * TODO: The API supports pagination (skip/limit) and date filtering.
 * Consider adding these parameters for better UX with large datasets.
 */
export async function getSavedData(token: string): Promise<SavedData[]> {
  const response = await fetch(`${API_BASE_URL}/user-data`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    let errorMessage = 'Failed to fetch data';
    try {
      const errorData = await response.json();
      errorMessage = errorData.detail || errorData.message || 'Failed to fetch data';
    } catch {
      errorMessage = response.statusText || 'Failed to fetch data';
    }
    throw new Error(errorMessage);
  }

  return response.json();
}

