/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// //import AppNavigator from './src/components/AppNavigator'
// //import {TabNavigator} from 'react-navigation';
// import Routes from './src/Routes';

// import Login from './src/pages/Login';
// import SignUp from './src/pages/SignUp';
// import Contact from './src/pages/Contact';
// import Project from './src/pages/Project';
// import Home from './src/pages/Home';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// //type Props = {};

// // const TabNav = TabNavigator(
// //   {
// //     Home: {screen:Home},
// //     signup: { screen: SignUp },
// //     login: { screen: Login },
// //     Contact: { screen: Contact },
// //     Project: { screen: Project }
// //   },

// //   // {
// //   //   order:[Login,SignUp,Contact,Project],
// //   //   animationEnabled:true
// //   // },

// //   {
// //     tabBarOptions: {
// //       labelStyle: {
// //         fontSize: 12,
// //         marginBottom: 2
// //       }
// //     }
// //   }
// // )

// const TabNavigator = createBottomTabNavigator({
//     Home: {screen:Home},
//     signup: { screen: SignUp },
//     login: { screen: Login },
//     Contact: { screen: Contact },
//     Project: { screen: Project }
// });

// export default class App extends Component {
//   render() {
//     return (
//       <TabNavigator/>
//       //<AppNavigator/>
//       // <Contact/>
//       // <TabNav/>
//       // <TabNav1/>
//       //<Home/>
//       // <View style={styles.container}>
          
//       //   {/* <Routes/> */}
//       //   {/* <SignUp/> */}
//       //   {/* <Login/> */}
//       //   <Text style={{color:'#ffffff',fontSize:18}}>Hi There</Text>
//       // </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#455a64',
//   },
// });
// import {createStackNavigator, createAppContainer} from 'react-navigation';

// const MainNavigator = createStackNavigator({
//   Home: {screen: Home},
//   Contact: {screen: Contact},
// });

// const App = createAppContainer(MainNavigator);

// export default App;

import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createSwitchNavigator,createStackNavigator } from 'react-navigation';

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Contact from './src/pages/Contact';
import Project from './src/pages/Project';
import Offer from './src/pages/OfferInfo';
import Home from './src/pages/Home';
import OfferList from './src/pages/OfferHome1'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

// const AppStack = createStackNavigator({ SignUp:SignUp,
//   Contact:Contact,
//   Home: Home,
//   Settings: SettingsScreen,
//   Project:Project });

// const AuthStack = createStackNavigator({   Login:Login, });

const TabNavigator = createBottomTabNavigator({
  Login:Login,
  SignUp:SignUp,
  Contact:Contact,
  Home: Home,
  //Settings: SettingsScreen,
  Offer:Offer,
  OfferList:OfferList
});


// export default createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: Login,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// ));

export default createAppContainer(TabNavigator);
