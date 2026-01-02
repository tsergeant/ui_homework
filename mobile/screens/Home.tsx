import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useAuth } from '../context/AuthContext';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isAuthenticated, logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        {isAuthenticated && (
          <>
            <View style={styles.buttonSpacing} />
            <Button
              title="Logout"
              onPress={handleLogout}
            />
            <View style={styles.buttonSpacing} />
            <Button
              title="Save Data"
              onPress={() => navigation.navigate('SaveData')}
            />
            <View style={styles.buttonSpacing} />
            <Button
              title="Show Data"
              onPress={() => navigation.navigate('ShowData')}
            />
          </>
        )}
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
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    maxWidth: 300,
  },
  buttonSpacing: {
    height: 10,
  },
});

