import { StyleSheet, View } from 'react-native';
import { Row, Rows } from 'react-native-table-component';
import React, { Component } from 'react';
import axios from 'axios';
import { Table} from 'react-bootstrap';
 
 var divStyle = {
 margin: '8% 8%',
 };

 
export default class Home extends Component {
  constructor(props) {
    super(props);
    //this.employeeService = new EmployeeService();
    this.state = {
    contactsdata: []
  }
  }
 
  componentDidMount = () => {
    this.getcontactList();
    }
    
    // To get all the employees
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
  render() {
    const state = this.state;
    return (
      <div style={divStyle}>
        <Table responsive>
        <thead>
        <tr>
        <th>#</th>
        <th>Name</th>
        <th>Mobile No</th>
        <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {
        contactsdata && contactsdata.map((contact, i) => {
        return (
        <tr key={i}>
        <td>{i}</td>
        <td>{contact.name}</td>
        <td>{contact.mobileno1}</td>
        <td>{contact.email}</td>
        </tr>
        )
        })
        }
        </tbody>
        </Table>
    </div>
 );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});