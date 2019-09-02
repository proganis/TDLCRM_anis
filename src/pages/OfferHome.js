import React, { Component } from 'react';
import {ScrollView,ListView,StyleSheet, Text, View,StatusBr,TouchableOpacity,Platform,Alert} from 'react-native';
import Communications from 'react-native-communications';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';
import TableRow from '../components/TableRow';

export default class OfferHome extends Component {
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
    //https://myybackend.herokuapp.com/offerinfos/
    //axios.get('https://myybackend.herokuapp.com/contacts/')
    axios.get('https://myybackend.herokuapp.com/offerinfos/')
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
  
    showArrayofferitem = (offeritem) => {
 
      Alert.alert(offeritem);
    }
    // handleSubmitPhone=(offeritem)=>{
    //   Communications.phonecall(offeritem, true);
    //   //Communications.text(offeritem, 'Test Text Here')
    //   //Communications.email([offeritem],null,null,'Please write your Subject','Write down the message');
    // }
    // handleSubmitSMS=(offeritem)=>{
    //   //Communications.phonecall(offeritem, true);
    //   Communications.text(offeritem, '')
    //   //Communications.email([offeritem],null,null,'Please write your Subject','Write down the message');
    // }

    // handleSubmofferitemail=(offeritem)=>{
    //   //Communications.phonecall(offeritem, true);
    //   //Communications.text(offeritem, 'Test Text Here')
    //   Communications.email([offeritem],null,null,'Please write your Subject','Write down the message');
    // }
  render() {
    return (
      
      <View style={styles.MainContainer}>
      <Text>Offer List</Text>
      <ScrollView>
        {
          this.state.contactsdata.map((offeritem, key) => (
            <TouchableOpacity key={key} onPress={this.showArrayofferitem.bind(this, offeritem.ProjectAddress)}>
              <Text style={styles.TextStyle}> {offeritem.ContactId} {"   "}{offeritem.ProjectId}{"  "}{offeritem.ProjectAddress}</Text>
              <View style={{ flexDirection: "row" }}>

                <View style={{ flex: 0.25 }}>
                  <TouchableOpacity><Text style={styles.buttontext}></Text></TouchableOpacity>
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