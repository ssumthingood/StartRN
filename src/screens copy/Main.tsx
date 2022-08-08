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
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../NavStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Main'>;
}

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const MainScreen = ({navigation}: Props) => {
  const [myName, setmyName] = useState<String | null | undefined>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  AsyncStorage.getItem('user', (err, result) => {
    setmyName(result);
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.user}>
          <Text>Welcome, {myName}!</Text>
          <Button
            title="mypage"
            onPress={() => {
              navigation.navigate('Mypage');
            }}
          />
        </View>
        {/* <TouchableOpacity
          style={styles.mainalbum}
          onPress={() => {
            navigation.navigate('Album', {albumNumber: 1});
          }}>
          <Text>Main Album</Text>
        </TouchableOpacity> */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // ->page indicator no show
          // indicatorStyle="white" ->page indecator style
        >
          {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map(
            (album, index) => (
              <View>
                <TouchableOpacity
                  key={index}
                  style={styles.day}
                  onPress={() => {
                    const albumNumber = index;
                    navigation.navigate('Album', {albumNumber: albumNumber});
                  }}>
                  <Text>{album}</Text>
                </TouchableOpacity>
                <Text>Album Name</Text>
                <Text>Description</Text>
                {/* <Text style={styles.albumsong}>1st Song</Text>
                <Text style={styles.albumsong}>2nd Song</Text>
                <Text style={styles.albumsong}>3rd Song</Text>
                <Text style={styles.albumsong}>4th Song</Text>
                <Text style={styles.albumsong}>5th Song</Text> */}
              </View>
            ),
          )}
        </ScrollView>
        <Modal isVisible={isModalVisible} style={styles.modal}>
          <SafeAreaView>
            <ScrollView>
              <Text>Custom Album</Text>
              <Button title="Custom" onPress={handleModal} />
              <Button title="Cancel" onPress={handleModal} />
            </ScrollView>
          </SafeAreaView>
        </Modal>
        <Button
          title="Custom"
          onPress={() => {
            // navigation.navigate('Custom');
            handleModal();
          }}
        />
        <Text>Rising Post</Text>
        <Button
          title="Community"
          onPress={() => {
            navigation.navigate('Community');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  user: {},
  day: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_WIDTH - 20,
    alignItems: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 10,
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
    width: SCREEN_WIDTH - 60,
    marginVertical: 60,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
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

export default MainScreen;

/* src/screens/Home.js */
