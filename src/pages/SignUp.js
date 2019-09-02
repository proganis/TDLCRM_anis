import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBr,TextInput,TouchableOpacity,Picker,ScrollView} from 'react-native';
import axios from 'axios';
//import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {          
            email: '',
            password: '',
            name: '',
            picture: '',
            role:''
        }
    }
    //{ headers: {"Authorization" : `Bearer ${tokenStr}`} }
    // access_token: "etc34LAYdtdp26QbXT9YAkMwYZOQ78JG",
    handleSubmit=(event)=>{
        event.preventDefault();
        const tokenStr='etc34LAYdtdp26QbXT9YAkMwYZOQ78JG';
        //const tokenStr='etc34LAYdtdp26Qb543534534534534535';
        const{email,password,name,picture,role}=this.state;
        //axios.post()
        //alert(role);
        axios.post('https://myybackend.herokuapp.com/users/',
        {
            email: email,
            password:password,
            name: name,
            picture: picture,
            role: role
        },
        //"bearer " + token
        //{ headers: {'Content-Type': 'application/json','Authorization' : 'etc34LAYdtdp26QbXT9YAkMwYZOQ78JG'} }
        { headers: {'Content-Type': 'application/json','Authorization' : `Bearer  ${tokenStr}`} }
        //{ headers: {'Content-Type': 'application/json','Authorization' : "Bearer  "+ tokenStr} }
        )
        .then((Response)=>{
            alert("User are saved successfully");
            this.props.history.push('/');
        })
        .catch((error)=>{
            console.log(error);
        });

        this.setState({
			email: '',
            password: '',
            name: '',
            picture: '',
            role:''
		});

    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='User Name'
                    placeholderTextColor='#ffffff'
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
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
                    placeholder='Department'
                    placeholderTextColor='#ffffff'
                    onChangeText={(role) => this.setState({role})}
                    value={this.state.role}
                /> */}

                <Picker
                selectedValue={this.state.role}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({role: itemValue})
                }>
                <Picker.Item label="Please Select a Department" value="Select a Department" />
                <Picker.Item label="admin" value="admin" />
                <Picker.Item label="mkt" value="mkt" />
                <Picker.Item label="sales" value="user" />
                </Picker>

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='#ffffff'
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />

                <TouchableOpacity onPress={this.handleSubmit} style={styles.button}><Text style={styles.buttontext}>Sign Up</Text></TouchableOpacity>
                </ScrollView>

                {/* <View style={styles.signuptext}>
                <Text>If you already have an account,please SignIn</Text>
                <TouchableOpacity onPress={this.goback} style={styles.button}><Text style={styles.buttontext}>SignIn</Text></TouchableOpacity>
                </View> */}
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
        width:200,
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