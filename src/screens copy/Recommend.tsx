import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Recommend'>;
}

const RecommendScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Recommend Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default RecommendScreen;

/* src/screens/Home.js */
