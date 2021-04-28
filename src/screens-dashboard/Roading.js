import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    margin: 110,
  },

  logo: {
    width: 212,
    height: 212,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
})

class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/icon/logo.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/icon/parsely.png')}
        />
      </View>
    )
  }
}

export default DisplayAnImage
