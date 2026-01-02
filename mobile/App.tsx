import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import SaveData from './screens/SaveData';
import ShowData from './screens/ShowData';

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
