import React, { Component } from 'react'
import { StyleSheet, Text, Image, ScrollView } from 'react-native'
import picc from '../assets/button/nav-search.png'
import pic from '../assets/button/nav-burger.png'
import photo from '../assets/sample-image/Jan.jpeg'
import pho from '../assets/sample-image/Feb.png'
import apr from '../assets/sample-image/apr.png'
import mar from '../assets/sample-image/mar.png'
import jun from '../assets/sample-image/jun.png'
import may from '../assets/sample-image/may.png'
import jul from '../assets/sample-image/jul.png'
import aug from '../assets/sample-image/aug.png'
import sep from '../assets/sample-image/sep.png'
import oct from '../assets/sample-image/oct.png'
import nov from '../assets/sample-image/nov.png'
import dec from '../assets/sample-image/dec.png'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.Container}>
        <Image source={picc} style={styles.searchlogo} />

        <Image source={pic} style={styles.Menulogo} />

        <Text style={styles.HeaderText}>2021</Text>
        <Image source={photo} style={styles.Jan} />

        <Image source={pho} style={styles.Feb} />
        <Image source={mar} style={styles.Mar} />
        <Image source={apr} style={styles.Apr} />
        <Image source={may} style={styles.May} />
        <Image source={jun} style={styles.Jun} />
        <Image source={jul} style={styles.Jul} />
        <Image source={aug} style={styles.Aug} />
        <Image source={sep} style={styles.Sep} />
        <Image source={oct} style={styles.Oct} />
        <Image source={nov} style={styles.Nov} />
        <Image source={dec} style={styles.Dec} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000000',
  },

  Menulogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft: 320,
    marginTop: 20,
  },
  searchlogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft: 30,
    marginTop: 20,
  },
  Container: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '15%',
    paddingTop: 15,
  },
  HeaderText: {
    fontSize: 28,
    color: '#000000',
    textAlign: 'center',
    marginTop: 15,
  },
  Jan: {
    width: 300,
    height: 400,

    marginLeft: 55,
    marginTop: 50,
  },
  Feb: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Mar: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Apr: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  May: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Jun: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Jul: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Aug: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Sep: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Oct: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Nov: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
  },
  Dec: {
    width: 300,
    height: 400,
    marginLeft: 55,
    marginTop: 50,
    marginBottom: 50,
  },
})
