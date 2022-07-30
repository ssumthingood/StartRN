import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Mypage'>;
}

const MypageScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>MyPage Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MypageScreen;

/* src/screens/Home.js */
