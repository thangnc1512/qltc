import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
const AddThuScreen = () => {
  return (
    <View style={styles.scrollView}>
      <Text style={styles.welcome}
      onPress ={()=>Actions.chi()}>
        Add Thu Screen
      </Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#58FAD0',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  welcome:{
    fontSize:20,
    color:'#000'
  }
  
});

export default AddThuScreen;
