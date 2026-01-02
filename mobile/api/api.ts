const API_BASE_URL = 'https://fitnessapi.sergeantservices.com';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export interface SavedData {
  id: number;
  user_id: number;
  json_data: any;
  timestamp: string;
}

// Login API call
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

// Register API call
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

// Save data API call
export async function saveData(token: string, jsonData: any): Promise<SavedData> {
  const response = await fetch(`${API_BASE_URL}/user-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ 
      json_data: jsonData 
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

// Get all saved data for current user
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

