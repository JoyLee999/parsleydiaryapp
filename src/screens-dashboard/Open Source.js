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
            <Text style={styles.Title}>Open</Text>
            <Text style={styles.Title2}>Source</Text>
          </View>
          <View style={styles.Container2}>
            <Text style={styles.Main1}>Library</Text>
            <Text style={styles.Main11}>1</Text>
            <Text style={styles.Main12}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis auctor odio, a luctus lorem. Quisque blandit condimentum mi.
              Nulla vulputate augue in est mattis, et ullamcorper arcu
              tincidunt. Proin sagittis eu ligula sit amet tincidunt. Mauris
              maximus, massa ut posuere sagittis, quam ante egestas lorem, in
              elementum metus quam nec nunc. "
            </Text>
            <Text style={styles.Main2}>Library</Text>
            <Text style={styles.Main22}>2</Text>
            <Text style={styles.Main222}>
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
    marginLeft: 134,
    marginTop: 58,
  },
  Title2: {
    fontSize: 28,
    position: 'absolute',
    marginLeft: 210,
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
  Main11: {
    fontSize: 24,
    marginLeft: 130,
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
    fontSize: 24,
    marginLeft: 130,
    marginTop: 288,
    position: 'absolute',
  },

  Main222: {
    fontSize: 14,
    marginLeft: 60,
    marginTop: 335,
    position: 'absolute',
    textAlign: 'left',
  },
})
