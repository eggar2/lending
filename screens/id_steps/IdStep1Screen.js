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
import { Dropdown } from 'react-native-material-dropdown';

export default class IdStep1Screen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => { navigation.navigate('ProfileInfo'); }}
                underlayColor={colors.gray01}
                style={{ marginLeft: 10, paddingHorizontal: 10 }}
            >
                <Icon.Ionicons
                    name={'md-arrow-back'}
                    size={26}
                />
            </TouchableOpacity>
        ),
    });

    state = {
        idnumber: '',
        isError: '',
        typeOptions: [
            {
                label: 'SSS',
                value: 'sss',
            }, {
                label: 'UMID',
                value: 'umid',
            }, {
                label: "Driver's License",
                value: "license",
            }
        ],
        selectedType: 'sss'
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    handleIdNumberChange = (idnumber) => {
        this.setState({ idnumber });
        this.setState({ isError: '' });
    }

    handleIdTypeChange = (data) => {
        console.log(data);
    }

    handleNext = () => {
        if( this.state.idnumber == '' ){
            const isError = 'The field is required';
            this.setState({isError});
        }else{
            this.props.navigation.navigate('IdStep2');
        }
    }

    render() {
        const dimensions = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <Text style={typo.textNormalLarger}>Apply</Text>

                <View style={[styles.inputWrapper, styles.pickerStyle]}>
                    <Dropdown
                        label='ID Type'
                        data={this.state.typeOptions}
                        value={this.state.selectedType}
                        selectedItemColor={colors.green02}
                        overlayStyle={{
                            backgroundColor: 'rgba(52, 52, 52, 0.8)'
                        }}
                        containerStyle={{
                            paddingLeft: 35,
                        }}
                        onChangeText={this.handleIdTypeChange}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    />
                    <FAIcon
                        name='id-card-o'
                        type='font-awesome'
                        color={colors.blue02}
                        size={18}
                        style={styles.preIcon}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <TextField
                        label='Your ID Number'
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
        padding: 0,
        borderBottomColor: colors.gray05,
        borderBottomWidth: 1,
        marginTop: 25,
        marginBottom: -10,
        height: 65
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