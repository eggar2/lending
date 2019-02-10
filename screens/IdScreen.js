import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import colors from '../assets/colors';

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
        gender: 'male'
    }

    handleFullNameChange = () => {
        console.log('text change');
    }

    selectGenderOption = (gender) => {
        this.setState({ gender });
    }

    render() {
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
                            autoFocus
                        />
                    </View>

                    <View style={styles.genderOptions}>
                        <Text style={styles.genderHeading}>Gender</Text>
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
    genderOptions: {
        marginTop: 20,
    },
    genderHeading: {
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
})

