import React, {Component} from 'react';
import {Alert,StyleSheet, ScrollView,Text, Picker,View,StatusBr,TextInput,TouchableOpacity} from 'react-native';
//import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-datepicker';
import { TextField } from 'react-native-material-textfield';
//import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Reducer } from 'react-native-router-flux';
//import {Actions} from 'react-native-router-flux';

export default class Contact extends Component{
    constructor(props) { 
        super(props);
        this.state = {          
            name: '',
            mobileno1: '',
            mobileno2: '',
            email: '',
            source:'',
            contactStatus:'',
            location:'',
            flatsize:'',
            budget:'',
            readyOngoing:'',
            //handoverdate:'',
            handoverdate:new Date(),
            forwhome:'',
            purpose:'',
            financeBy:'',
            issueby:''

        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const{name,mobileno1,mobileno2,email,source,contactStatus,location,flatsize,budget,readyOngoing,handoverdate,forwhome,purpose,financeBy,issueby}=this.state;
        axios.post('https://myybackend.herokuapp.com/contacts/',{
            name: name,
            mobileno1: mobileno1,
            mobileno2: mobileno2,
            email: email,
            source:source,
            contactStatus:contactStatus,
            location:location,
            flatsize:flatsize,
            budget:budget,
            readyOngoing:readyOngoing,
            handoverdate:handoverdate,
            forwhome:forwhome,
            purpose:purpose,
            financeBy:financeBy,
            issueby:issueby

        })
        .then((Response)=>{
            //console.log(response);
            //this.props.history.push('/');
            alert("Contacts are saved successfully");
        })
        .catch((error)=>{
            console.log(error);
        });
        //for reset
        this.setState({
			name: '',
            mobileno1: '',
            mobileno2: '',
            email: '',
            source:'',
            contactStatus:'',
            location:'',
            flatsize:'',
            budget:'',
            readyOngoing:'',
            //handoverdate:'',
            handoverdate:new Date(),
            forwhome:'',
            purpose:'',
            financeBy:'',
            issueby:''
		});

    }
    render(){
        return(
             <View style={styles.container}>
                <ScrollView>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Name of Contact'
                    placeholderTextColor='#ffffff'
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Mobile No'
                    keyboardType={'numeric'}
                    placeholderTextColor='#ffffff'
                    onChangeText={(mobileno1) => this.setState({mobileno1})}
                    value={this.state.mobileno1}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Mobile No2'
                    keyboardType={'numeric'}
                    placeholderTextColor='#ffffff'
                    onChangeText={(mobileno2) => this.setState({mobileno2})}
                    value={this.state.mobileno2}
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
                    placeholder='Source'
                    placeholderTextColor='#ffffff'
                    onChangeText={(source) => this.setState({source})}
                    value={this.state.source}
                /> */}

                <Picker
                selectedValue={this.state.source}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({source: itemValue})
                }>
                <Picker.Item label="Source of Client" value="Source of Client" />
                <Picker.Item label="LandOwner reference" value="LandOwner reference" />
                <Picker.Item label="Print Media" value="Print Media" />
                <Picker.Item label="Electronic Media" value="Electronic Media" />
                <Picker.Item label="Project Fair" value="Project Fair" />
                </Picker>

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Contact Status'
                    placeholderTextColor='#ffffff'
                    value={this.state.name}
                    onChange={this.handleChange}
                /> */}

                <Picker
                selectedValue={this.state.contactStatus}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({contactStatus: itemValue})
                }>
                <Picker.Item label="Contact Status" value="ContactStatus" />
                <Picker.Item label="New Prospect" value="New Prospect" />
                <Picker.Item label="Old Prospect" value="Old Prospect" />
                </Picker>

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Area/Location'
                    placeholderTextColor='#ffffff'
                    onChangeText={(location) => this.setState({location})}
                    value={this.state.location}
                />
                
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Flat Size'
                    placeholderTextColor='#ffffff'
                    onChangeText={(flatsize) => this.setState({flatsize})}
                    value={this.state.flatsize}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Budget'
                    placeholderTextColor='#ffffff'
                    onChangeText={(budget) => this.setState({budget})}
                    value={this.state.budget}
                />
                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Ready/Ongoing'
                    placeholderTextColor='#ffffff'
                    value={this.state.source}
                    onChangeText={this.handleChange2}
                /> */}

                <Picker
                selectedValue={this.state.readyOngoing}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({readyOngoing: itemValue})
                }>
                <Picker.Item label="Ready/Ongoing" value="Ready/Ongoing" />
                <Picker.Item label="Ready" value="Ready" />
                <Picker.Item label="Ongoing" value="Ongoing" />
                </Picker>

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Handover On Date'
                    placeholderTextColor='#ffffff'
                    onChangeText={(handoverdate) => this.setState({handoverdate})}
                    value={this.state.handoverdate}
                /> */}
            {/* <TextField
                    label='HandOver Time'
                    textColor='#ffffff'
            /> */}
            <DatePicker
                    style={{width: 300}}
                    showIcon={true}
                    date={this.state.handoverdate} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2029"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        width:30,
                        height:30,
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        borderRadius:2,
                        borderColor:'#ffffff',
                        marginLeft: 0
                        //border:'1px solid red'
                        },
                        dateInput: {
                        marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({handoverdate: date})}}
                    />

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='For Whom'
                    placeholderTextColor='#ffffff'
                    value={this.state.mobileno1}
                    onChange={this.handleChange}
                /> */}

                <Picker
                selectedValue={this.state.forwhome}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({forwhome: itemValue})
                }>
                <Picker.Item label="For Whome" value="forwhome" />
                <Picker.Item label="Own" value="Own" />
                <Picker.Item label="Others" value="Other" />
                </Picker>

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Purpose'
                    placeholderTextColor='#ffffff'
                    value={this.state.mobileno2}
                    onChange={this.handleChange}
                /> */}

                <Picker
                selectedValue={this.state.purpose}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({purpose: itemValue})
                }>
                <Picker.Item label="Purpose" value="Purpose" />
                <Picker.Item label="Own Use" value="Own" />
                <Picker.Item label="Rent" value="Rent" />
                </Picker>

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Finance By'
                    placeholderTextColor='#ffffff'
                    value={this.state.email}
                    onChange={this.handleChange}
                /> */}
                <Picker
                selectedValue={this.state.financeBy}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({financeBy: itemValue})
                }>
                <Picker.Item label="Finance By" value="FinanceBy" />
                <Picker.Item label="Own" value="Own" />
                <Picker.Item label="Own & Bank" value="Own & Bank" />
                </Picker>
                {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Project')}><Text style={styles.buttontext}>Create contact</Text></TouchableOpacity> */}
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}><Text style={styles.buttontext}>Submit Contact</Text></TouchableOpacity>
                </ScrollView>
            </View>
            

        )
    }

    componentWillUnmount() {
        alert("Component are unmounted");
        //this.setState({name:''})
        // this.state = {          
        //     name: '',
        //     mobileno1: '',
        //     mobileno2: '',
        //     email: '',
        //     source:'',
        //     contactStatus:'',
        //     location:'',
        //     flatsize:'',
        //     budget:'',
        //     readyOngoing:'',
        //     handoverdate:'',
        //     forwhome:'',
        //     purpose:'',
        //     financeBy:'',
        //     issueby:''
        // }
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