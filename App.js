import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaA" component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
