import React, {Component} from 'react';
//import {Router,Stack,Scene} from 'react-native-router-flux';
//import { createBottomTabNavigator, Routes } from 'react-navigation';

import Login from './pages/Login';
import SignUp from './pages/SignUp';


// const TabNavigator = createBottomTabNavigator({
//   Login: Login,
//   SignUp: SignUp,
// });


//export default Routes(TabNavigator);

export default class Routes extends Component {
    render() {
      return (
        // <Router>
        //     <Stack key="root">
        //     <Scene key="signup" component={SignUp} title="Register" initial = {true}/>
        //     <Scene key="login" component={Login} title="Login" />
        //     {/* <Scene key="home" component={Home}/> */}
        //     </Stack>
        // </Router>
        <div></div>
      );
    }
  }