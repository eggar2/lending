import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Picker,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import RoundedButton from '../../components/buttons/RoundedButton';
import colors from '../../assets/colors';
import typo from '../../constants/Typography';
import { Icon } from 'expo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { TextField } from 'react-native-material-textfield'; //https://github.com/n4kz/react-native-material-textfield
import IOSPicker from 'react-native-ios-picker'; //https://github.com/sanpyaelin/react-native-ios-picker/blob/HEAD/readme.md#style

export default class IdStep1Screen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => { navigation.navigate('ProfileInfo'); }}
                underlayColor={colors.gray01}
                style={{ marginLeft: 10, paddingHorizontal: 10 }}
            >
                <Icon.Ionicons
                    name={'md-arrow-round-back'}
                    size={26}
                />
            </TouchableOpacity>
        ),
    });

    state = {
        idnumber: '',
        isError: '',
        idType: [
            { name: 'SSS', code: 'sss' }, 
            { name: 'UMID', code: 'umid' }, 
        ],
        selectedIdType: 'SSS'
    };

    handleIdNumberChange = (idnumber) => {
        this.setState({ idnumber });
        this.setState({ isError: '' });
    }

    handleIdTypeChange = (value, index) => {
        // console.log(item);
        console.log(index);
        // this.setState({ idnumber });
    }

    handleNext = () => {
        if( this.state.idnumber == '' ){
            const isError = 'The field is required';
            this.setState({isError});
        }
    }

    render() {
        const dimensions = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <Text style={typo.textNormalLarger}>Apply</Text>

                <View style={styles.inputWrapper}>
                    <IOSPicker
                        style={styles.pickerStyle}
                        selectedValue={this.state.selectedIdType}
                        mode={'modal'}
                        onValueChange={this.handleIdTypeChange}>
                        {
                            this.state.idType.map((item, index) =>
                                <Picker.Item key={index} label={item.name} value={item.name} />
                            )
                        }
                    </IOSPicker>
                    <FAIcon
                        name='id-card-o'
                        type='font-awesome'
                        color={colors.blue02}
                        size={18}
                        style={styles.preIcon}
                    />
                    <FAIcon
                        name='chevron-down'
                        type='font-awesome'
                        color={colors.gray04}
                        size={18}
                        style={styles.preIconRight}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <TextField
                        label='Your ID Number 123'
                        value={this.state.idnumber}
                        tintColor={colors.green01}
                        onChangeText={this.handleIdNumberChange}
                        error={this.state.isError}
                        labelTextStyle={{ paddingLeft: 35 }}
                        inputContainerStyle={{paddingLeft: 35}}
                    />
                    <FAIcon
                        name='id-card-o'
                        type='font-awesome'
                        color={colors.blue02}
                        size={18}
                        style={styles.preIcon}
                    />
                </View>

                <TouchableOpacity 
                    style={styles.buttonWrapper}
                    onPress={this.handleNext}>
                    <RoundedButton 
                        textColor={colors.white}
                        bgColor={colors.blue02}
                        label={'NEXT'}
                    />
                </TouchableOpacity>
            </View> 
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    inputWrapper: {
        marginTop: 20
    },
    pickerStyle: {
        borderTopWidth: 0,
        borderBottomWidth: 1,
        marginTop: 25,
        marginBottom: -10,
        paddingLeft: 35,
        zIndex: 99,
    }, 
    buttonWrapper: 
    { 
        width: 200, 
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50
    },
    preIcon: {
        position: 'absolute',
        left: 0,
        top: 35
    },
    preIconRight: {
        position: 'absolute',
        right: 0,
        top: 35,
        zIndex: 1
    }
});