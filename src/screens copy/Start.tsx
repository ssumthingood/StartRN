import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Main'>;
}

const StartScreen = ({navigation}: Props) => {
  const [id, setId] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text>Start Screen</Text>
        <TextInput
          value={id}
          style={{height: 20, backgroundColor: 'white', width: 100}}
          onChangeText={value => {
            setId(value);
          }}
        />
        <Button
          title="Login"
          onPress={() => {
            AsyncStorage.setItem('user', id);
            setId('');
            navigation.navigate('Main');
          }}
        />
        <Button
          title="Signup"
          onPress={() => {
            setId('');
            navigation.navigate('Signup');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

/* src/screens/Home.js */
