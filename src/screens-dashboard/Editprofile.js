import React, { Component } from 'react'
import { StyleSheet, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import pp from '../assets/sample-image/mitchell-luo-wz6jcqgse9E-unsplash.jpg'
import MMM from '../assets/sample-image/oladimeji-odunsi-n5aE6hOY6do-unsplash.jpg'
import edit from '../assets/button/edit.png'
import editt from '../assets/button/edit-text.png'

Edit - profile.js

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <Text style={styles.HeaderText}>Edit Profile</Text>
        <Text style={styles.save}>Save</Text>
        <Text style={styles.cancel}>Cancel</Text>
        <Image source={pp} style={styles.profileback} />
        <Image source={edit} style={styles.eedd} />
        <Image source={editt} style={styles.eded} />
        <Image source={editt} style={styles.ede} />
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
  save: {
    fontSize: 22,
    color: '#000000',
    position: 'absolute',
    marginTop: 37,
    marginLeft: 37,
  },
  cancel: {
    fontSize: 22,
    color: '#000000',
    position: 'absolute',
    marginTop: 37,
    marginLeft: 310,
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
  eedd: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginLeft: 10,
    marginTop: 220,
  },
  eded: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginLeft: 297,
    marginTop: 380,
  },
  ede: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginLeft: 265,
    marginTop: 346,
  },
})
