import React from 'react';
import { StyleSheet, View, Image,Animated, TouchableOpacity} from 'react-native';
import pic from './asset/sample-image/reed-unsplash.jpg';
import close from './asset/button/nav-cancel.png'

const Picture = () => (
  <View style={styles.container}>
    <Image source={pic}
           style={styles.pic}/>
    <TouchableOpacity> 
     <Image source={close}
            style={styles.close}/>
    </TouchableOpacity>
  </View>
)
const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    flex:1
  },
  pic:{
    width: '100%',
    height: '50%',
    position: 'absolute',
    marginLeft:'5%',
    marginRight: '26%'

  },
  close:{
    width: 20,
    height: 20,
    position:'relative',
    marginLeft: '85%',
    marginBottom:'65%'
  }

});

export default Picture;