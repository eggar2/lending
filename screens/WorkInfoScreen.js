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
        title: 'Work Information',
        headerLayoutPreset: 'center',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center'
        },
        headerRight: (
            <Text>{''}</Text>
        ),
    });

    state = {
        paydate: '',
        imageProof: '',
        currentPosition: 1,
        employment : [
            {label: 'Employed-Private', value: 'private'},
            {label: 'Employed-Goverment', value: 'government'},
            {label: 'Self-Employed', value: 'self-employed'}
        ],
        companyNature: [
            {label: 'Business Process Outsourcing', value: 'bpo'},
            {label: 'IT Services', value: 'it-services'},
            {label: 'Law Firm', value: 'law-firm'}
        ],
        occupation: [
            {label: 'Staff', value: 'staff'},
            {label: 'Manager', value: 'Manager'},
            {label: 'Owner', value: 'owner'}
        ],
        salary: [
            {label: '0-5k', value: '0-5k'},
            {label: '6k-10k', value: '6k-10k'},
            {label: '11k-20k', value: '11k-20k'},
            {label: '20k+', value: '20k+'}
        ],
        selectedEmployment: '',
        selectedCompanyNature: '',
        selectedOccupation: '',
        selectedSalary: '',
        jobTitle: '',
    };

    employmentChange = (value, index) => {
        this.setState({ seletedEmployment: value, });
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
                        placeholder={{label: 'Employment', value: null, color: '#777'}}
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
                        placeholder={{label: 'Company Nature', value: null, color: '#777'}}
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
                        placeholder={{label: 'Occupation', value: null, color: '#777'}}
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
                        label='Job Title'
                        value={this.state.jobTitle}
                        tintColor={colors.green01}
                        containerStyle={{marginVertical: 0}}
                        onChangeText={ (value)=> {
                            this.setState({ jobTitle: value })
                        }}
                        error={this.state.isError}
                        labelTextStyle={{ paddingLeft: 10 }}
                        inputContainerStyle={{paddingLeft: 10}}
                    />
                </View>
                <View style={styles.dropdownContainer}>
                    <RNPickerSelect
                        placeholder={{label: 'Salary', value: null, color: '#777'}}
                        useNativeAndroidPickerStyle={false}
                        items={this.state.salary}
                        onValueChange={this.salaryChange}
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
                <View style={styles.buttonContainer2}>
                    <TouchableOpacity
                        style={styles.buttonStyle2}
                        onPress={{}}  >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
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