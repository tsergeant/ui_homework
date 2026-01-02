/**
 * AuthContext.tsx - Authentication state management
 * 
 * This file provides global authentication state using React Context.
 * 
 * Key concepts:
 * - Context API: Allows sharing state across components without prop drilling
 * - AsyncStorage: Persistent storage that survives app restarts (like localStorage for web)
 * - Token-based auth: JWT token is stored and sent with API requests
 * 
 * The token is stored locally so users stay logged in even after closing the app.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Type definition for what the context provides
interface AuthContextType {
  token: string | null;           // The JWT token (null if not logged in)
  isAuthenticated: boolean;      // Convenience boolean (true if token exists)
  login: (token: string) => Promise<void>;   // Function to save token after login
  logout: () => Promise<void>;               // Function to clear token
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Key used to store token in AsyncStorage (like a variable name)
const TOKEN_KEY = '@auth_token';

/**
 * AuthProvider component - Wraps the app and provides auth state to all children
 * 
 * This component:
 * 1. Loads saved token when app starts (if user was previously logged in)
 * 2. Provides login/logout functions to save/clear token
 * 3. Makes auth state available to any component via useAuth() hook
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);  // Prevents flash of wrong content while checking storage

  // Load token from storage when component first mounts (app startup)
  useEffect(() => {
    loadToken();
  }, []);

  /**
   * Loads the saved token from AsyncStorage when app starts
   * This allows users to stay logged in across app restarts
   */
  const loadToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error('Error loading token:', error);
    } finally {
      setLoading(false);  // Done checking, can render app
    }
  };

  /**
   * Saves the JWT token to both memory (state) and persistent storage
   * Called after successful login
   */
  const login = async (newToken: string) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, newToken);
      setToken(newToken);
    } catch (error) {
      console.error('Error saving token:', error);
      throw error;
    }
  };

  /**
   * Removes token from both memory and storage
   * Called when user logs out
   */
  const logout = async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      setToken(null);
    } catch (error) {
      console.error('Error removing token:', error);
      throw error;
    }
  };

  // Show nothing while checking if user has saved token
  // TODO: Could show a loading spinner here for better UX
  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useAuth hook - Custom hook to access authentication state
 * 
 * Usage in any component:
 *   const { token, isAuthenticated, login, logout } = useAuth();
 * 
 * This hook must be used inside a component that's wrapped by AuthProvider
 * (which is done in App.tsx, so it works everywhere)
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

