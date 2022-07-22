import React, {useState} from 'react';
import {View, Fragment, Text, Button} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is profile</Text>
      <Text>{route.params.myValue}</Text>
    </View>
  );
};
export default ProfileScreen;

/* scr/screens/List.js */
