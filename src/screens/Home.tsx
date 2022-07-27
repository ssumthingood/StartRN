import React, {useState} from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../navigations/Stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
}

const HomeScreen = ({navigation}: Props) => {
  const [myValue, setmyValue] = useState('');
  const [myData, setMyData] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TextInput
        value={myValue}
        style={{height: 20, backgroundColor: 'white', width: 100}}
        onChangeText={value => {
          setmyValue(value);
          AsyncStorage.setItem('prevValue', value, () => {
            AsyncStorage.getItem('prevValue', (err, result) =>
              setMyData(result),
            );
            console.log(myData);
            console.log(value + '들어감');
          });
        }}
      />
      <Button
        title="Go to profile"
        onPress={() => {
          const sendValue = myValue;
          setmyValue('');
          navigation.navigate('Profile', {myValue: sendValue});
        }}
      />
    </View>
  );
};

export default HomeScreen;

/* src/screens/Home.js */
