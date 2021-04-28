import React , {Component} from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import picc from './asset/button/nav-search.png';
import pic from './asset/button/nav-burger.png';
import photo from './asset/sample-image/Jan.jpeg';
import pho from './asset/sample-image/Feb.png';
import apr from './asset/sample-image/apr.png';
import mar from './asset/sample-image/mar.png';
import jun from './asset/sample-image/jun.png';
import may from './asset/sample-image/may.png';
import jul from './asset/sample-image/jul.png';
import aug from './asset/sample-image/aug.png';
import sep from './asset/sample-image/sep.png';
import oct from './asset/sample-image/oct.png';
import nov from './asset/sample-image/nov.png';
import dec from './asset/sample-image/dec.png';



export default class App extends Component{
render() {
  return (
    <ScrollView
     style={styles.Container}>
    
    <Image source={picc}
             style={styles.searchlogo}/>
    
    <Image source={pic}
    style={styles.Menulogo}/>

<Text style={styles.HeaderText}>2021
   </Text>
    <Image source={photo}
    style={styles.Jan}/>
    
    <Image source={pho}
    style={styles.Feb}/>
   <Image source={mar}
    style={styles.Mar}/>
    <Image source={apr}
    style={styles.Apr}/>
    <Image source={may}
    style={styles.May}/>
    <Image source={jun}
    style={styles.Jun}/>
    <Image source={jul}
    style={styles.Jul}/>
    <Image source={aug}
    style={styles.Aug}/>
    <Image source={sep}
    style={styles.Sep}/>
    <Image source={oct}
    style={styles.Oct}/>
    <Image source={nov}
    style={styles.Nov}/>
    <Image source={dec}
    style={styles.Dec}/>
    

    
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
  searchlogo: {
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
    Jan: {
      width: 300,
      height: 400,

      marginLeft: 55,
      marginTop: 50
    },
    Feb: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Mar: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Apr: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    May: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Jun: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Jul: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Aug: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Sep: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Oct: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Nov: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50
    },
    Dec: {
      width: 300,
      height: 400,
      marginLeft: 55,
      marginTop: 50,
      marginBottom: 50
    },
    
});


