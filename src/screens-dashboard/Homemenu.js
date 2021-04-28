import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import picc from './asset/icon/menu-main.png';
import X from './asset/button/close-menu.png';
import SH from './asset/button/menu-share.png';
import SE from './asset/button/menu-settings.png';
import CA from './asset/button/menu-calendar.png';
import CO from './asset/icon/menu-cover.png';
import AR from './asset/button/arr-button.png';

const Header = () => (
    <View style={styles.HeaderContainer}>
    <Text style={styles.HeaderText}>Menu</Text>
    <Image source={picc}
             style={styles.coverlogo}/>
    <Image source={X}
             style={styles.Xi}/>
    <Text style={styles.share}>Share</Text>
    <Image source={SH}
    style={styles.sharei}/>
    <Text style={styles.setting}>Setting</Text>
    <Text style={styles.cover}>Cover</Text>
    <Text style={styles.cal}>Calendar</Text>
    <Text style={styles.arr}>Arrangement</Text>
    <Image source={SE}
    style={styles.se}/>
    <Image source={CA}
    style={styles.ca}/>
    <Image source={CO}
    style={styles.co}/>
    <Image source={AR}
    style={styles.ar}/>

    </View>
)


const styles = StyleSheet.create({
  coverlogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft: 35,
    marginTop: 35
  } , 
  Xi: {
    width: 30,
    height: 30,
    marginLeft: 330,
    marginTop: 35,
    position: 'absolute',
  } , 
  
  HeaderContainer: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '15%',
        paddingTop: 15,
        position: 'absolute'

    },
    HeaderText: {
        fontSize: 25,
        color: '#000000',
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 85
    },
    share: {
      fontSize: 15,
      color: '#000000',
      paddingLeft: 70,
      paddingTop :15,
      marginTop: 50,
      marginLeft: 40,
      width: '35%',
      height: '60%',
      backgroundColor: '#ffffff',
      borderRadius: 5,
      backgroundColor: "#fdfdfd",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#c7c7c7"
      
  },
sharei: {
  width: 17,
    height: 17,
    marginLeft: 60,
    marginTop: 135,
    position: 'absolute'

},
setting: {
  fontSize: 15,
  color: '#000000',
  paddingLeft: 70,
  paddingTop :15,
  marginTop: 118,
  marginLeft: 220,
  width: '35%',
  height: '60%',
  backgroundColor: '#ffffff',
  borderRadius: 5,
  backgroundColor: "#fdfdfd",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#c7c7c7",
  position: 'absolute'
},
cover: {
  fontSize: 15,
  color: '#000000',
  paddingLeft: 80,
  paddingTop :15,
  marginTop: 190,
  marginLeft: 220,
  width: '35%',
  height: '60%',
  backgroundColor: '#ffffff',
  borderRadius: 5,
  backgroundColor: "#fdfdfd",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#c7c7c7",
  position: 'absolute'
},
cal: {
  fontSize: 15,
  color: '#000000',
  paddingLeft: 60,
  paddingTop :15,
  marginTop: 190,
  marginLeft: 40,
  width: '35%',
  height: '60%',
  backgroundColor: '#ffffff',
  borderRadius: 5,
  backgroundColor: "#fdfdfd",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#c7c7c7",
  position: 'absolute'
},
arr: {
  fontSize: 15,
  color: '#000000',
  paddingLeft: 130,
  paddingTop :15,
  marginTop: 260,
  marginLeft: 44,
  width: '77%',
  height: '60%',
  backgroundColor: '#ffffff',
  borderRadius: 5,
  backgroundColor: "#fdfdfd",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#c7c7c7",
  position: 'absolute'
},

se: {
  width: 17,
    height: 17,
    marginLeft: 240,
    marginTop: 135,
    position: 'absolute'

},
co: {
  width: 17,
    height: 17,
    marginLeft: 240,
    marginTop: 207,
    position: 'absolute'

},
ca: {
  width: 17,
    height: 17,
    marginLeft: 60,
    marginTop: 207,
    position: 'absolute'

},
ar: {
  width: 17,
    height: 17,
    marginLeft: 140,
    marginTop: 275,
    position: 'absolute'

},

});

export default Header;

