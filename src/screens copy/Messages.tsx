import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Messages'>;
}

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const MessagesScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Message Screen</Text>
        <View style={styles.messagecage}>
          <Text>쪽지 보내기</Text>
          <Text>받는 사람 : John Doe</Text>
          <TextInput
            multiline={true}
            numberOfLines={20}
            style={styles.messageinput}
          />
          <Button
            title="Send"
            onPress={() => {
              navigation.navigate('Mypage');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageinput: {
    width: SCREEN_WIDTH - 80,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  messagecage: {
    alignItems: 'center',
  },
});

export default MessagesScreen;

/* src/screens/Home.js */
