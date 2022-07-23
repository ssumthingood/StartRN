import React, {useState} from 'react';
import {Button, View, Text, TextInput} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}, {route}: {route: any}) => {
  const [myValue, setmyValue] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TextInput
        style={{height: 20, backgroundColor: 'white', width: 100}}
        onChangeText={value => setmyValue(value)}
      />
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile', {myValue: myValue})}
      />
    </View>
  );
};

export default HomeScreen;

/* src/screens/Home.js */
