import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBr,TextInput,TouchableOpacity,Linking,btoa} from 'react-native';
import axios from 'axios';
import { navigation } from 'react-navigation';
import Contact from '../pages/Contact'

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
    loginSuccess2=(event)=>{
        event.preventDefault();
        const{email,password}=this.state;

        var session_url = 'https://myybackend.herokuapp.com/auth/';
        var basicAuth = 'Basic ' + btoa(email + ':' + password);
        axios.post(session_url, {}, {
        headers: { 'Authorization': + basicAuth }
        }).then(function(response) {
        console.log('Authenticated');
        }).catch(function(error) {
        console.log('Error on Authentication');
        });
    }

    loginSuccess3=(event)=>{
        var session_url = 'https://myybackend.herokuapp.com/auth/';
        const tokenStr='etc34LAYdtdp26QbXT9YAkMwYZOQ78JG';
        const{email,password}=this.state;
        //self.props.appContext=new self.props.appContext();
        axios.post(session_url, {}, {
        auth: {
            email: email,
            password: password
        }
        }).then(function(response) {
        alert(response.data.code);
        }).catch(function(error) {
            //uploadScreen.push(<Contact appContext={self.props.appContext}/>)
            //self.props.appContext.setState()
            alert(email+password)
        alert('Error on Authentication');
        });
    }

    loginSuccess=(event)=>{
        event.preventDefault();
        const{email,password}=this.state;
        const tokenStr='etc34LAYdtdp26QbXT9YAkMwYZOQ78JG';
        axios.post('https://myybackend.herokuapp.com/auth/',
        {
            email: email,
            password:password
        },
        { headers: {'Content-Type': 'application/json','Authorization' : 'Basic'} }
        )
        .then((Response)=>{
            alert("successfully login");
            //setLocalStorage('token', Response.data.token);
            //alert(Response.data.token);
            //console.log(response);
            //this.props.history.push('/');
            //<Contact/>
        })
        .catch((error)=>{
            //this.props.navigation.navigate('Contact')
            alert("successfully loginn");
            alert(Response.data.token);
            //this.props.history.push('/');
            //alert(error);
            //console.log(error);
        });
        //this.props.navigation.navigate('Contact')
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