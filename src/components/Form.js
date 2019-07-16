import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBr,TextInput,TouchableOpacity} from 'react-native';
//import { navigation } from 'react-navigation';
//import Contact from './src/pages/Contact';

export default class Logo extends Component{
    
    loginSuccess()
    {
        alert("Successfully login");
        //this.props.navigation.navigate('Contact');
    }
    render(){

        // const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='User Name'
                    placeholderTextColor='#ffffff'
                />
                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                    selectionColor='#fff'
                    keyboardType='email-address'
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Department'
                    placeholderTextColor='#ffffff'
                /> */}

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='#ffffff'
                />
                <TouchableOpacity onPress={this.loginSuccess}style={styles.button}><Text style={styles.buttontext}>Login</Text></TouchableOpacity>
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
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10
    },
    button:{
       width:300,
        //backgroundColor:'rgba(255,255,255,0.3)',
        backgroundColor:'#1c313a',
        borderRadius:25,
        color:'#ffffff',
        marginVertical:10,
        paddingVertical:12
    },
    buttontext:{
        fontSize:16,
        color:'#ffffff',
        textAlign:'center'
    }
  });