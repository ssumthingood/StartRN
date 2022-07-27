import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './navigations/BottomTab';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;

/* src/App.js */
