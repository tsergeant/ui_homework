/**
 * API Client Module
 * 
 * This module centralizes all API communication. All API calls should go through
 * functions in this file rather than using fetch() directly in components.
 * 
 * UI/UX Considerations:
 * - Error handling here affects user experience across the app
 * - Consider adding loading states, retry logic, or request cancellation
 * - You might want to add request/response interceptors for global error handling
 */

import { getToken } from "../auth/auth";

// Base URL for the API - all requests will be made to this domain
const API_BASE_URL = "https://fitnessapi.sergeantservices.com";

/**
 * Core API fetch function that handles authentication and error handling
 * 
 * This is a wrapper around the native fetch() that:
 * - Automatically adds authentication tokens to requests
 * - Handles error responses consistently
 * - Provides better error messages for network issues
 * 
 * @param path - API endpoint path (e.g., "/auth/login")
 * @param options - Standard fetch options (method, body, headers, etc.)
 * @returns Parsed JSON response or null for empty responses
 * 
 * TODO: Consider adding:
 * - Request timeout handling
 * - Retry logic for failed requests
 * - Request cancellation support
 * - Response caching for GET requests
 */
export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Merge any existing headers from options
  if (options.headers) {
    if (options.headers instanceof Headers) {
      options.headers.forEach((value, key) => {
        headers[key] = value;
      });
    } else if (Array.isArray(options.headers)) {
      options.headers.forEach(([key, value]) => {
        headers[key] = value;
      });
    } else {
      Object.assign(headers, options.headers);
    }
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      headers,
      ...options,
    });

    if (!response.ok) {
      let errorMessage = "API request failed";
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        // If response is not JSON, use status text
        errorMessage = response.statusText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    // Handle empty responses
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    return null;
  } catch (error) {
    // Handle network errors, CORS errors, etc.
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new Error("Network error: Unable to reach the API server. This may be a CORS issue or the server may be down.");
    }
    // Re-throw other errors (like our custom Error from above)
    throw error;
  }
}

/**
 * Authentication API Functions
 * 
 * These functions handle user authentication (register, login, logout).
 * 
 * UI/UX Enhancement Ideas:
 * - Add loading states during API calls
 * - Implement form validation before API calls
 * - Add password strength indicators
 * - Consider adding "Remember me" functionality
 * - Add social login options (OAuth)
 */

// Register a new user
// Note: Registration doesn't return a token - user must login separately
export async function register(email: string, password: string) {
  return apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function login(email: string, password: string) {
  const response = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return response;
}

export async function logout() {
  return apiFetch("/auth/logout", {
    method: "POST",
  });
}

/**
 * Data Management API Functions
 * 
 * These functions handle saving and retrieving user data.
 * 
 * UI/UX Enhancement Ideas:
 * - Add pagination for large datasets (GET requests)
 * - Implement optimistic updates (update UI before API confirms)
 * - Add data filtering and sorting capabilities
 * - Consider adding data export functionality
 * - Add undo/redo for data operations
 * - Implement real-time updates (WebSockets or polling)
 */

// Save user data to the server
// The jsonData will be wrapped in { json_data: {...}, timestamp: "..." } format
export async function saveData(jsonData: Record<string, unknown>, timestamp?: string) {
  const payload: {
    json_data: Record<string, unknown>;
    timestamp?: string;
  } = {
    json_data: jsonData,
  };
  
  if (timestamp) {
    payload.timestamp = timestamp;
  } else {
    // Use current timestamp if not provided
    payload.timestamp = new Date().toISOString();
  }
  
  return apiFetch("/user-data", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getData() {
  return apiFetch("/user-data", {
    method: "GET",
  });
}
