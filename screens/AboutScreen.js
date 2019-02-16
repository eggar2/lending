import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';

export default class AboutScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'About Us',
        headerStyle: {
            shadowOpacity: 0
        },
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
        },
        headerLeft: (
            <TouchableHighlight
                onPress={() => { navigation.navigate('Profile'); }}
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
          aboutInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.aboutText}>{this.state.aboutInfo}</Text>
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
        flex: 1,
        padding: 20
    },
    aboutText: {
        fontSize: 18,
        color: colors.gray04
    }
   
})
