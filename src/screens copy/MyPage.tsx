import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Mypage'>;
}

const MypageScreen = ({navigation}: Props) => {
  const [myName, setmyName] = useState<String | null | undefined>();
  AsyncStorage.getItem('user', (err, result) => {
    setmyName(result);
  });
  return (
    <SafeAreaView>
      <View>
        <Text>MyPage Screen</Text>
        <Text>{myName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MypageScreen;

/* src/screens/Home.js */
