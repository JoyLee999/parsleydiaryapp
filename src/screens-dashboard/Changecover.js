import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import picc from '../assets/icon/menu-cover.png'
import X from '../assets/button/close-menu.png'
import JJ from '../assets/sample-image/Jan.jpeg'
import FF from '../assets/sample-image/Feb.png'
import MM from '../assets/sample-image/mar.png'
import AA from '../assets/sample-image/apr.png'
import MA from '../assets/sample-image/may.png'
import JUNE from '../assets/sample-image/jun.png'
import JU from '../assets/sample-image/jul.png'
import AU from '../assets/sample-image/aug.png'
import SEP from '../assets/sample-image/sep.png'
import OO from '../assets/sample-image/oct.png'
import NO from '../assets/sample-image/nov.png'
import DE from '../assets/sample-image/dec.png'

const Header = () => (
  <View style={styles.HeaderContainer}>
    <Text style={styles.HeaderText}>Change Cover</Text>
    <Image source={picc} style={styles.coverlogo} />
    <Image source={X} style={styles.Xi} />
    <Text style={styles.subtitle}>2021</Text>
    <Image source={JJ} style={styles.jj} />
    <Image source={FF} style={styles.ff} />
    <Image source={MM} style={styles.mm} />
    <Image source={AA} style={styles.aa} />
    <Image source={MA} style={styles.ma} />
    <Image source={JUNE} style={styles.june} />
    <Image source={JU} style={styles.ju} />
    <Image source={AU} style={styles.au} />
    <Image source={SEP} style={styles.sep} />
    <Image source={OO} style={styles.oo} />
    <Image source={NO} style={styles.no} />
    <Image source={DE} style={styles.de} />
  </View>
)

const Container = () => <View style={styles.CC1}></View>

const styles = StyleSheet.create({
  coverlogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft: 35,
    marginTop: 35,
  },
  Xi: {
    width: 30,
    height: 30,
    marginLeft: 330,
    marginTop: 35,
    position: 'absolute',
  },

  HeaderContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '15%',
    paddingTop: 15,
    position: 'absolute',
  },
  HeaderText: {
    fontSize: 25,
    color: '#000000',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 85,
  },
  subtitle: {
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
    marginTop: 40,
    marginLeft: 40,
    width: '80%',
    height: '50%',
    backgroundColor: '#ffffff',
  },
  jj: {
    width: 90,
    height: 120,
    marginLeft: 60,
    marginTop: 5,
  },
  ff: {
    width: 90,
    height: 120,
    marginLeft: 170,
    marginTop: 155,
    position: 'absolute',
  },
  mm: {
    width: 90,
    height: 120,
    marginLeft: 280,
    marginTop: 155,
    position: 'absolute',
  },

  aa: {
    width: 90,
    height: 120,
    marginLeft: 60,
    marginTop: 5,
  },
  ma: {
    width: 90,
    height: 120,
    marginLeft: 170,
    marginTop: 280,
    position: 'absolute',
  },
  june: {
    width: 90,
    height: 120,
    marginLeft: 280,
    marginTop: 280,
    position: 'absolute',
  },

  ju: {
    width: 90,
    height: 120,
    marginLeft: 60,
    marginTop: 5,
  },
  au: {
    width: 90,
    height: 120,
    marginLeft: 170,
    marginTop: 405,
    position: 'absolute',
  },
  sep: {
    width: 90,
    height: 120,
    marginLeft: 280,
    marginTop: 405,
    position: 'absolute',
  },
  oo: {
    width: 90,
    height: 120,
    marginLeft: 60,
    marginTop: 5,
  },
  no: {
    width: 90,
    height: 120,
    marginLeft: 170,
    marginTop: 530,
    position: 'absolute',
  },
  de: {
    width: 90,
    height: 120,
    marginLeft: 280,
    marginTop: 530,
    position: 'absolute',
  },
})

export default Header
