import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import picc from './asset/button/nav-left.png';
import D1 from './asset/button/nav-set.png';



const Header = () => (
    <View style={styles.HeaderContainer}>
    <Text style={styles.HeaderText}>Setting</Text>
    <Image source={picc}
             style={styles.Searchlogo}/>
    <Text style={{fontSize: 23, letterSpacing: 0, color: "#3f3e3e", left: 50, top: 60,  }}>Date</Text>
    <Text style={{fontSize: 19, letterSpacing: 0, color: "#3f3e3e", left: 60, top: 70}}>Sync</Text>
    <Image source={D1}
             style={styles.D1lo}/>

    <Text style={{fontSize: 19, letterSpacing: 0, color: "#3f3e3e", left: 60, top: 23}}>Backup</Text>
    <Image source={D1}
             style={styles.D2lo}/>
    <Text style={{fontSize: 19, letterSpacing: 0, color: "#3f3e3e", left: 60, top: 20}}>Export</Text>
    <Image source={D1}
             style={styles.D3lo}/>
    <Text style={{fontSize: 23, letterSpacing: 0, color: "#3f3e3e", left: 50, top: 20}}>Theme</Text>
    <Text style={{fontSize: 19, letterSpacing: 0, color: "#3f3e3e", left: 60, top: 30}}>Appearance</Text>
    <Image source={D1}
             style={styles.Tlo}/>

    <Text style={{fontSize: 23, letterSpacing: 0, color: "#3f3e3e", left: 50, top: 20}}>Contact</Text>
    <Text style={{fontSize: 19, letterSpacing: 0, color: "#3f3e3e", left: 60, top: 30}}>Error Center</Text>
    <Image source={D1}
             style={styles.C1lo}/>
    <Text style={{fontSize: 19, letterSpacing: 0, color: "#3f3e3e", left: 60, top: 23}}>Contact Us</Text>
    <Image source={D1}
             style={styles.C2lo}/>

    <Text style={{fontSize: 23, letterSpacing: 0, color: "#3f3e3e", left: 50, top: 20}}>About</Text>
    <Text style={{fontSize: 19, letterSpacing: 0, color: "#3f3e3e", left: 60, top: 35}}>Privacy Policy</Text>
    <Image source={D1}
             style={styles.A1lo}/>

    <Text style={{fontSize: 19, letterSpacing: 0, color: "#3f3e3e", left: 60, top: 20}}>Open Source</Text>
    <Image source={D1}
             style={styles.A2lo}/>

    </View>
)

const styles = StyleSheet.create({
  Searchlogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft: 50,
    marginTop: 35
  } , 
  
  HeaderContainer: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '15%',
        paddingTop: 15,
        position: 'absolute'

    },
    HeaderText: {
        fontSize: 24,
        color: '#000000',
        textAlign: 'center',
        marginTop: 15
    },
    D1lo: {
      width: 20,
     height: 20,
    marginLeft: 320,
    marginTop: 44
    },
    D2lo: {
      width: 20,
     height: 20,
    marginLeft: 320,
    },
    D3lo: {
      width: 20,
     height: 20,
    marginLeft: 320,
    },
    Tlo: {
      width: 20,
     height: 20,
    marginLeft: 320,
    marginTop: 5
    },
    C1lo: {
      width: 20,
     height: 20,
    marginLeft: 320,
    },
    C2lo: {
      width: 20,
     height: 20,
    marginLeft: 320,
    },
    A1lo: {
      width: 20,
     height: 20,
    marginLeft: 320,
    marginTop: 10
    },
    A2lo: {
      width: 20,
     height: 20,
    marginLeft: 320,
    marginBottom: 5
    },
});

export default Header;
