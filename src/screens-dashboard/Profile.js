import React, { Component } from 'react'
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native'
import picc from '../assets/button/nav-search.png'
import pic from '../assets/button/nav-burger.png'
import pp from '../assets/sample-image/mitchell-luo-wz6jcqgse9E-unsplash.jpg'
import MMM from '../assets/sample-image/oladimeji-odunsi-n5aE6hOY6do-unsplash.jpg'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <Text style={styles.HeaderText}>Profile</Text>
        <Image source={picc} style={styles.Searchlogo} />
        <Image source={pic} style={styles.Menulogo} />
        <Image source={pp} style={styles.profileback} />
        <Image source={MMM} style={styles.mmm} />
        <Text style={styles.name1}>Jane Doe</Text>
        <Text style={styles.name2}>Welcome to Hello World!</Text>
        <Text style={styles.line}>
          __________________________________________________________________
        </Text>
        <Text style={styles.four}>4</Text>
        <Text style={styles.fav}>Favourite</Text>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.tag}>Tag</Text>
        <Text style={styles.fif}>15</Text>
        <Text style={styles.fiv}>5</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  Searchlogo: {
    width: 27,
    height: 27,
    position: 'absolute',
    marginLeft: 50,
    marginTop: 35,
  },
  Menulogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft: 320,
    marginTop: 30,
  },
  Container: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '12.5%',
    paddingTop: 15,
    position: 'absolute',
  },
  HeaderText: {
    fontSize: 28,
    color: '#000000',
    textAlign: 'center',
    marginTop: 15,
    letterSpacing: 1,
  },
  profileback: {
    width: 470,
    height: 170,
    position: 'absolute',
    marginLeft: 0,
    marginTop: 80,
  },
  mmm: {
    width: 150,
    height: 150,
    position: 'absolute',
    marginLeft: 130,
    marginTop: 180,
    borderRadius: 30,
  },
  name1: {
    fontSize: 24,
    color: '#000000',
    position: 'absolute',
    marginTop: 340,
    marginLeft: 155,
  },
  name2: {
    fontSize: 15,
    color: '#000000',
    position: 'absolute',
    marginTop: 380,
    marginLeft: 125,
  },
  line: {
    fontSize: 10,
    color: '#000000',
    position: 'absolute',
    marginTop: 400,
    marginLeft: 55,
  },
  four: {
    fontSize: 24,
    color: '#000000',
    position: 'absolute',
    marginTop: 430,
    marginLeft: 85,
  },
  fav: {
    fontSize: 15,
    color: '#000000',
    position: 'absolute',
    marginTop: 460,
    marginLeft: 60,
  },
  total: {
    fontSize: 15,
    color: '#000000',
    position: 'absolute',
    marginTop: 460,
    marginLeft: 190,
  },
  tag: {
    fontSize: 15,
    color: '#000000',
    position: 'absolute',
    marginTop: 460,
    marginLeft: 300,
  },
  fif: {
    fontSize: 24,
    color: '#000000',
    position: 'absolute',
    marginTop: 430,
    marginLeft: 192,
  },
  fiv: {
    fontSize: 24,
    color: '#000000',
    position: 'absolute',
    marginTop: 430,
    marginLeft: 305,
  },
})
