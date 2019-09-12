
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux'

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.scrollView}>
      <Text style={styles.welcome}
      onPress = {()=> Actions.login()}>
        Account Screen
      </Text>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#BE81F7',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  welcome:{
    fontSize:20,
    color:'#000'
  }
  
});

export default AccountScreen;
