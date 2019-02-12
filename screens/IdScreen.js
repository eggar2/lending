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
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import colors from '../assets/colors';
import DatePicker from 'react-native-datepicker';
import { DocumentPicker, ImagePicker } from 'expo';
import AutoHeightImage from 'react-native-auto-height-image';

export default class IdScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Identification',
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
        gender: 'male',
        date: '',
        type: '',
        imagePosId: null,
        imageHandheldId: null,
    }

    handleFullNameChange = () => {
        console.log('text change');
    }

    handleIdNumberChange = () => {
        console.log('text change');
    }

    handleimagePosId = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            const imagePosId = result.uri;
            this.setState({ imagePosId });
        }
    }

    handleimageHandheldId = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });
        if (!result.cancelled) {
            const imageHandheldId = result.uri;
            this.setState({ imageHandheldId });
        }
    }
    
    selectGenderOption = (gender) => {
        this.setState({ gender });
    }

    render() {
        const dimensions = Dimensions.get('window');
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>

                    <View style={styles.inputWrapper}>
                        <InputField
                            labelText="Full Name"
                            labelTextSize={16}
                            labelTextWeight="400"
                            labelColor={colors.lightBlack}
                            textColor={colors.lightBlack}
                            placeholder={'Full Name'}
                            defaultValue={''}
                            borderBottomColor={colors.gray06}
                            inputType="text"
                            inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 10 }}
                            onChangeText={this.handleFullNameChange}
                            showCheckmark={false}
                        />
                    </View>

                    <View style={styles.fieldRow}>
                        <Text style={styles.fieldRowHeading}>Gender</Text>
                        <View style={styles.inlineRadioButton}>
                            <View style={styles.inlineRadioButtonOption}>
                                <TouchableHighlight
                                    onPress={() => this.selectGenderOption('male')}
                                    underlayColor={colors.gray01}
                                >
                                    <View style={styles.genderOptionItem} >
                                        <View style={styles.genderRadioInput}>
                                            <RadioInput
                                                backgroundColor={colors.gray07}
                                                borderColor={colors.gray05}
                                                selectedBackgroundColor={colors.green01}
                                                selectedBorderColor={colors.green01}
                                                iconColor={colors.white}
                                                selected={this.state.gender === 'male'}
                                            />
                                        </View>
                                        <Text style={styles.genderOptionTitle}>Male</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.inlineRadioButtonOption}>
                                <TouchableHighlight
                                    onPress={() => this.selectGenderOption('female')}
                                    underlayColor={colors.gray01}
                                >
                                    <View style={styles.genderOptionItem}>
                                        <View style={styles.genderRadioInput}>
                                            <RadioInput
                                                backgroundColor={colors.gray07}
                                                borderColor={colors.gray05}
                                                selectedBackgroundColor={colors.green01}
                                                selectedBorderColor={colors.green01}
                                                iconColor={colors.white}
                                                selected={this.state.gender === 'female'}
                                            />
                                        </View>
                                        <Text style={styles.genderOptionTitle}>Female</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View> 
                    </View>

                    <View style={styles.fieldRow}>
                        <Text style={styles.fieldRowHeading}>Birthday</Text>
                        <DatePicker
                            style={{ width: '100%' }}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select Date"
                            format="YYYY-MM-DD"
                            minDate="1950-01-01"
                            maxDate="2018-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: 15,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginHorizontal: 20,
                                    borderWidth : 0,
                                    borderBottomWidth: 1,
                                    borderBottomColor: colors.gray06,
                                    alignItems: 'flex-start'
                                },
                                dateText: {
                                    fontSize: 18, 
                                    fontWeight: '400', 
                                    paddingBottom: 10
                                },
                                placeholderText: {
                                    fontSize: 18,
                                    fontWeight: '400',
                                    paddingBottom: 10
                                }
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>

                    <View style={styles.twoColumnWrapper}>
                        <View style={[styles.twoColumnWrapperItem, {paddingRight: 10}]}>
                            <View style={styles.typePickerWrapper}>
                                <Picker
                                    selectedValue={this.state.type}
                                    style={styles.typePicker}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ type: itemValue })
                                    }>
                                    <Picker.Item label="ID" value="id" />
                                    <Picker.Item label="Date" value="date" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.twoColumnWrapperItem}>
                            <InputField
                                labelText=""
                                labelTextSize={16}
                                labelTextWeight="400"
                                labelColor={colors.lightBlack}
                                textColor={colors.lightBlack}
                                placeholder={'ID Number'}
                                defaultValue={''}
                                borderBottomColor={colors.gray06}
                                inputType="text"
                                inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 11 }}
                                onChangeText={this.handleIdNumberChange}
                                showCheckmark={false}
                            />
                        </View>
                    </View>

                    <View style={styles.fieldRow}>
                        <Text style={styles.fieldRowHeading}>Upload ID Photo</Text>
                        <View style={styles.twoColumnWrapper}>
                            <View style={[styles.twoColumnWrapperItem, {paddingRight: 5}]}>
                                <TouchableOpacity style={styles.buttonStyle} onPress={this.handleimagePosId} >
                                    <Text style={styles.buttonText}>Positive ID Photo</Text>
                                </TouchableOpacity>
                                <View style={styles.imageUploadPreview}>
                                    <AutoHeightImage
                                        width={(dimensions.width / 2) - 25}
                                        source={{ uri: this.state.imagePosId }}
                                    />
                                </View>
                            </View>
                            <View style={[styles.twoColumnWrapperItem, { paddingLeft: 5 }]}>
                                <TouchableOpacity style={styles.buttonStyle} onPress={this.handleimageHandheldId} >
                                    <Text style={styles.buttonText}>Handheld ID Photo</Text>
                                </TouchableOpacity>
                                <View style={styles.imageUploadPreview}>
                                    <AutoHeightImage
                                        width={(dimensions.width / 2) - 25}
                                        source={{ uri: this.state.imageHandheldId }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.fieldRow}>
                        <TouchableOpacity style={[styles.buttonStyle, 
                            { marginHorizontal: 20, backgroundColor: '#1B9AF7'}]} >
                            <Text style={[styles.buttonText, {color: '#fff', fontSize: 18}]}>Confirm</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {

    },
    content: {
        paddingTop: 20,
    },
    inputWrapper: {
        paddingHorizontal: 20,
    },
    inlineRadioButton: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    inlineRadioButtonOption: {
        width: '50%'
    },
    fieldRow: {
        marginTop: 20,
    },
    fieldRowHeading: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.lightBlack,
        marginBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    genderOptionItem: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    genderRadioInput: {
        width: '30%',
    },
    genderOptionTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.lightBlack,
        paddingTop: 5        
    },
    twoColumnWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginTop: 20
    },
    twoColumnWrapperItem: {
        width: '50%'
    },
    typePickerWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray06,
    },
    typePicker: {
        width: '100%',
    },
    imageUploadPreview: {
        marginBottom: 10,
    },
    buttonStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
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
        color: '#008489',
        fontSize: 14,
        fontWeight: '500'
    },
})

