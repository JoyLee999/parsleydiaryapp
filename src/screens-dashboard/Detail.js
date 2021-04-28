import React , {Component} from 'react';
import { StyleSheet, Text,Image, ScrollView,} from 'react-native';
import picc from './asset/button/nav-left.png';
import pic from './asset/button/nav-burger.png';
import pic1 from './asset/sample-image/Thu.png';
import pic2 from './asset/sample-image/FRI.png';
import pic3 from './asset/sample-image/SAT.png';
import pic4 from './asset/sample-image/SUN.png';

export default class App extends Component{
render() {
  return (
    <ScrollView
     style={styles.Container}>

    <Image source={picc}
             style={styles.navleft}/>

    <Image source={pic}
    style={styles.Menulogo}/>

<Text style={styles.HeaderText}>Apr 2021</Text>

    <Image source={pic1}
    style={styles.Thu}/>
     <Image source={pic2}
    style={styles.FRI}/>
     <Image source={pic3}
    style={styles.SAT}/>
     <Image source={pic4}
    style={styles.SUN}/>


    </ScrollView>
  );
    }
  }


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000000'
  },

  Menulogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft: 320,
    marginTop: 20
  } , 
  navleft: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft:30,
    marginTop: 20
  } , 
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
        marginTop: 15
    },
    Thu:{
      width: 370,
      height: 168,
      marginTop: 40,
      marginLeft: 20

    },
    FRI:{
      width: 370,
      height: 168,
      marginTop: 20,
      marginLeft: 20

    },
    SAT:{
      width: 370,
      height: 168,
      marginTop: 20,
      marginLeft: 20

    },
    SUN:{
      width: 370,
      height: 168,
      marginTop: 20,
      marginLeft: 20,
      marginBottom: 30

    },

});
