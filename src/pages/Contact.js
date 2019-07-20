import React, {Component} from 'react';
import {StyleSheet, ScrollView,Text, View,StatusBr,TextInput,TouchableOpacity} from 'react-native';
//import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
//import {Actions} from 'react-native-router-flux';

export default class Contact extends Component{
    constructor(props) { 
        super(props);
        this.state = {          
            name: '',
            mobileno1: '',
            mobileno2: '',
            email: '',
            source:''
        }
    }
    handleChange=(event)=>{
        alert('I am changing');
        this.setState({[event.target.name]:event.target.value});
    }

    handleChange2=(event)=>{
        this.setState({[event.target.source]:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        alert(this.state.source)
        const{name,mobileno1,mobileno2,email,source}=this.state;
        axios.post('https://myybackend.herokuapp.com/contacts/',{
            name: name,
            mobileno1: mobileno1,
            mobileno2: mobileno2,
            email: email,
            source:source
        })
        .then((Response)=>{
            console.log(response);
            this.props.history.push('/');
        })
        .catch((error)=>{
            console.log(error);
        });

    }
    render(){
        return(
            
            // <form onSubmit={this.handleSubmit}>
            // <div className="container">
            // <form  onSubmit={this.handleSubmit}>
            // <ScrollView>
            // <label>
            // Name
            // <input
            // name="name"
            // type="text"
            // value={this.state.name}
            // onChange={this.handleChange}
            // className="form-control"
            // />
            // </label>
            // <br />
            // <label>
            // Mobile No 1
            // <input
            // name="mobileno1"
            // type="text"
            // value={this.state.mobileno1}
            // onChange={this.handleChange}
            // className="form-control"
            // />
            // </label>
            // <br />
            // <label>
            // Mobile No 2
            // <input
            // name="mobileno2"
            // type="text"
            // value={this.state.mobileno2}
            // onChange={this.handleChange}
            // className="form-control"
            // />
            // </label>
            // <br />
            // <label>
            // Email
            // <input
            // name="email"
            // type="text"
            // value={this.state.email}
            // onChange={this.handleChange}
            // className="form-control"
            // />
            // </label>
            // <br />
            // <label>
            // Source
            // <input
            // name="source"
            // type="text"
            // value={this.state.source}
            // onChange={this.handleChange}
            // className="form-control"
            // />
            // </label>
            // <br />
            // <input type="submit" value="submit" className="btn btn-primary"
            // />
            // </ScrollView>
            // </form>

             <View style={styles.container}>
                 <ScrollView>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Name of Contact'
                    placeholderTextColor='#ffffff'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Mobile No'
                    placeholderTextColor='#ffffff'
                    value={this.state.mobileno1}
                    onChange={this.handleChange}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Mobile No2'
                    placeholderTextColor='#ffffff'
                    value={this.state.mobileno2}
                    onChange={this.handleChange}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Source'
                    placeholderTextColor='#ffffff'
                    value={this.state.source}
                    onChangeText={this.handleChange2}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Contact Status'
                    placeholderTextColor='#ffffff'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Area/Location'
                    placeholderTextColor='#ffffff'
                    value={this.state.mobileno1}
                    onChange={this.handleChange}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Flat Size'
                    placeholderTextColor='#ffffff'
                    value={this.state.mobileno2}
                    onChange={this.handleChange}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Budget'
                    placeholderTextColor='#ffffff'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Ready/Ongoing'
                    placeholderTextColor='#ffffff'
                    value={this.state.source}
                    onChangeText={this.handleChange2}
                />

<TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Handover On Date'
                    placeholderTextColor='#ffffff'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='For Whom'
                    placeholderTextColor='#ffffff'
                    value={this.state.mobileno1}
                    onChange={this.handleChange}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Purpose'
                    placeholderTextColor='#ffffff'
                    value={this.state.mobileno2}
                    onChange={this.handleChange}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Finance By'
                    placeholderTextColor='#ffffff'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Project')}><Text style={styles.buttontext}>Create contact</Text></TouchableOpacity> */}
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}><Text style={styles.buttontext}>Post contact</Text></TouchableOpacity>
                </ScrollView>
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