import React from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';
import ThuScreen from './screens/ThuScreen';
import ChiScreen from './screens/ChiScreen';
import AccountScreen from './screens/AccountScreen';
import SignupScreen from './screens/SignupScreen';
import AddThuScreen from './screens/AddThuScreen';
import AddChiScreen from './screens/AddChiScreen';



const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? '#DF013A' :'#000000'}}></Text>
  );
}
const App = () => {
  return (
    <Router>
      <Scene key="root"
      hideNavBar
      >
        <Scene 
          key="login"
          component={LoginScreen}

          initial
        />
        <Scene 
          key="signup"
          component={SignupScreen}

        />
        <Scene key="tabbar"
          tabs
          tabBarStyle={{backgroundColor:'#ffffff'}}>
          
            <Scene key="thu"  title="Khoan Thu" icon={TabIcon}>
              <Scene
                key="thu"
                component={ThuScreen}
                title="Thu"
                initial
              />
              <Scene
                key="addThu"
                component={AddThuScreen}
                title="Them Khoan Thu"
              />

            </Scene>
            <Scene key="khoanchi"  title="Khoan Chi" icon={TabIcon}>
              <Scene 
                key="chi"
                component={ChiScreen}
                title="Chi"
                initial
              />
              <Scene 
                key="addChi"
                component={AddChiScreen}
                title="Them Khoan Chi"
              />

            </Scene>
            <Scene key="account"  title="Account" icon={TabIcon}>
            <Scene 
              key="Account"
              component={AccountScreen}
              title="Tai Khoan"
            />

            </Scene>
          
        </Scene>

      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  
});
export default App;
