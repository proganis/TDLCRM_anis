import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBr} from 'react-native';

export default class Logo2 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Logo</Text>
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
  });