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
import columns from '../assets/layout/Columns.style';
import typo from '../constants/Typography';
import { ImagePicker } from 'expo';
import AutoHeightImage from 'react-native-auto-height-image';

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
        imageProof: ''
    };

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

    render() {

        const dimensions = Dimensions.get('window');

        return (
            <ScrollView style={styles.container}>

                <View style={styles.inputWrapper}>
                    <InputField
                        labelText="Company Name"
                        labelTextSize={16}
                        labelTextWeight="400"
                        labelColor={colors.lightBlack}
                        textColor={colors.lightBlack}
                        placeholder={'Company Name'}
                        defaultValue={''}
                        borderBottomColor={colors.gray06}
                        inputType="text"
                        inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 5 }}
                        onChangeText={() => {}}
                        showCheckmark={false}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <InputField
                        labelText="Company Address"
                        labelTextSize={16}
                        labelTextWeight="400"
                        labelColor={colors.lightBlack}
                        textColor={colors.lightBlack}
                        placeholder={'Company Address'}
                        defaultValue={''}
                        borderBottomColor={colors.gray06}
                        inputType="text"
                        inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 5 }}
                        onChangeText={() => { }}
                        showCheckmark={true}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <InputField
                        labelText="Street, City/Town and Province"
                        labelTextSize={16}
                        labelTextWeight="400"
                        labelColor={colors.lightBlack}
                        textColor={colors.lightBlack}
                        placeholder={'Street, City/Town and Province'}
                        defaultValue={''}
                        borderBottomColor={colors.gray06}
                        inputType="text"
                        inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 5 }}
                        onChangeText={() => { }}
                        showCheckmark={false}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <InputField
                        labelText="Job Title"
                        labelTextSize={16}
                        labelTextWeight="400"
                        labelColor={colors.lightBlack}
                        textColor={colors.lightBlack}
                        placeholder={'Job Title'}
                        defaultValue={''}
                        borderBottomColor={colors.gray06}
                        inputType="text"
                        inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 5 }}
                        onChangeText={() => { }}
                        showCheckmark={false}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <InputField
                        labelText="Year Worked In Current Company"
                        labelTextSize={16}
                        labelTextWeight="400"
                        labelColor={colors.lightBlack}
                        textColor={colors.lightBlack}
                        placeholder={'Year Worked In Current Company'}
                        defaultValue={''}
                        borderBottomColor={colors.gray06}
                        inputType="text"
                        inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 5 }}
                        onChangeText={() => { }}
                        showCheckmark={false}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <InputField
                        labelText="What is your bank name?"
                        labelTextSize={16}
                        labelTextWeight="400"
                        labelColor={colors.lightBlack}
                        textColor={colors.lightBlack}
                        placeholder={'What is your bank name?'}
                        defaultValue={''}
                        borderBottomColor={colors.gray06}
                        inputType="text"
                        inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 5 }}
                        onChangeText={() => { }}
                        showCheckmark={false}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <InputField
                        labelText="What is your bank account number?"
                        labelTextSize={16}
                        labelTextWeight="400"
                        labelColor={colors.lightBlack}
                        textColor={colors.lightBlack}
                        placeholder={'What is your bank account number?'}
                        defaultValue={''}
                        borderBottomColor={colors.gray06}
                        inputType="text"
                        inputStyle={{ fontSize: 18, fontWeight: '400', paddingBottom: 5 }}
                        onChangeText={() => { }}
                        showCheckmark={false}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <View style={[columns.twoColumnWrapper, styles.payDateWrapper]}>
                        <View style={[columns.threeColumnWrapperItem, {width: '24%'}]}>
                            <Text style={{ fontSize: 18, color: colors.lightBlack, paddingTop: 5 }}>Pay Date</Text>
                        </View>
                        <View style={[columns.threeColumnWrapperItem, {width: '38%'}]}>
                            <View style={styles.typePickerWrapper}>
                                <Picker
                                    selectedValue={this.state.type}
                                    style={styles.typePicker}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ type: itemValue })
                                    }>
                                    <Picker.Item label="1st" value="1" />
                                    <Picker.Item label="2nd" value="2" />
                                    <Picker.Item label="3rd" value="3" />
                                </Picker>
                            </View>
                        </View>
                        <View style={[columns.threeColumnWrapperItem, {width: '38%'}]}>
                            <View style={styles.typePickerWrapper}>
                                <Picker
                                    selectedValue={this.state.type}
                                    style={styles.typePicker}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ type: itemValue })
                                    }>
                                    <Picker.Item label="1st" value="1" />
                                    <Picker.Item label="2nd" value="2" />
                                    <Picker.Item label="3rd" value="3" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.inputWrapper]}>
                    <TouchableOpacity
                        onPress={this.handleimageProofOfEmployment}>    
                        <View>    
                            <Text style={{ fontSize: 18, color: colors.lightBlack }}>Upload Clear Proof of Employment</Text>
                            <Text style={{ fontSize: 18, color: colors.pink }}>Such as Company ID or COE</Text>
                        </View> 
                    </TouchableOpacity>
                </View>

                <View style={[styles.inputWrapper, {paddingBottom: 20}]}>
                    <View style={styles.imageUploadPreview}>
                        <AutoHeightImage
                            width={(dimensions.width) - 25}
                            source={{ uri: this.state.imagePosId }}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle2}
                        onPress={() => {}}>
                        <Text style={styles.buttonText}>Confirm</Text>
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
    buttonStyle2: {
        backgroundColor: '#1B9AF7',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
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
    }
});