import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const ProfileScreen = (
  {navigation}: {navigation: any},
  {route}: {route: any},
) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is profile</Text>
      <Text>{route.params.myValue}</Text>
    </View>
  );
};
export default ProfileScreen;

/* scr/screens/List.js */
