import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Passagem from './views/Passagem';
import Lavagem from './views/Lavagem';
import Interno from './views/Interno';
import Form from './views/Form';

export default function App() {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Passagem" component={Passagem} />
        <Stack.Screen name="Lavagem" component={Lavagem} />
        <Stack.Screen name="Interno" component={Interno} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
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
