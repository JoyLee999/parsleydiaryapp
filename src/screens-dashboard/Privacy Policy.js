import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import leftlogo from '../assets/button/nav-left.png'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.Container}>
            <Image source={leftlogo} style={styles.leftlogo} />
            <Text style={styles.Title}>Privacy</Text>
            <Text style={styles.Title2}>Policy</Text>
          </View>
          <View style={styles.Container2}>
            <Text style={styles.Main1}>1.AA</Text>
            <Text style={styles.Main12}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis auctor odio, a luctus lorem. Quisque blandit condimentum mi.
              Nulla vulputate augue in est mattis, et ullamcorper arcu
              tincidunt. Proin sagittis eu ligula sit amet tincidunt. Mauris
              maximus, massa ut posuere sagittis, quam ante egestas lorem, in
              elementum metus quam nec nunc. "
            </Text>
            <Text style={styles.Main2}>2.BB</Text>
            <Text style={styles.Main22}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis auctor odio, a luctus lorem. Quisque blandit condimentum mi.
              Nulla vulputate augue in est mattis, et ullamcorper arcu
              tincidunt. Proin sagittis eu ligula sit amet tincidunt. Mauris
              maximus, massa ut posuere sagittis, quam ante egestas lorem, in
              elementum metus quam nec nunc. "
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000000',
  },
  Container: {
    width: 428,
    height: 926,
    backgroundColor: '#ffffff',
  },
  leftlogo: {
    width: 34,
    height: 34,
    position: 'absolute',
    marginLeft: 48,
    marginTop: 64,
  },
  Title: {
    fontSize: 28,
    position: 'relative',
    marginLeft: 120,
    marginTop: 58,
  },
  Title2: {
    fontSize: 28,
    position: 'absolute',
    marginLeft: 220,
    marginTop: 58,
  },
  Container2: {
    width: '80%',
    height: 100,
    position: 'absolute',
    marginTop: 121,
  },

  Main1: {
    fontSize: 24,
    marginLeft: 48,
    marginTop: 52,
    position: 'absolute',
  },
  Main12: {
    fontSize: 14,
    marginLeft: 60,
    marginTop: 99,
    position: 'absolute',
    textAlign: 'left',
  },
  Main2: {
    fontSize: 24,
    marginTop: 288,
    marginLeft: 48,
    position: 'absolute',
  },
  Main22: {
    fontSize: 14,
    marginLeft: 60,
    marginTop: 335,
    position: 'absolute',
    textAlign: 'left',
  },
})
