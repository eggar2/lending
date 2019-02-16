import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Platform,
    TouchableOpacity
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
            <View style={styles.mainContainer}>
                <View style={styles.content}>
                    <View style={styles.parentFriendView}>
                        <View>
                            <Text style={styles.contactText}>Parent</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({parentName: text})}
                                placeholder="Name" />
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({parentTel: text})}
                                placeholder="Tel" />
                        </View>
                    </View>
                    <View style={styles.parentFriendView}>
                        <View>
                            <Text style={styles.contactText}>Friend</Text>
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

                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    content: {
        flex: 1,
        padding: 20

    },
    contactText: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.black,
        marginBottom: 5
    },
    parentFriendView: {
        flex: 2
    },
    buttonContainer2: {
        flex: 1,
        justifyContent: 'flex-end'
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
    input: {
        color: colors.gray04,
        fontWeight: 'bold',
        fontSize: 18,
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#999'
    }
    
})
