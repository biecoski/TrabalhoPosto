import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InputScreen from './screens/InputScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Input" 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F0E68C', // Cor do fundo do cabeçalho
          },
          headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
          headerTitleStyle: {
            fontWeight: 'Lucida Bright',
            fontSize: '295%',
          },
        }}
      >
        <Stack.Screen name="Input" component={InputScreen} options={{ title: 'Gas Station' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Resultado' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
