import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBr,TextInput,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Project extends Component{

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Project Name'
                    placeholderTextColor='#ffffff'
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Project Address'
                    placeholderTextColor='#ffffff'
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Type of Project'
                    placeholderTextColor='#ffffff'
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='LO Name'
                    placeholderTextColor='#ffffff'
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Contact')}><Text style={styles.buttontext}>Create Project</Text></TouchableOpacity>
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