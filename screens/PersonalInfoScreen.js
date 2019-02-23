import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Platform,
    Picker,
    TouchableOpacity
} from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors';
import typo from '../constants/Typography';
import { TextField } from 'react-native-material-textfield';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';

export default class PersonalInfoScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        // title: 'Personal Information',
        headerStyle: {
            shadowOpacity: 0
        },
        headerLeft: (
            <TouchableOpacity
                onPress={() => { navigation.navigate('ProfileInfo'); }}
                underlayColor={colors.gray01}
                style={{marginLeft: 10, paddingHorizontal: 10}} >
                <Icon
                    name={'md-arrow-back'}
                    size={26} />
            </TouchableOpacity>
        ),

    });

    state = {
        fname: '',
        isFnameError: '',
        mname: '',
        isMnameError: '',
        lname: '',
        isLnameError: '',
        email: '',
        isEmailError: '',
        bday: 'Jan 01 1950',
        gender: 'male',
        genderOption: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
        ],
        maritalStatus: 'single',
        maritalStatusOption: [
            { label: 'Single', value: 'single' },
            { label: 'Married', value: 'married' },
            { label: 'Divorced', value: 'divorced' },
            { label: 'Widowed', value: 'widowed' },
            { label: 'Others', value: 'others' },
        ],
        dependentsCount: 0,
        dependentsCountOption: [
            { label: '0', value: 0 },
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 },
            { label: '5', value: 5 },
            { label: '6', value: 6 },
        ],
        education: 'bachelor',
        educationOption: [
            { label: 'Bachelor', value: 'bachelor' },
            { label: 'Vocational', value: 'vocational' },
            { label: 'Senior high school', value: 'senior-high-school' },
            { label: 'Junior high school', value: 'junior-high-school' },
            { label: 'Master', value: 'master' },
            { label: 'Elementary', value: 'elementary' },
            { label: 'Not Educated', value: 'not-educated' },
        ],
    }

    handleFnameChange = (fname) => {
        this.setState({ fname: fname, isFnameError: '' });
    }
    handleMnameChange = (mname) => {
        this.setState({ mname: mname, isMnameError: '' });
    }
    handleLnameChange = (lname) => {
        this.setState({ lname: lname, isLnameError: '' });
    }
    handleEmailChange = (email) => {
        this.setState({ email: email, isEmailError: '' });
    }
    handleDateChange = (bday) => {
        this.setState({ bday: bday });
    }
    handleGenderChange = (gender, index) => {
        this.setState({ gender });
    }
    handleMaritalStatusChange = (maritalStatus, index) => {
        this.setState({ maritalStatus });
    }
    handledependentsCountChange = (dependentsCount, index) => {
        this.setState({ dependentsCount });
    }
    handleEducationChange = (education, index) => {
        this.setState({ education });
    }

    handleSubmit = () => {
        const isRequiredTxt = 'The field is required';
        if (this.state.fname == '') {
            this.setState({ isFnameError: isRequiredTxt });
            return false;
        }
        if (this.state.mname == '') {
            this.setState({ isMnameError: isRequiredTxt });
            return false;
        }
        if (this.state.lname == '') {
            this.setState({ isLnameError: isRequiredTxt });
            return false;
        }
        if (this.state.email == '') {
            this.setState({ isEmailError: isRequiredTxt });
            return false;
        }
        
        console.log('proceed to next screen');
        // this.props.navigation.navigate('IdStep2');
    }

    getCaretIcon = () => {
        return(
            <FAIcon
                name='chevron-down'
                type='font-awesome'
                color={colors.gray04}
                size={18}
            />
        );
    }

    getPickerPlaceholder = (placeholder) => {
        return { label: placeholder, color: colors.blueGreen };
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <Text style={typo.textNormalLarger}>Apply</Text>
                <Text style={typo.headerTitleBold}>Personal Information</Text>

                <View style={styles.inputWrapper}>
                    <TextField
                        label='First Name (Same as in your ID)'
                        value={this.state.fname}
                        tintColor={colors.green01}
                        error={this.state.isFnameError}
                        onChangeText={this.handleFnameChange}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextField
                        label='Middle Name (Same as in your ID)'
                        value={this.state.mname}
                        tintColor={colors.green01}
                        error={this.state.isMnameError}
                        onChangeText={this.handleMnameChange}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextField
                        label='Last Name (Same as in your ID)'
                        value={this.state.lname}
                        tintColor={colors.green01}
                        error={this.state.isLnameError}
                        onChangeText={this.handleLnameChange}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.customLabel}>Birthdate</Text>
                    <DatePicker
                        style={{ width: '100%' }}
                        date={this.state.bday}
                        mode="date"
                        placeholder="Birthdate"
                        format="MMM DD YYYY"
                        minDate="Jan 01 1950"
                        maxDate="Jan 01 2018"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        iconComponent={
                            <FAIcon
                                name='calendar'
                                type='font-awesome'
                                color={colors.blue02}
                                size={18}
                                style={{
                                    position: 'absolute',
                                    right: 5,
                                }}
                            />
                        }
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                borderBottomColor: colors.gray06,
                                alignItems: 'flex-start',
                            },
                            dateText: {
                                fontSize: 16,
                                fontWeight: '400',
                            },
                            placeholderText: {
                                fontSize: 16,
                                fontWeight: '400',
                            }
                        }}
                        onDateChange={this.handleDateChange}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.customLabel}>Gender</Text>
                    <RNPickerSelect
                        placeholder={this.getPickerPlaceholder('Gender')}
                        useNativeAndroidPickerStyle={false}
                        items={this.state.genderOption}
                        onValueChange={this.handleGenderChange}
                        style={pickerSelectStyles}
                        value={this.state.gender}
                        Icon={this.getCaretIcon}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <TextField
                        label='Email'
                        value={this.state.email}
                        tintColor={colors.green01}
                        error={this.state.isEmailError}
                        onChangeText={this.handleEmailChange}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.customLabel}>Marital Status</Text>
                    <RNPickerSelect
                        placeholder={this.getPickerPlaceholder('Marital Status')}
                        useNativeAndroidPickerStyle={false}
                        items={this.state.maritalStatusOption}
                        onValueChange={this.handleMaritalStatusChange}
                        style={pickerSelectStyles}
                        value={this.state.maritalStatus}
                        Icon={this.getCaretIcon}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.customLabel}>Number of Dependents</Text>
                    <RNPickerSelect
                        placeholder={this.getPickerPlaceholder('Number of Dependents')}
                        useNativeAndroidPickerStyle={false}
                        items={this.state.dependentsCountOption}
                        onValueChange={this.handledependentsCountChange}
                        style={pickerSelectStyles}
                        value={this.state.dependentsCount}
                        Icon={this.getCaretIcon}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.customLabel}>Education</Text>
                    <RNPickerSelect
                        placeholder={this.getPickerPlaceholder('Education')}
                        useNativeAndroidPickerStyle={false}
                        items={this.state.educationOption}
                        onValueChange={this.handleEducationChange}
                        style={pickerSelectStyles}
                        value={this.state.education}
                        Icon={this.getCaretIcon}
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={this.handleSubmit}>
                    <RoundedButton
                        textColor={colors.white}
                        bgColor={colors.blue02}
                        label={'NEXT'}
                    />
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },   
    inputWrapper: {
        marginTop: 0
    }, 
    buttonWrapper:
    {
        width: 200,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 50,
    },
    customLabel: { 
        marginTop: 20, 
        color: colors.gray02, 
        fontSize: 12 
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
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: colors.gray06,
        color: colors.gray04
    },
    iconContainer: {
        bottom: 10,
        right: 5
    }
});