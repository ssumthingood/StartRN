import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile';
import HomeScreen from '../screens/Home';
import {RouteProp} from '@react-navigation/native';

export type StackParamList = {
  Home: undefined;
  Profile: {
    myValue: string;
  };
};

interface ProfileProps {
  navigation: StackNavigationProp<StackParamList, 'Profile'>;
  route: RouteProp<StackParamList, 'Profile'>;
}

interface HomeProps {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
}

// const Stack = createStackNavigator<StackParamList>();
const MainStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export const MainStackNavigator = (props: HomeProps): any => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export const ProfileStackNavigator = (props: ProfileProps): any => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

// const StackNavigation = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// };

// export default StackNavigation;

/* src/navigations/Stack.js */
