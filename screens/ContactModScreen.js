import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'expo';
import colors from '../assets/colors';
import typo from '../constants/Typography';
import RoundedButton from '../components/buttons/RoundedButton';
import columns from '../assets/layout/Columns.style';
import { TextField } from 'react-native-material-textfield'; 

export default class ContactModScreen extends React.Component {

    state = {
        message: '',
        messageError: ''
    };

    handleMessageChange = (message) => {
        this.setState({ 
            message: message,
            messageError: '' 
        });
    }

    handleSendMessage = () => {
        console.log(this.state.message);
        if (this.state.message == '') {
            const messageError = 'The field is required';
            this.setState({ messageError });
        } else {
            this.props.navigation.navigate('Notifications');
        }
    }

    render() {
        const dimensions = Dimensions.get('window');
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={[columns.twoColumnWrapper, styles.modWrapper]}>
                        <View style={[columns.twoColumnWrapperItem, styles.modDetails]}>
                            <Text style={typo.headerTitleBold}>Contact Moderator</Text>
                            <Text>Moderator typically responds within an hour</Text>
                        </View>
                        <View style={[columns.threeColumnWrapperItem, styles.avatarWrapper]}>
                            <View style={styles.imageWrapper}>
                                <Image 
                                    style={styles.avatar}
                                    source={require('../assets/images/notif.jpg')}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[typo.headerTitle, {paddingVertical: 20}]}>What to expect from us</Text>
                    </View>
                    <View style={styles.messageWrapper}>
                        <TextField
                            label='Your Message'
                            value={this.state.message}
                            tintColor={colors.green01}
                            onChangeText={this.handleMessageChange}
                            error={this.state.messageError}
                            multiline={true}
                        />
                    </View>
                </ScrollView>
                <View style={styles.fixedFooter}>
                    <View>
                        <TouchableOpacity
                            style={styles.buttonWrapper}
                            onPress={this.handleSendMessage}>
                            <RoundedButton
                                textColor={colors.white}
                                bgColor={colors.blue02}
                                label={'Send Message'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 0
    },
    buttonWrapper: {

    },
    modWrapper: {
        marginHorizontal: 0
    },  
    modDetails: {
        width: '60%',
    },  
    avatarWrapper: {
        width: '40%',
    },  
    avatar: {
        width: 100,
        height: 100,
        alignSelf: 'flex-end',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.gray05
    },  
    messageWrapper: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: colors.gray02
    },  
    fixedFooter: {
        height: 75,
        borderTopWidth: 1,
        borderTopColor: colors.gray07,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    
});