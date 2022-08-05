import React, {useState} from 'react';
import {Button, View, Text, TextInput, SafeAreaView, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Main'>;
}

const StartScreen = ({navigation}: Props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text>Start Screen</Text>
        <Text>ID</Text>
        <TextInput
          value={id}
          style={{height: 20, backgroundColor: 'white', width: 100}}
          onChangeText={value => {
            setId(value);
          }}
        />
        <Text>PW</Text>
        <TextInput
          secureTextEntry={true}
          value={pw}
          style={{height: 20, backgroundColor: 'white', width: 100}}
          onChangeText={value => {
            setPw(value);
          }}
        />
        <Button
          title="Login"
          onPress={() => {
            if (id.length === 0 || pw.length === 0) {
              Alert.alert('ERROR', 'id or pw plz', [
                {
                  text: 'ok',
                  onPress: () => {
                    return;
                  },
                  style: 'cancel',
                },
              ]);
            } else {
              AsyncStorage.setItem('user', id);
              setId('');
              navigation.navigate('Main');
            }
          }}
        />
        <Button
          title="Signup"
          onPress={() => {
            setId('');
            setPw('');
            navigation.navigate('Signup');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

/* src/screens/Home.js */
