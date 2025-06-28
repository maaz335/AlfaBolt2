import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './Home';
import ProfileScreen from './Profile';


export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string; name?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" id={undefined}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;