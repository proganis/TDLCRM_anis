import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBr,TextInput,TouchableOpacity} from 'react-native';
import axios from 'axios';
//import { navigation } from 'react-navigation';
//import Contact from './src/pages/Contact';

export default class Logo extends Component{
    constructor(props) { 
        super(props);
        this.state = {          
            email: '',
            password:''
        }
    }
    // loginSuccess()
    // {
    //     alert("Successfully login");
    // }
    loginSuccess=(event)=>{
        event.preventDefault();
        const{email,password}=this.state;
        axios.post('https://myybackend.herokuapp.com/auth/',{
            email: email,
            password:password
        })
        .then((Response)=>{
            console.log(response);
            this.props.history.push('/');
        })
        .catch((error)=>{
            console.log(error);
        });
        this.props.navigation.navigate('Home')
    }
    render(){

        // const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
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
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
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