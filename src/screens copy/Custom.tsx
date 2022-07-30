import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Custom'>;
}

const CustomScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Custom Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomScreen;

/* src/screens/Home.js */
