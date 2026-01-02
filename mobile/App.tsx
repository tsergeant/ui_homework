/**
 * App.tsx - Main application entry point
 * 
 * This file sets up:
 * - Navigation structure (React Navigation stack)
 * - Authentication context provider (wraps entire app)
 * - All screen routes and their configuration
 * 
 * The app uses a stack navigator, which means screens are stacked on top of each other
 * (like a deck of cards). Users can navigate forward and use the back button/gesture.
 */

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import SaveData from './screens/SaveData';
import ShowData from './screens/ShowData';

// TypeScript type definition for navigation parameters
// Each screen can have parameters passed to it (currently all are undefined)
// Example: If Login needed a redirect param, it would be: Login: { redirectTo?: string }
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  SaveData: undefined;
  ShowData: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // AuthProvider wraps the entire app so any screen can access authentication state
    <AuthProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{ headerShown: true }}
          />
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{ headerShown: true }}
          />
          <Stack.Screen 
            name="Register" 
            component={Register}
            options={{ headerShown: true }}
          />
          <Stack.Screen 
            name="SaveData" 
            component={SaveData}
            options={{ headerShown: true, title: 'Save Data' }}
          />
          <Stack.Screen 
            name="ShowData" 
            component={ShowData}
            options={{ headerShown: true, title: 'Show Data' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
