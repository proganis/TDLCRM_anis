import React, {Component} from 'react';
import {Alert,StyleSheet, ScrollView,Text, Picker,View,StatusBr,TextInput,TouchableOpacity,CheckBox} from 'react-native';
import DatePicker from 'react-native-datepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import { TextField } from 'react-native-material-textfield';
//import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
//import {Actions} from 'react-native-router-flux';

export default class OfferInfo extends Component{
    constructor(props) { 
        super(props);
        this.state = {          
            ContactId: '',
            ProjectId: '',
            ProjectAddress: '',
            UnitId: '',
            Direction: '',
            FloorNo: '',
            FloorArea: '',
            HandOverTime: new Date(),
            RatePerSft: '',
            UnitCost: '',
            ParkingCost: '',
            TotalCost: '',
            BookingMoney: '',
            BookingDate: new Date(),
            DownPayment: '',
            DownPaymentDate: new Date(),
            InstallpaymentType: '',
            NoOfInstallpayment: '',
            AmountPerInstallment: '',
            Additioncost: '',
            ReserveFund: '',
            UtilityConnectionCost: '',
            RegistrationCost: '',
            OthersCost: '',
            contactsdata:[],
            radiodata: [
                {
                    label: 'Monthly',
                    value:'Monthly',
                },
                {
                    label: 'By Monthly',
                    value: "By Monthly",
                },
                {
                    label: 'Quarterly',
                    value: "Quarterly",
                }
            ]
        }
    }

    componentDidMount = () => {
        this.getcontactList();
        }
        getcontactList() {
        axios.get('https://myybackend.herokuapp.com/contacts/')
        .then((response) => {
        this.setState({
        contactsdata: response.data
        });
        })
        .catch((error) => {
            alert("loading error")
        })
      }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }

    TotalUnitCost=(event)=>{
        var unitCostValue=parseFloat(this.state.RatePerSft)*parseFloat(this.state.FloorArea);
        unitCostValue=unitCostValue.toString();
        this.setState({UnitCost: unitCostValue})
    }

    GetTotalCost=(event)=>{
        var totalCostValue=parseFloat(this.state.UnitCost)+parseFloat(this.state.ParkingCost);
        var bookingMoneyValue=(totalCostValue*10)/100;
        bookingMoneyValue=bookingMoneyValue.toString();
        var downpaymentValue=(totalCostValue*15)/100;
        downpaymentValue=downpaymentValue.toString();
        totalCostValue=totalCostValue.toString();
        this.setState({TotalCost: totalCostValue})
        this.setState({BookingMoney:bookingMoneyValue})
        this.setState({DownPayment:downpaymentValue})
    }

    GetAmountPerInstallment=(event)=>{
        var totalAmount=parseFloat(this.state.TotalCost)-parseFloat(this.state.BookingMoney)-parseFloat(this.state.DownPayment);
        var totalinstallment=parseFloat(this.state.NoOfInstallpayment);
        var amounntPerInstallmentResult=parseFloat(totalAmount)/parseFloat(totalinstallment);
        amounntPerInstallmentResult=amounntPerInstallmentResult.toString();
        this.setState({AmountPerInstallment:amounntPerInstallmentResult})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        const{ContactId,ProjectId,ProjectAddress,UnitId,Direction,FloorNo,FloorArea,HandOverTime,RatePerSft,UnitCost,ParkingCost,TotalCost,BookingMoney,BookingDate,DownPayment,DownPaymentDate,InstallpaymentType,NoOfInstallpayment,AmountPerInstallment,Additioncost,ReserveFund,UtilityConnectionCost,RegistrationCost,OthersCost}=this.state;
        axios.post('https://myybackend.herokuapp.com/OfferInfos/',{
            ContactId: ContactId,
            ProjectId: ProjectId,
            ProjectAddress: ProjectAddress,
            UnitId: UnitId,
            Direction: Direction,
            FloorNo: FloorNo,
            FloorArea: FloorArea,
            HandOverTime: HandOverTime,
            RatePerSft: RatePerSft,
            UnitCost: UnitCost,
            ParkingCost: ParkingCost,
            TotalCost: TotalCost,
            BookingMoney: BookingMoney,
            BookingDate: BookingDate,
            DownPayment: DownPayment,
            DownPaymentDate: DownPaymentDate,
            InstallpaymentType: InstallpaymentType,
            NoOfInstallpayment: NoOfInstallpayment,
            AmountPerInstallment: AmountPerInstallment,
            Additioncost: Additioncost,
            ReserveFund: ReserveFund,
            UtilityConnectionCost: UtilityConnectionCost,
            RegistrationCost: RegistrationCost,
            OthersCost: OthersCost,

        })
        .then((Response)=>{
            //this.props.history.push('/');
            alert("OfferInfos are saved successfully");
        })
        .catch((error)=>{
            console.log(error);
        });
        //for reset
        this.setState({
			ContactId: '',
            ProjectId: '',
            ProjectAddress: '',
            UnitId: '',
            Direction: '',
            FloorNo: '',
            FloorArea: '',
            HandOverTime: new Date(),
            RatePerSft: '',
            UnitCost: '',
            ParkingCost: '',
            TotalCost: '',
            BookingMoney: '',
            BookingDate: new Date(),
            DownPayment: '',
            DownPaymentDate: new Date(),
            InstallpaymentType: '',
            NoOfInstallpayment: '',
            AmountPerInstallment: '',
            Additioncost: '',
            ReserveFund: '',
            UtilityConnectionCost: '',
            RegistrationCost: '',
            OthersCost: ''
		});

    }

    onPress = data => this.setState({data});

    render(){

        //let selectedButton = this.state.radiodata.find(e => e.selected == true);
        //selectedButton = selectedButton ? selectedButton.value : this.state.radiodata[0].label;
        //this.setState({InstallpaymentType:selectedButton});
        return(
             <View style={styles.container}>
                <ScrollView>
          

                <Picker style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                    selectedValue={this.state.ContactId}
                    onValueChange={(itemValue, itemIndex) => this.setState({ContactId: itemValue})}>
                    <Picker.Item label="Please select a Contact" value="0" />
                    {this.state.contactsdata.map((item, key)=>(
                            <Picker.Item label={item.name} value={item.name} key={key} />)
                            )}
                </Picker>


                <Picker
                selectedValue={this.state.ProjectId}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ProjectId: itemValue})
                }>
                <Picker.Item label="Please select a project" value="0" />
                <Picker.Item label="Bashundhara Project" value="Bashundhara Project" />
                <Picker.Item label="Banani Project" value="Banani Project" />
                <Picker.Item label="Mohammadpur Project" value="Mohammadpur Project" />
                </Picker>

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Project Address'
                    placeholderTextColor='#ffffff'
                    onChangeText={(ProjectAddress) => this.setState({ProjectAddress})}
                    value={this.state.ProjectAddress}
                />             

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Unit Id'
                    placeholderTextColor='#ffffff'
                    onChangeText={(UnitId) => this.setState({UnitId})}
                    value={this.state.UnitId}
                />                  

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Direction'
                    placeholderTextColor='#ffffff'
                    onChangeText={(Direction) => this.setState({Direction})}
                    value={this.state.Direction}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Floor No'
                    placeholderTextColor='#ffffff'
                    onChangeText={(FloorNo) => this.setState({FloorNo})}
                    value={this.state.FloorNo}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Floor Area'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(FloorArea) => this.setState({FloorArea})}
                    value={this.state.FloorArea}
                /> */}

                <TextField
                        label='Project Address'
                        textColor='#ffffff'
                        value={this.state.ProjectAddress}
                        onChangeText={ (ProjectAddress) => this.setState({ ProjectAddress }) }
                />

                <TextField
                        label='Unit Id'
                        textColor='#ffffff'
                        value={this.state.UnitId}
                        onChangeText={ (UnitId) => this.setState({ UnitId }) }
                />

                <TextField
                        label='Direction'
                        textColor='#ffffff'
                        value={this.state.Direction}
                        onChangeText={ (Direction) => this.setState({ Direction }) }
                />

                <TextField
                        label='Floor No'
                        textColor='#ffffff'
                        value={this.state.FloorNo}
                        onChangeText={ (FloorNo) => this.setState({ FloorNo }) }
                />      

                <TextField
                        label='Floor Area'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.FloorArea}
                        onChangeText={ (FloorArea) => this.setState({ FloorArea }) }
                />                

                {/* Date picker hobe  */}
                
                <TextField
                        label='HandOver Time'
                        textColor='#ffffff'
                />

                <DatePicker
                    style={{width: 300}}
                    date={this.state.HandOverTime} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2029"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                        },
                        dateInput: {
                        marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({HandOverTime: date})}}
                    />

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Rate Per Sft'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}                    
                    onBlur={e => this.TotalUnitCost()}
                    onChangeText={(RatePerSft) => this.setState({RatePerSft})}
                    value={this.state.RatePerSft}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Unit Cost'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(UnitCost) => this.setState({UnitCost})}
                    value={this.state.UnitCost}
                />
                
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Parking Cost'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onEndEditing={e => this.GetTotalCost()}
                    onChangeText={(ParkingCost) => this.setState({ParkingCost})}
                    value={this.state.ParkingCost}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Total Cost'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(TotalCost) => this.setState({TotalCost})}
                    value={this.state.TotalCost}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='BookingMoney'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(BookingMoney) => this.setState({BookingMoney})}
                    value={this.state.BookingMoney}
                /> */}

                <TextField
                        label='Rate Per Sft'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.RatePerSft}
                        onChangeText={ (RatePerSft) => this.setState({ RatePerSft }) }
                        onBlur={e => this.TotalUnitCost()}
                />

                <TextField
                        label='Unit Cost'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.UnitCost}
                        onChangeText={ (UnitCost) => this.setState({ UnitCost }) }
                />

                <TextField
                        label='Parking Cost'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.ParkingCost}
                        onEndEditing={e => this.GetTotalCost()}
                        onChangeText={ (ParkingCost) => this.setState({ ParkingCost }) }
                />

                <TextField
                        label='Total Cost'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.TotalCost}
                        onChangeText={ (TotalCost) => this.setState({ TotalCost }) }
                />      

                <TextField
                        label='Booking Money'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.BookingMoney}
                        onChangeText={ (BookingMoney) => this.setState({ BookingMoney }) }
                />                

                <TextField
                        label='Booking Date'
                        textColor='#ffffff'
                />
                <DatePicker
                    style={{width: 300}}
                    date={this.state.BookingDate} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2029"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                        },
                        dateInput: {
                        marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({BookingDate: date})}}
                    />

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Down Payment'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(DownPayment) => this.setState({DownPayment})}
                    value={this.state.DownPayment}
                /> */}

                <TextField
                        label='Down Payment'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.DownPayment}
                        onChangeText={ (DownPayment) => this.setState({ DownPayment }) }
                />     

                <TextField
                        label='DownPayment Date'
                        textColor='#ffffff'
                />
                <DatePicker
                    style={{width: 300}}
                    date={this.state.DownPaymentDate} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2029"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                        },
                        dateInput: {
                        marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({DownPaymentDate: date})}}
                    />               
                <Picker
                selectedValue={this.state.InstallpaymentType}
                style={{height: 50, width: 280,borderRadius:5,paddingHorizontal:16,fontSize:16,color:'#ffffff',marginVertical:10}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({InstallpaymentType: itemValue})
                }>
                <Picker.Item label="Please select a payment type" value="0" />
                <Picker.Item label="Monthly" value="Monthly" />
                <Picker.Item label="By Monthly" value="By Monthly" />
                <Picker.Item label="Quarterly" value="Quarterly" />
                </Picker>

                <TextField
                        label='No Of Installpayment'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.NoOfInstallpayment}
                        onChangeText={ (NoOfInstallpayment) => this.setState({ NoOfInstallpayment }) }
                        onEndEditing={e => this.GetAmountPerInstallment()}
                />

                <TextField
                        label='Amount Per Installment'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.AmountPerInstallment}
                        onChangeText={ (AmountPerInstallment) => this.setState({ AmountPerInstallment }) }
                />

                <TextField
                        label='Additional Cost'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.Additioncost}
                        onChangeText={ (Additioncost) => this.setState({ Additioncost }) }
                /> 

                <TextField
                        label='Reserve Fund'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.ReserveFund}
                        onChangeText={ (ReserveFund) => this.setState({ ReserveFund }) }
                />

                <TextField
                        label='Utility Connection Cost'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.UtilityConnectionCost}
                        onChangeText={ (UtilityConnectionCost) => this.setState({ UtilityConnectionCost }) }
                />

                <TextField
                        label='Registration Cost'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.RegistrationCost}
                        onChangeText={ (RegistrationCost) => this.setState({ RegistrationCost }) }
                />

                <TextField
                        label='Other Cost'
                        textColor='#ffffff'
                        keyboardType={'numeric'}
                        value={this.state.OthersCost}
                        onChangeText={ (OthersCost) => this.setState({ OthersCost }) }
                />      

                {/* <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='No Of Installment'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(NoOfInstallpayment) => this.setState({NoOfInstallpayment})}
                    value={this.state.NoOfInstallpayment}
                />



                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Amount Per Installment'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(AmountPerInstallment) => this.setState({AmountPerInstallment})}
                    value={this.state.AmountPerInstallment}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Addition Cost'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(Additioncost) => this.setState({Additioncost})}
                    value={this.state.Additioncost}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Reserve Fund'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(ReserveFund) => this.setState({ReserveFund})}
                    value={this.state.ReserveFund}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Utility Connection Cost'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(UtilityConnectionCost) => this.setState({UtilityConnectionCost})}
                    value={this.state.UtilityConnectionCost}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Registration Cost'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(RegistrationCost) => this.setState({RegistrationCost})}
                    value={this.state.RegistrationCost}
                />

                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Others Cost'
                    placeholderTextColor='#ffffff'
                    keyboardType={'numeric'}
                    onChangeText={(OthersCost) => this.setState({OthersCost})}
                    value={this.state.OthersCost}
                /> */}

                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}><Text style={styles.buttontext}>Submit</Text></TouchableOpacity>
                </ScrollView>
            </View>
            

        )
    }

    componentWillUnmount() {
        alert("Component are unmounted");
        //this.setState({name:''})
        // this.state = {          
        //     name: '',
        //     UnitId: '',
        //     Direction: '',
        //     FloorNo: '',
        //     source:'',
        //     OfferInfoStatus:'',
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