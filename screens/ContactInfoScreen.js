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
        parentName: "",
        parentTel: "",
        friendName: "",
        friendTel: ""
        }
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.parentFriendView}>
                        <View>
                            <Text style={styles.contactText}>First Contact</Text>
                            <View style={{borderBottomWidth: 1, borderColor: "#ddd"}}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={styles.dropDown}
                                    itemStyle={styles.dropDownItem}
                                    prompt='Relation'
                                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                    <Picker.Item label="Spouse" value="spouse" />
                                    <Picker.Item label="Parents" value="parents" />
                                    <Picker.Item label="Children" value="children" />
                                    <Picker.Item label="Brothers/Sisters" value="brothers-sisters" />
                                    <Picker.Item label="Relatives" value="relatives" />
                                    <Picker.Item label="Friends" value="friends" />
                                    <Picker.Item label="Colleagues" value="colleagues" />
                                </Picker>
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({parentName: text})}
                                placeholder="Name" />
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({parentTel: text})}
                                placeholder="Tel" />
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text style={styles.contactText}>Second Contact</Text>
                            <View style={{borderBottomWidth: 1, borderColor: "#ddd"}}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={styles.dropDown}
                                    itemStyle={styles.dropDownItem}
                                    prompt='Relation'
                                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                    <Picker.Item label="Spouse" value="spouse" />
                                    <Picker.Item label="Parents" value="parents" />
                                    <Picker.Item label="Children" value="children" />
                                    <Picker.Item label="Brothers/Sisters" value="brothers-sisters" />
                                    <Picker.Item label="Relatives" value="relatives" />
                                    <Picker.Item label="Friends" value="friends" />
                                    <Picker.Item label="Colleagues" value="colleagues" />
                                </Picker>
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({friendName: text})}
                                placeholder="Name" />
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({friendTel: text})}
                                placeholder="Tel" />
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
    parentFriendView: {

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
    dropDown: {
        height: 50, 
        width: "100%", 
        paddingHorizontal: 12,
    },
    dropDownItem: {
        fontSize: 18,
        color: colors.gray04
    }
    
})
