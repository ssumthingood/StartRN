import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Mypage'>;
}

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const MypageScreen = ({navigation}: Props) => {
  const [myName, setmyName] = useState<String | null | undefined>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  AsyncStorage.getItem('user', (err, result) => {
    setmyName(result);
  });
  return (
    <SafeAreaView>
      <View>
        <Text>MyPage Screen</Text>
        <Button
          title="Slip"
          onPress={() => {
            handleModal();
          }}
        />
        <Text>{myName}</Text>
        <Modal isVisible={isModalVisible} style={styles.modal}>
          <SafeAreaView>
            <Text>내 쪽지함</Text>
            <ScrollView>
              {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map(
                (message, index) => (
                  <View>
                    <TouchableOpacity key={index} style={styles.message}>
                      <Text>{message}</Text>
                    </TouchableOpacity>
                  </View>
                ),
              )}
            </ScrollView>
            <Button title="Cancel" onPress={handleModal} />
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  user: {},
  message: {
    width: SCREEN_WIDTH - 80,
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  albumsong: {
    width: SCREEN_WIDTH - 20,
    height: 30,
    marginVertical: 3,
    marginHorizontal: 10,
    borderColor: 'blue',
    borderWidth: 1,
  },
  custombutton: {
    width: SCREEN_WIDTH,
    height: 40,
    marginVertical: 20,
    borderColor: 'blue',
    borderWidth: 1,
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 60,
    marginVertical: 30,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  // mainalbum: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: SCREEN_WIDTH - 20,
  //   height: SCREEN_WIDTH - 20,
  //   borderColor: 'black',
  //   borderWidth: 2,
  //   marginVertical: 20,
  //   marginHorizontal: 10,
  // },
});

export default MypageScreen;

/* src/screens/Home.js */
