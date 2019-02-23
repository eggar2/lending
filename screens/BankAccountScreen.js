import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Picker,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';
import typo from '../constants/Typography';
import StepIndicator from 'react-native-step-indicator';
import RNPickerSelect from 'react-native-picker-select';
import { TextField } from 'react-native-material-textfield';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const labels = ["1","2","3"];
const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize:20,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0085FE',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0085FE',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0085FE',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0085FE',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#0085FE',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
}

export default class BankAccountScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        
        headerStyle: {
            shadowOpacity: 0
        },
        headerLeft: (
            <TouchableHighlight
                onPress={() => { navigation.navigate('ProfileInfo'); }}
                underlayColor={colors.gray01}
                style={{marginLeft: 10, paddingHorizontal: 10}} >
                <Icon
                    name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}
                    size={26} />
            </TouchableHighlight>
            
        ),

    });

    state = {
        paydate: '',
        imageProof: '',
        currentPosition: 2,
        
        data: [
            {label: 'Bank Transfer     ', value: 'bank-transfer', color: '#0085FE'},
            {label: 'Cash Pickup', value: 'cash-pickup', color: '#0085FE'}          
        ],
        institution: [
            { label: 'Cebuana Lhuillier', value: 'cebuana' }
        ],
        acceptTerms: [
            { label: 'I Agree to the Loan Agreement', value: 'agreenment' }
        ],
        bankName: [
            { label: 'BPI', value: 'bpi' },
            { label: 'BPI Family Savings', value: 'family-savings' },
            { label: 'Banco de Oro', value: 'bdo' },
            { label: 'BDO Cash Card', value: 'cash-card' },
            { label: 'Landbank', value: 'landbank' },
            { label: 'GCASH', value: 'gcash' },
            { label: 'Unionbank', value: 'unionbank' }
        ],
        selectedAccountType: 'bank-transfer',
        selectedInstitution: '',
        selectedBank: '',
        selectedAgree: '',
        pickupText: 'For Cash Pickup option, third-party charges Php100 processing fee. This will be added to your total amount payable.',
        bankText: 'For GCASH, Unionbank and BPI Family Savings holders, please expect a delay of disbursement during weekends'
    };


    onPageChange(position){
        this.setState({currentPosition: position});
    }

    institutionChange = (value, index) => {
        this.setState({ selectedInstitution: value });
    }

    bankChange = (value, index) => {
        this.setState({ selectedBank: value });
    }

    onPress = data => this.setState({ data });

    render() {

        const dimensions = Dimensions.get('window');

        let accountForm;

        if(this.state.selectedAccountType == 'cash-pickup') {
            accountForm = 
            <View style={{ marginTop: 15 }}>
                <Text style={styles.noteText}>{this.state.pickupText}</Text>
                <View>
                    <RNPickerSelect
                        placeholder={{ label:'Institution Name', value: null, color: '#777'}}
                        useNativeAndroidPickerStyle={false}
                        items={this.state.institution}
                        onValueChange={this.institutionChange}
                        style={pickerSelectStyles}
                        value={this.state.selectedInstitution}
                        />
                    <Icon
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 10
                        }}
                        name={Platform.OS === 'ios' ? 'ios-arrow-dropdown' : 'md-arrow-dropdown'}
                        size={26} />
                </View>
                <TextField
                    label='Name'
                    value={this.state.contactName1}
                    tintColor={colors.green01}
                    containerStyle={{marginVertical: 0}}
                    onChangeText={this.handleIdNumberChange}
                    error={this.state.isError}
                    labelTextStyle={{ paddingLeft: 10 }}
                    inputContainerStyle={{paddingLeft: 10}}
                />
                <TextField
                    label='Email'
                    value={this.state.contactName1}
                    tintColor={colors.green01}
                    containerStyle={{marginVertical: 0}}
                    onChangeText={this.handleIdNumberChange}
                    error={this.state.isError}
                    labelTextStyle={{ paddingLeft: 10 }}
                    inputContainerStyle={{paddingLeft: 10}}
                />
            </View>
        } else {
            accountForm = 
            <View style={{ marginTop: 15 }}>
                <Text style={styles.noteText}>Bank Account Should Belong To You</Text>
                <View>
                    <RNPickerSelect
                        placeholder={{ label:'Bank Name', value: null, color: '#777'}}
                        useNativeAndroidPickerStyle={false}
                        items={this.state.bankName}
                        onValueChange={this.bankChange}
                        style={pickerSelectStyles}
                        value={this.state.selectedBank}
                        />
                    <Icon
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 10
                        }}
                        name={Platform.OS === 'ios' ? 'ios-arrow-dropdown' : 'md-arrow-dropdown'}
                        size={26} />
                </View>
                <TextField
                    label='Account Number'
                    value={this.state.contactName1}
                    tintColor={colors.green01}
                    containerStyle={{marginVertical: 0}}
                    onChangeText={this.handleIdNumberChange}
                    error={this.state.isError}
                    labelTextStyle={{ paddingLeft: 10 }}
                    inputContainerStyle={{paddingLeft: 10}}
                />
                <Text style={styles.noteText}>NOT Bank Card Number</Text>
                <TextField
                    label='Re-Enter Account Number'
                    value={this.state.contactName1}
                    tintColor={colors.green01}
                    containerStyle={{marginVertical: 0}}
                    onChangeText={this.handleIdNumberChange}
                    error={this.state.isError}
                    labelTextStyle={{ paddingLeft: 10 }}
                    inputContainerStyle={{paddingLeft: 10}}
                />
                <Text style={styles.noteText}>{this.state.bankText}</Text>
            </View>
        }
        return (
            <ScrollView style={styles.container}>
                <View style={{ marginBottom: 50 }}>
                    <Text style={typo.textNormalLarger}>Apply</Text>
                    <View style={{ marginVertical: 20 }}>
                        <StepIndicator
                            stepCount = {3}
                            customStyles={customStyles}
                            currentPosition={this.state.currentPosition}
                        />
                    </View>
                    <View>
                        <RadioForm
                            radio_props={this.state.data}
                            initial={0}
                            onPress={(value) => {this.setState({selectedAccountType:value})}}
                            formHorizontal={true}
                            buttonWrapStyle={{
                                paddingRight: 15
                            }}
                        />
                    </View>

                    {accountForm}  

                    <View style={{ marginTop: 20 }}>
                        <RadioForm
                            radio_props={this.state.acceptTerms}
                            initial={-1}
                            onPress={(value) => {this.setState({selectedAgree:value})}}
                            formHorizontal={true}
                            buttonWrapStyle={{
                                paddingRight: 15
                            }}
                        />
                    </View>                                       

                    <View style={styles.buttonContainer2}>
                        <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress={this.confirm}  >

                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputWrapper: {
        marginBottom: 20
    },
    payDateWrapper: {
        marginHorizontal: 0,
        marginTop: 0,
        borderBottomColor: colors.gray06,
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    typePickerWrapper: {
        borderWidth: 1,
        borderColor: colors.gray06,
        marginLeft: 5
    },
    typePicker: {
        paddingTop: 0,
        height: 30
    },
    buttonContainer2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    buttonStyle2: {
        backgroundColor: '#1B9AF7',
        alignItems: 'center',
        width: 150,
	    padding: 15,
        borderRadius: 50,
        ...Platform.select({
            ios: {
              shadowColor: '#666',
              shadowOffset: { height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
            },
            android: {
              elevation: 2,
            },
          })
    },
    buttonText: {
	    color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageUploadPreview: {
        marginBottom: 20
    },
    dropdownContainer: {
        marginTop: 15
    },
    contactText: {
        fontSize: 17,
        fontWeight: '600',
        color: colors.black,
    },
    noteText: { 
        color: '#FAB351',
        lineHeight: 20,
        fontWeight: '500' 
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 17,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        color: 'black',
        paddingRight: 30,
        marginTop: 10
    },
    inputAndroid: {
        fontSize: 17,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
        color: 'black',
        paddingRight: 30,
        marginTop: 10
    },
});