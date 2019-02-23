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
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import colors from '../assets/colors';
import columns from '../assets/layout/Columns.style';
import typo from '../constants/Typography';
import { ImagePicker } from 'expo';
import AutoHeightImage from 'react-native-auto-height-image';
import StepIndicator from 'react-native-step-indicator';
import RNPickerSelect from 'react-native-picker-select';
import { TextField } from 'react-native-material-textfield';
import DatePicker from 'react-native-datepicker';

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

export default class WorkInfoScreen extends React.Component {

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
        currentPosition: 1,
        employment : [
            {label: 'Employed-BPO', value: 'employed-bpo'},
            {label: 'Employed-Goverment', value: 'government'},
            {label: 'Employed-Private', value: 'private'},
            {label: 'Employed-OFW', value: 'ofw'},
            {label: 'Professional', value: 'professional'},
            {label: 'Self-Employed', value: 'self-employed'},
            {label: 'Unemployed', value: 'unemployed'}
        ],
        companyNature: [
            {label: 'Business Process Outsourcing', value: 'bpo'},
            {label: 'IT Services', value: 'it-services'},
            {label: 'Law Firm', value: 'law-firm'}
        ],
        occupation: [
            {label: 'Staff', value: 'staff'},
            {label: 'Supervisor or Manager', value: 'supervisor-manager'},
            {label: 'Executive or Director', value: 'executive-director'},
            {label: 'Others', value: 'others'}
        ],
        salary: [
            {label: '0-5k', value: '0-5k'},
            {label: '5k-10k', value: '5k-10k'},
            {label: '10k-15k', value: '10k-15k'},
            {label: '15k-20k', value: '15k-20k'},
            {label: '20k-25k', value: '20k-25k'},
            {label: '25k-30k', value: '25k-30k'},
            {label: '30k-35k', value: '30k-35k'}
        ],
        salaryType: [
            {label: 'Bi-Monthly (5th and 20th)', value: '5th-20th'},
            {label: 'Bi-Monthly (10th and 25th)', value: '10th-25th'},
            {label: 'Bi-Monthly (15th and 30th)', value: '15th-30th'},
            {label: 'Weekly (Weekday)', value: 'weekday'},
            {label: 'Weekly (Friday)', value: 'friday'},
            {label: 'Weekly (Weekend)', value: 'weekend'},
            {label: 'Monthly (15th)', value: 'monthly'}            
        ],
        selectedEmployment: '',
        selectedCompanyNature: '',
        selectedOccupation: '',
        selectedSalary: '',
        selectedSalaryType: '',
        companyName: '',
        employmentDate: '',
        businessAddress: '',
    };

    employmentChange = (value, index) => {
        this.setState({ selectedEmployment: value, });
    }

    companyNatureChange = (value, index) => {
        this.setState({ selectedCompanyNature: value, });
    }

    occupationChange = (value, index) => {
        this.setState({ selectedOccupation: value, });
    }

    salaryChange = (value, index) => {
        this.setState({ selectedSalary: value, });
    }
    salaryTypeChange = (value, index) => {
        this.setState({ selectedSalaryType: value, });
    }

    handleimageProofOfEmployment = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            const imagePosId = result.uri;
            this.setState({ imagePosId });
        }
    }

    onPageChange(position){
        this.setState({currentPosition: position});
    }

    render() {

        const dimensions = Dimensions.get('window');

        return (
            <ScrollView style={styles.container}>
                <View style={{ marginBottom: 50 }}>
                    <Text style={typo.textNormalLarger}>Apply</Text>
                    <View style={{ marginVertical: 20, }}>
                        <StepIndicator
                            stepCount = {3}
                            customStyles={customStyles}
                            currentPosition={this.state.currentPosition}
                        />
                    </View>
                    
                    <Text style={styles.contactText}>Work Information</Text>

                    <View style={styles.dropdownContainer}>
                        <RNPickerSelect
                            placeholder={{label: 'Employment Type', value: null, color: '#777'}}
                            useNativeAndroidPickerStyle={false}
                            items={this.state.employment}
                            onValueChange={this.employmentChange}
                            style={pickerSelectStyles}
                            value={this.state.selectedEmployment}
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
                    <View style={styles.dropdownContainer}>
                        <RNPickerSelect
                            placeholder={{label: 'Job Industry', value: null, color: '#777'}}
                            useNativeAndroidPickerStyle={false}
                            items={this.state.companyNature}
                            onValueChange={this.companyNatureChange}
                            style={pickerSelectStyles}
                            value={this.state.selectedCompanyNature}
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
                    <View style={styles.dropdownContainer}>
                        <RNPickerSelect
                            placeholder={{label: 'Occupancy', value: null, color: '#777'}}
                            useNativeAndroidPickerStyle={false}
                            items={this.state.occupation}
                            onValueChange={this.occupationChange}
                            style={pickerSelectStyles}
                            value={this.state.selectedOccupation}
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
                    <View>
                        <TextField
                            label='Company/Employer Name'
                            value={this.state.companyName}
                            tintColor={colors.green01}
                            containerStyle={{marginVertical: 0}}
                            onChangeText={ (value)=> {
                                this.setState({ companyName: value })
                            }}
                            error={this.state.isError}
                            labelTextStyle={{ paddingLeft: 10 }}
                            inputContainerStyle={{paddingLeft: 10}}
                        />
                    </View>
                    <View>
                        <DatePicker
                            style={{ width: '100%' }}
                            date={this.state.employmentDate}
                            mode="date"
                            placeholder="Employment Date"
                            format="MMM YYYY"
                            minDate="1950-01-01"
                            maxDate="2018-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: 15,
                                    top: 10,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    paddingHorizontal: 12,
                                    marginTop: 30,
                                    borderWidth : 0,
                                    borderBottomWidth: 1,
                                    borderBottomColor: colors.gray06,
                                    alignItems: 'flex-start'
                                },
                                dateText: {
                                    fontSize: 16, 
                                    fontWeight: '400', 
                                    paddingBottom: 10
                                },
                                placeholderText: {
                                    fontSize: 16,
                                    fontWeight: '400',
                                    paddingBottom: 10
                                }
                            }}
                            onDateChange={(date) => { this.setState({ employmentDate: date }) }}
                        />
                    </View>
                    <View style={{marginTop: 30}}>
                        <RNPickerSelect
                            placeholder={{label: 'Monthly Income (PHP)', value: null, color: '#777'}}
                            useNativeAndroidPickerStyle={false}
                            items={this.state.salary}
                            onValueChange={this.salaryChange}
                            style={pickerSelectStyles}
                            value={this.state.selectedSalary}
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
                    <View style={styles.dropdownContainer}>
                        <RNPickerSelect
                            placeholder={{label: 'Salary Date', value: null, color: '#777'}}
                            useNativeAndroidPickerStyle={false}
                            items={this.state.salaryType}
                            onValueChange={this.salaryTypeChange}
                            style={pickerSelectStyles}
                            value={this.state.selectedSalaryType}
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
                    <View>
                        <Text style={{
                            position: 'absolute',
                            left: 0,
                            top: 35,
                            fontSize: 17,
                            paddingLeft: 12
                        }}>
                            +63
                        </Text>
                        <TextField
                            label='Cellphone Number'
                            value={this.state.contactTel1}
                            tintColor={colors.green01}
                            onChangeText={this.handleIdNumberChange}
                            error={this.state.isError}
                            labelTextStyle={{ paddingLeft: 52 }}
                            inputContainerStyle={{paddingLeft: 52}}
                        /> 
                    </View>
                    <View>
                        <TextField
                            label='Business Address'
                            value={this.state.companyName}
                            tintColor={colors.green01}
                            containerStyle={{marginVertical: 0}}
                            onChangeText={ (value)=> {
                                this.setState({ businessAddress: value })
                            }}
                            error={this.state.isError}
                            labelTextStyle={{ paddingLeft: 10 }}
                            inputContainerStyle={{paddingLeft: 10}}
                        />
                    </View>

                    <View style={styles.buttonContainer2}>
                        <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress={{}}  >
                            <Text style={styles.buttonText}>Next</Text>
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
    },
    inputAndroid: {
        fontSize: 17,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
        color: 'black',
        paddingRight: 30,
    },
});