import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainScreen from './screens/MainScreen';
import FindScreen from './screens/FindScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} /> 
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Crear Cuenta' }} /> 
        <Stack.Screen name="Main" component={MainScreen} options={{title: 'Bienvenido'}} />
        <Stack.Screen name="Find" component={FindScreen} options={{title: 'Encuentra un estacionamiento'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
