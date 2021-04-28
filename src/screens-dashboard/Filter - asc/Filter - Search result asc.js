import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import picc from './asset/button/nav-left.png';
import pic from './asset/button/arr-off.png';
import piccc from './asset/button/search-direct.png';

const Header = () => (
    <View style={styles.HeaderContainer}>
    <Text style={styles.HeaderText}>Search</Text>
    <Text style={styles.Backtext}> Back </Text>
    <Text style={styles.restext}>:Hello</Text>
    <Text style={styles.ti1text}>Title3</Text>
    <Text style={styles.t1text}>15 apr 2021</Text>
    <Text style={styles.ti2text}>Title2</Text>
    <Text style={styles.t2text}>14 apr 2021</Text>
    <Text style={styles.ti3text}>Title1</Text>
    <Text style={styles.t3text}>13 apr 2021</Text>
    <Image source={picc}
             style={styles.Backlogo}/>
    <Image source={pic}
    style={styles.Arraylogo}/>
    <Image source={piccc}
    style={styles.Searchlogo}/>
    </View>
)

const styles = StyleSheet.create({
  Backlogo: {
    width: 32,
    height: 32,
    position: 'absolute',
    marginLeft: 12,
    marginTop: 52
  } , 
  Backtext: {
    color: "#3f3e3e",
    fontSize: 28,
    position: 'absolute',
    marginLeft: 52,
    marginTop: 49
  } , 
  Arraylogo: {
    width: 28,
    height: 28,
    position: 'absolute',
    marginLeft: 354,
    marginTop: 55
  } , 
  Searchlogo: {
    width: 24,
    height: 24,
    position: 'absolute',
    marginLeft: 163,
    marginTop: 55
  } , 
  HeaderContainer: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '15%',
        paddingTop: 15
    },
    HeaderText: {
        fontSize: 24,
        color: '#3f3e3e',
        position: 'absolute',
        marginTop: 49,
        marginLeft: 195
    },
    restext: {
      position: 'absolute',
      fontSize: 28,
      color: "#3f3e3e",
      marginTop:140,
      marginLeft:26,
      fontWeight: "bold"
    },
    ti1text: {
      position:'absolute',
      fontSize: 20,
      marginTop: 324,
      marginLeft:50,
      color: "#3f3e3e",
      

    },
    t1text: {
      position:'absolute',
      fontSize: 17,
      marginTop: 328,
      marginLeft:287,
      color: "#3f3e3e"
    },
    ti2text: {
      position:'absolute',
      fontSize: 20,
      marginTop: 279,
      marginLeft:50,
      color: "#3f3e3e"

    },
    t2text: {
      position:'absolute',
      fontSize: 17,
      marginTop: 283,
      marginLeft:287,
      color: "#3f3e3e"
    },
    ti3text: {
      position:'absolute',
      fontSize: 20,
      marginTop: 234,
      marginLeft:50,
      color: "#3f3e3e"
    },
    t3text: {
      position:'absolute',
      fontSize: 17,
      marginTop: 238,
      marginLeft:287,
      color: "#3f3e3e"
    }
        
});

export default Header;