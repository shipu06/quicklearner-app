import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './screen/Login/Login';
import AboutScreen from './screen/Intro/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      <StatusBar style="auto" />
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
