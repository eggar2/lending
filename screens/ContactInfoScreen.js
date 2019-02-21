import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Platform,
    TouchableOpacity,
    Picker,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';
import { TextField } from 'react-native-material-textfield'; //https://github.com/n4kz/react-native-material-textfield
import IOSPicker from 'react-native-ios-picker'; //https://github.com/sanpyaelin/react-native-ios-picker/blob/HEAD/readme.md#style


const data = [
    {name: 'Spouse', code: 'spouse'},
    {name: 'Parents', code: 'parents'},
    {name: 'Children', code: 'children'},
    {name: 'Brothers/Sisters', code: 'brothers-sisters'},
    {name: 'Relatives', code: 'relatives'},
    {name: 'Friends', code: 'friends'},
    {name: 'Colleagues', code: 'colleagues'}
]

export default class ContactInfoScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Contact Information',
        headerStyle: {
            shadowOpacity: 0
        },
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
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

    constructor(props) {
        super(props);
        this.state = {
        contactName1: "",
        contactTel1: "",
        contactName2: "",
        contactTel2: "",
        selectedValue: ""
        }
    }

    change(d, i) {
        this.setState({selectedValue: data[i].name});
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.parentFriendView}>
                        <View style={{flex: 1}}>
                            <Text style={styles.contactText}>First Contact</Text>
                            <IOSPicker 
                                style={styles.pickerStyle}
                                textStyle={styles.pickerText}
                                selectedValue={this.state.selectedValue}
                                mode='modal'
                                onValueChange={(d, i)=> this.change(d, i)}>
                                { 
                                    data.map((item, index)=>
                                    <Picker.Item key={index} label={item.name} value={item.code} />
                                    )
                                }
                            </IOSPicker>
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
                                label='Cellphone Number'
                                value={this.state.contactTel1}
                                tintColor={colors.green01}
                                onChangeText={this.handleIdNumberChange}
                                error={this.state.isError}
                                labelTextStyle={{ paddingLeft: 10 }}
                                inputContainerStyle={{paddingLeft: 10}}
                            />                           
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text style={styles.contactText}>Second Contact</Text>
                            <IOSPicker 
                                style={styles.pickerStyle}
                                textStyle={styles.pickerText}
                                selectedValue={this.state.selectedValue}
                                mode='modal'
                                onValueChange={(d, i)=> this.change(d, i)}>
                                { 
                                    data.map((item, index)=>
                                    <Picker.Item key={index} label={item.name} value={item.code} />
                                    )
                                }
                            </IOSPicker>
                            <TextField
                                label='Name'
                                value={this.state.contactName1}
                                tintColor={colors.green01}
                                onChangeText={this.handleIdNumberChange}
                                error={this.state.isError}
                                labelTextStyle={{ paddingLeft: 10 }}
                                inputContainerStyle={{paddingLeft: 10}}
                            />

                            <TextField
                                label='Cellphone Number'
                                value={this.state.contactTel1}
                                tintColor={colors.green01}
                                onChangeText={this.handleIdNumberChange}
                                error={this.state.isError}
                                labelTextStyle={{ paddingLeft: 10 }}
                                inputContainerStyle={{paddingLeft: 10}}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer2}>
                        <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress={this.confirm}  >

                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    content: {
        padding: 20
    },
    contactText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.black,
    },
    phoneContainer: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
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
    input: {
        color: colors.gray04,
        fontSize: 17,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    inputPhone: {
        color: colors.gray04,
        fontSize: 17,
        padding: 10,
    },
    pickerStyle: {
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginTop: 10
    },
    pickerText: {
        fontSize: 16,
        color: colors.gray04,
        textTransform: 'capitalize'
    }
    
})
