import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../navigations/Stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Profile'>;
  route: RouteProp<StackParamList, 'Profile'>;
}

const ProfileScreen = (props: Props) => {
  let prevalue;
  AsyncStorage.getItem('prevValue', (err, result) => {
    prevalue = result;
    console.log(prevalue);
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is profile</Text>
      <Text>{props.route.params.myValue}</Text>
      <>
        {prevalue ? (
          <>
            <Text>Prev value</Text>
            <Text>{prevalue}</Text>
          </>
        ) : (
          <></>
        )}
      </>
    </View>
  );
};
export default ProfileScreen;

/* scr/screens/List.js */
