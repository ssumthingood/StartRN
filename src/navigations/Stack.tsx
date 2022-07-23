import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile';
import HomeScreen from '../screens/Home';

export type StackParamList = {
  Home: undefined;
  Profile: {
    myValue: string;
  };
};

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

/* src/navigations/Stack.js */
