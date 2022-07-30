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

interface Props {
  navigation: StackNavigationProp<StackParamList, 'Main'>;
}

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const MainScreen = ({navigation}: Props) => {
  const [myName, setmyName] = useState<String | null | undefined>();
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
        <TouchableOpacity
          style={styles.mainalbum}
          onPress={() => {
            navigation.navigate('Album', {albumNumber: 1});
          }}>
          <Text>Main Album</Text>
        </TouchableOpacity>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // ->page indicator no show
          // indicatorStyle="white" ->page indecator style
        >
          {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map(
            (album, index) => (
              <TouchableOpacity
                key={index}
                style={styles.day}
                onPress={() => {
                  const albumNumber = index;
                  navigation.navigate('Album', {albumNumber: albumNumber});
                }}>
                <Text>{album}</Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>
        <Button
          title="Custom"
          onPress={() => {
            navigation.navigate('Custom');
          }}
        />
        <Text>Rising Post</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  user: {},
  day: {
    width: 100,
    alignItems: 'flex-start',
    height: 300,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  custombutton: {
    width: SCREEN_WIDTH,
    height: 40,
    marginVertical: 20,
    borderColor: 'blue',
    borderWidth: 1,
  },
  mainalbum: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH - 20,
    height: SCREEN_WIDTH - 20,
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

export default MainScreen;

/* src/screens/Home.js */
