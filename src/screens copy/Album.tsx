import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Album'>;
  route: RouteProp<StackParamList, 'Album'>;
}

const AlbumScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Album Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default AlbumScreen;

/* src/screens/Home.js */
