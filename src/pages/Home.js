import React, { Component } from 'react';
import {ScrollView,ListView,StyleSheet, Text, View,StatusBr,TouchableOpacity,Platform,Alert} from 'react-native';
import Communications from 'react-native-communications';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';
import TableRow from '../components/TableRow';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4','Head5'],
      contactsdata:[]
    };
  }
 
  componentDidMount = () => {
    this.getcontactList();
    }
    getcontactList() {
    axios.get('https://myybackend.herokuapp.com/contacts/')
    .then((response) => {
    console.log(response);
    this.setState({
      contactsdata: response.data
    });
    })
    .catch((error) => {
    console.log(error);
    })
    }
  
    showArrayItem = (item) => {
 
      Alert.alert(item);
    }
    handleSubmitPhone=(item)=>{
      Communications.phonecall(item, true);
      //Communications.text(item, 'Test Text Here')
      //Communications.email([item],null,null,'Please write your Subject','Write down the message');
    }
    handleSubmitSMS=(item)=>{
      //Communications.phonecall(item, true);
      Communications.text(item, '')
      //Communications.email([item],null,null,'Please write your Subject','Write down the message');
    }

    handleSubmitEmail=(item)=>{
      //Communications.phonecall(item, true);
      //Communications.text(item, 'Test Text Here')
      Communications.email([item],null,null,'Please write your Subject','Write down the message');
    }
  render() {
    return (
      
      <View style={styles.MainContainer}>
      <Text>Contact List</Text>
      <ScrollView>
        {
          this.state.contactsdata.map((item, key) => (
            <TouchableOpacity key={key} onPress={this.showArrayItem.bind(this, item.name)}>
              <Text style={styles.TextStyle}> {item.name} {"   "}{item.mobileno1}{"  "}{item.email}</Text>
              <View style={{ flexDirection: "row" }}>

                <View style={{ flex: 0.25 }}>
                  <TouchableOpacity style={styles.button} onPress={this.handleSubmitPhone.bind(this,item.mobileno1)}><Text style={styles.buttontext}>Phone</Text></TouchableOpacity>
                </View>

                <View style={{ flex: 0.25 }}>
                  <TouchableOpacity style={styles.button} onPress={this.handleSubmitSMS.bind(this,item.mobileno1)}><Text style={styles.buttontext}>SMS</Text></TouchableOpacity>
                </View>

                <View style={{ flex: 0.25 }}>
                  <TouchableOpacity style={styles.button} onPress={this.handleSubmitEmail.bind(this,item.email)}><Text style={styles.buttontext}>Email</Text></TouchableOpacity>
                </View>

              </View>
              <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

            </TouchableOpacity>
            
          ))
        }

      </ScrollView>

    </View>
 );
}
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    margin: 2,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,

  },

  TextStyle: {
    fontSize: 12,
    color: '#000',
    textAlign: 'left'
  },
  button:{
    width:60,
    backgroundColor:'#1c313a',
    borderRadius:25,
    color:'#ffffff',
    marginVertical:10,
    paddingVertical:12
},
buttontext:{
    fontSize:12,
    color:'#ffffff',
    textAlign:'center'
}

});