/**
 * Login.tsx - User authentication screen
 * 
 * Handles user login with email and password.
 * 
 * Current flow:
 * 1. User enters email/password
 * 2. On submit, calls API login endpoint
 * 3. If successful, saves token using AuthContext
 * 4. Navigates back to Home screen
 * 
 * UX improvements to consider:
 * - Email format validation before submission
 * - Show/hide password toggle
 * - Inline error messages (instead of Alert dialogs)
 * - "Forgot password" link
 * - Keyboard dismissal on submit
 * - Loading indicator during API call
 * - Auto-focus next field
 */
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { login } from '../api/api';
import { useAuth } from '../context/AuthContext';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login: saveToken } = useAuth();  // Renamed to avoid conflict with imported login function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await login({ email, password });
      await saveToken(response.access_token);
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={loading ? 'Logging in...' : 'Login'}
            onPress={handleLogin}
            disabled={loading}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

