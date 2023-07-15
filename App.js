import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Login from './screen/login/Login';
import AboutScreen from './screen/intro/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './screen/navigation/TabNavigation';
const Stack = createNativeStackNavigator();



export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen name="About" options={{ headerShown: false }} component={AboutScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="MainScreen" options={{ headerShown: false }} component={TabNavigation} />
      </Stack.Navigator>
      <StatusBar style="light" backgroundColor='black' />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
