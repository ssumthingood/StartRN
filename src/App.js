import React, {Fragment, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components';
import MyButton from './components/MyButton';
// import {StatusBar} from 'expo-status-bar';

function App() {
  const name = 'Lorem Ipsum';

  //StatusBar의 barStyle 속성이 들어있는 배열 생성
  const styleTypes = ['default', 'dark-content', 'light-content'];
  //hidden 속성을 변경할때마다 리렌더링하기 위한 useState() Hook
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  //barStyle 속성을 변경할때마다 리렌더링하기 위한 useState() Hook
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;
    //배열의 길이랑 같으면 인덱스를 0으로 초기화
    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };

  return (
    // Fragment는 전체 화면을 덮는 큰 Wrapper
    <Fragment>
      <StatusBar
        backgroundColor="blue"
        barStyle={styleStatusBar}
        hidden={visibleStatusBar}
      />
      <SafeAreaView style={{flex: 0, backgroundColor: 'red'}} />
      {/* <SafeAreaView>아이폰의 노치 디자인 감안한 VIEW - View처럼 사용하면 된다 */}
      {/* View는 div라고 생각하면 편하다 */}
      <View style={styles.container}>
        <Text style={styles.title}>
          My name is {name === 'Junhong' ? 'Junhong Park' : 'React Native'}
        </Text>
        <Text style={styles.title}>
          {(() => {
            if (name === 'Junhong') {
              return 'My name is Junhong Park';
            } else if (name === 'Lorem Ipsum') {
              return 'My name is Lorem Ipsum';
            } else {
              return 'My name is React Native';
            }
          })()}
        </Text>
        {name === 'Junhong' && (
          <Text style={styles.title}>My name is Junhong</Text>
        )}
        {name !== 'Junhong' && (
          <Text style={styles.title}>My name is not Junhong</Text>
        )}
        <MyText>This is BLUE</MyText>
        {/* <StatusBar style="auto" /> */}
        <MyButton title="Button" />
        <Button
          title="Toggle StatusBar"
          onPress={() => changeVisibilityStatusBar()}
        />
        <Button
          title="Change StatusBar Style"
          onPress={() => changeStyleStatusBar()}
        />
      </View>

      <SafeAreaView style={{flex: 0, backgroundColor: 'blue'}} />
    </Fragment>
  );
}

const MyText = styled.Text`
  color: blue;
  font-size: 20px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

export default App;
