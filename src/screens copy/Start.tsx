import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Main'>;
}

const StartScreen = ({navigation}: Props) => {
  const [myValue, setmyValue] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text>Start Screen</Text>
        <TextInput
          value={myValue}
          style={{height: 20, backgroundColor: 'white', width: 100}}
          onChangeText={value => {
            setmyValue(value);
          }}
        />
        <Button
          title="Go to profile"
          onPress={() => {
            AsyncStorage.setItem('user', myValue);
            setmyValue('');
            navigation.navigate('Main');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

/* src/screens/Home.js */
