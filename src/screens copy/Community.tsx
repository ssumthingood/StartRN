import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Community'>;
}

const CommunityScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Community Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CommunityScreen;

/* src/screens/Home.js */
