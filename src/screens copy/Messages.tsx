import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Messages'>;
}

const MessagesScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Message Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;

/* src/screens/Home.js */
