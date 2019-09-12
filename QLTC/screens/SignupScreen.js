
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  SafeAreaView,
  StatusBar,
  TextInput,

} from 'react-native';

import { Actions } from 'react-native-router-flux'

const SignupScreen = () => {
  return (
      <View style={styles.container}>
          <SafeAreaView>
            <StatusBar barStyle='light-content'/>
            <View style={styles.container}>
                <Text style={styles.welcome}>Sign Up</Text>
                <TextInput style={styles.tiEmail}
                    placeholder="Email"
                    placeholderTextColor='#fff'
                    returnKeyType='next'
                    maxLength={50}/>
                <TextInput style={styles.tiPass}
                    placeholder="Password"
                    placeholderTextColor='#fff'
                    returnKeyType='next'
                    secureTextEntry
                    maxLength={50}/>  
                <TextInput style={styles.tiPass}
                    placeholder="RePassword"
                    placeholderTextColor='#fff'
                    returnKeyType='next'
                    secureTextEntry
                    maxLength={50}/>  
                <TouchableOpacity style={styles.toCreate}>
                    <Text style={{color:'#fff', fontSize: 15}} >CREATE</Text>
                </TouchableOpacity>
            </View>
          </SafeAreaView>
      </View>
    
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333542',
        alignItems: 'center',
        justifyContent: 'center',
      },
    welcome: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 50,
        fontWeight:'bold'
    },
    tiEmail:{
        height:50,
        marginTop:10,
        marginBottom:10,
        width:300,
        borderBottomWidth:1,
        borderColor:'#848484'
    
      },
      tiPass:{
        height:50,
        width:300,
        borderBottomWidth:1,
        borderColor:'#848484',
        marginTop:10,
        marginBottom:10
      },

      toCreate:{
        backgroundColor:'#F2F5A9',
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
      }
  
});

export default SignupScreen;
