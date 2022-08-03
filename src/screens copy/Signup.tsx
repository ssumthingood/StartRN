import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Mypage'>;
}

const SignupScreen = ({navigation}: Props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text>Signup Screen</Text>
        <Text>ID</Text>
        <TextInput
          value={id}
          style={{height: 20, backgroundColor: 'white', width: 100}}
          onChangeText={value => {
            setId(value);
          }}
        />
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={pw}
          style={{height: 20, backgroundColor: 'white', width: 100}}
          onChangeText={value => {
            setPw(value);
          }}
        />
        <Button
          title="Signup"
          onPress={() => {
            setId('');
            setPw('');
            navigation.navigate('Start');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

/* src/screens/Home.js */
