import React, {Fragment, useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as Location from 'expo-location';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const API_KEY = 'ThisIsMockdata';

function App() {
  const [city, setCity] = useState('Loading...');
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: {latitude, longitude},
    } = await Location.getCurrentPositionAsync({accuracy: 5});
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude},
      {useGoogleMaps: false},
    );
    setCity(location[0].city);
    const response = fetch(
      `weatherAPI?latitude=${latitude}&longitude=${longitude}&appid=${API_KEY}`,
    );
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false} //->page indicator no show
        // indicatorStyle="white" ->page indecator style
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          {/* 기온 */}
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.temp}>27◦</Text>
            <Text style={styles.icon}>☀︎</Text>
          </View>
          <Text style={styles.description}>Sunny</Text>
          <Text style={styles.tinyText}>description</Text>
        </View>

        <View style={styles.day}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.temp}>27◦</Text>
            <Text style={styles.icon}>☀︎</Text>
          </View>
          <Text style={styles.description}>Sunny</Text>
          <Text style={styles.tinyText}>description</Text>
        </View>
        <View style={styles.day}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.temp}>27◦</Text>
            <Text style={styles.icon}>☀︎</Text>
          </View>
          <Text style={styles.description}>Sunny</Text>
          <Text style={styles.tinyText}>description</Text>
        </View>
        <View style={styles.day}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.temp}>27◦</Text>
            <Text style={styles.icon}>☀︎</Text>
          </View>
          <Text style={styles.description}>Sunny</Text>
          <Text style={styles.tinyText}>description</Text>
        </View>
        <View style={styles.loading}>
          {/* 로딩중일때 나오는 돌아가는 그림 */}
          <ActivityIndicator
            color="white"
            style={{marginTop: 150}}
            size="large"
          />
        </View>
        {/* {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              style={{marginTop: 10}}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.temp}>
                {parseFloat(day.temp.day).toFixed(1)}
              </Text>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )} */}
      </ScrollView>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    color: 'white',
    fontSize: 58,
    fontWeight: '500',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  loading: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontWeight: '600',
    fontSize: 100,
    color: 'white',
  },
  icon: {
    marginTop: 50,
    fontWeight: '600',
    color: 'white',
    fontSize: 75,
    marginLeft: 100,
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
  tinyText: {
    marginTop: -5,
    fontSize: 25,
    color: 'white',
    fontWeight: '500',
  },
});
