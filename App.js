import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import * as Location from 'expo-location';


const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function App() {

  const [city, setCity] = useState("Loading...")
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false })
    setCity(location[0].city);
  }

  useEffect(() => {
    getWeather();
  })
  ///  API를 통한 날씨 정보 가져오는 건 SKIP (영상 내 페이지가 유료변경.)
  ///  API를 통한 날씨 정보 가져오는 건 SKIP (영상 내 페이지가 유료변경.)
  ///  API를 통한 날씨 정보 가져오는 건 SKIP (영상 내 페이지가 유료변경.)

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato"
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500"
  }
  ,
  weather: {
    backgroundColor: 'pink'
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center"
  },
  temp: {
    fontSize: 178,
    marginTop: 50
  },
  description: {
    fontSize: 60,
    marginTop: -30
  }
})
