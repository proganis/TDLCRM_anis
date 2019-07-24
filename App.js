/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TabNavigator} from 'react-navigation';
import Routes from './src/Routes';

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Contact from './src/pages/Contact';
import Project from './src/pages/Project';
import Home from './src/pages/Home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};

const TabNav = TabNavigator(
  {
    Home: {screen:Home},
    signup: { screen: SignUp },
    login: { screen: Login },
    Contact: { screen: Contact },
    Project: { screen: Project }
  },

  // {
  //   order:[Login,SignUp,Contact,Project],
  //   animationEnabled:true
  // },

  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        marginBottom: 2
      }
    }
  }
)

export default class App extends Component {
  render() {
    return (
      // <Contact/>
      <TabNav/>
      //<Home/>
      // <View style={styles.container}>
          
      //   {/* <Routes/> */}
      //   {/* <SignUp/> */}
      //   {/* <Login/> */}
      //   <Text style={{color:'#ffffff',fontSize:18}}>Hi There</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },
});
