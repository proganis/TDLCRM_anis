import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBr,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
// import Logo from '../components/Logo2';
import Logo from '../components/Form';

export default class Login extends Component{
    // signup()
    // {
    //     Actions.signup();
    // }
    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                {/* <Form/> */}
                {/* <View style={styles.signuptext}>
                    <Text>do not have account,please</Text>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Login</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupbutton}>SignUp</Text></TouchableOpacity>
                </View>            */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#455a64',
    },
    signuptext:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupbutton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
  });