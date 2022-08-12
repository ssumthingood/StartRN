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
  // const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const handleModal = () => {
    if (isModalVisible) {
      setIsSendVisible(() => false);
      setIsModalVisible(() => !isModalVisible);
    } else {
      setIsModalVisible(() => !isModalVisible);
    }
  };
  const [isSendVisible, setIsSendVisible] = useState(false);
  const handleSend = () => setIsSendVisible(() => !isSendVisible);
  AsyncStorage.getItem('user', (err, result) => {
    setmyName(result);
  });
  return (
    <SafeAreaView>
      <View>
        <Text>MyPage Screen</Text>
        <Button
          title="LogOut"
          onPress={() => {
            AsyncStorage.clear();
            navigation.navigate('Start');
          }}
        />
        <Button
          title="쪽지"
          onPress={() => {
            handleModal();
          }}
        />
        <Modal isVisible={isModalVisible} style={styles.modal}>
          <Button
            title="쪽지 보내기"
            onPress={() => {
              handleModal();
              navigation.navigate('Messages');
            }}
          />
          <SafeAreaView>
            <ScrollView>
              {isSendVisible ? (
                <View style={styles.messagecage}>
                  <Text>쪽지 보내기</Text>
                  <Text>받는 사람 : John Doe</Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={20}
                    style={styles.messageinput}
                  />
                  <Button title="Send" onPress={handleModal} />
                </View>
              ) : (
                <View style={styles.messagecage}>
                  <Text>내 쪽지함</Text>
                  {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map(
                    (message, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.message}
                        onPress={handleSend}>
                        <Text>{message}</Text>
                      </TouchableOpacity>
                    ),
                  )}
                </View>
              )}
            </ScrollView>
            <Button title="Cancel" onPress={handleModal} />
          </SafeAreaView>
        </Modal>
        <View>
          <Text>이름 : {myName}</Text>
          <Text>관심분야</Text>
          <Text>My Albums</Text>
          {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map(
            (message, index) => (
              <TouchableOpacity
                key={index}
                style={styles.myalbums}
                onPress={() => {
                  const albumNumber = index;
                  navigation.navigate('Album', {albumNumber: albumNumber});
                }}>
                <Text>{message}</Text>
              </TouchableOpacity>
            ),
          )}
        </View>
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
  messageinput: {
    width: SCREEN_WIDTH - 80,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  messagecage: {},
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
    marginVertical: 60,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 15,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  myalbums: {
    width: 40,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
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
