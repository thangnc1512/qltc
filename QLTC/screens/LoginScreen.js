import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'

const App = () => {
  return (
    <View style={styles.container}>

      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.viewTotal}>
              <Text style={styles.textHeader}>
                Log in
              </Text>
              <Text>
                NEW  TO HEADSPACE? <Text style={{color:'orange'}} onPress={()=>Actions.signup()}>SIGN UP FOR FREE</Text>
              </Text>
              
              <TextInput style={styles.tiEmail}
                  placeholder="Email"
                  returnKeyType='next'
                  />
              <TextInput style={styles.tiPass} 
                  placeholder="Password"
                  returnKeyType='next'
                  secureTextEntry/>

              <TouchableOpacity style={styles.toLogin}>
                <Text style={{color:'#fff', fontSize: 15}} onPress={()=>Actions.tabbar()}>LOG IN</Text>
              </TouchableOpacity>

              <View style={{alignItems:'center',justifyContent:'center',margin:10}}>
                <Text style={{fontSize:15}}>OR</Text>
              </View>

              <TouchableOpacity style={styles.toLoginFB}>
                <Text style={{color:'#fff', fontSize: 15}}>LOG IN WITH FACEBOOK</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.toLoginSpot}>
                <Text style={{color:'#fff', fontSize: 15}}>LOG IN WITH SPOTIFY</Text>
              </TouchableOpacity>
              
            </View>
        </ScrollView>
      </SafeAreaView>
    </View>
      
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTotal:{
    alignItems:'center',
    flexDirection:'column',

  },
  textHeader:{
    fontSize:35,
    marginTop:50,
    marginBottom:30,
    fontWeight: 'bold',
  },
  tiEmail:{
    height:50,
    marginTop:20,
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
    marginTop:20,
    marginBottom:30
  },

  toLogin:{
    backgroundColor:'#2E2E2E',
    width:300,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },

  toLoginFB:{
    backgroundColor:'#0040FF',
    width:300,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
    
  },
  toLoginSpot:{
    backgroundColor:'#01DF74',
    width:300,
    height:50,
    alignItems:'center',
    justifyContent:'center',

  }
});

export default App;
