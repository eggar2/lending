import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import colors from '../assets/colors';
import * as Progress from 'react-native-progress';
import { NavigationActions } from 'react-navigation';

export default class ProfileScreen extends Component {

    static navigationOptions = {
        header: null,
    };
    
    constructor(props) {
        super(props);
        this.state = {
          profName: 'Richard',
          profDetails: 'View and edit profile',
          profSteps: 'You need to complete your details before you can apply for a loan, so get a head start by doing it now.',
          incInfo: 'Incomplete Info',
          profImg: ''
        }
    }

    navigateToScreen = (route) => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	}

    render() {
        let profImage;

        if(this.state.profImg) {
            profImage = <Image 
                style={{width: 64, height: 64}}
                source={{uri: this.state.profImg}} />
        } else {
            profImage = <Icon
                name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
                color='#827F80'
                size={80}
                iconStyle={{marginBottom: 15, flex: 1}} />
        }
        return (
            <ScrollView style={styles.mainContainer}>
                <View style={styles.content}>
                    <View style={styles.nameImageContainer}>
                        <View style={{flex: 3}}>
                            <Text style={styles.name}>{this.state.profName}</Text>
                            <TouchableOpacity
                                onPress={this.navigateToScreen('ProfileInfo')}>
                                <Text style={styles.viewProf}>{this.state.profDetails}</Text>
                            </TouchableOpacity>
                        </View>

                        {profImage}

                    </View>
                    <View style={styles.progress}>
                        <View style={styles.incContainer}>
                            <Text style={styles.incInfoHeader}>Just 4 steps</Text>
                            <Text style={styles.incInfo}>{this.state.incInfo}</Text>
                        </View>
                        <Progress.Bar 
                            progress={0.25} 
                            borderWidth={0} 
                            borderRadius={0} 
                            width={null} 
                            height={10}
                            color='#429cf4'
                            unfilledColor='#c6e0fb'
                        />
                        <Text style={styles.defaultText}>{this.state.profSteps}</Text>
                    </View>
                    <View style={styles.stepsContainer}>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Notifications</Text>
                            </View>
                            <Icon
                                name={Platform.OS === 'ios' ? 'ios-notifications-outline' : 'md-notifications-outline'}
                                color='#827F80'
                                size={26} />
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Loan Record</Text>
                            </View>
                            <Icon
                                name={Platform.OS === 'ios' ? 'ios-folder-open' : 'md-folder-open'}
                                color='#827F80'
                                size={26} />
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Invite Your Fiends</Text>
                            </View>
                            <Icon
                                name={Platform.OS === 'ios' ? 'ios-gift' : 'md-gift'}
                                color='#827F80'
                                size={26} />
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <TouchableOpacity
                                    onPress={this.navigateToScreen('Settings')}>
                                    <Text style={styles.profileMenuText}>Settings</Text>
                                </TouchableOpacity> 
                            </View>
                            <Icon
                                name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
                                color='#827F80'
                                size={26} />
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <TouchableOpacity
                                    onPress={this.navigateToScreen('About')}>
                                    <Text style={styles.profileMenuText}>About Us</Text>
                                </TouchableOpacity>                                                          
                            </View>
                            <Icon
                                name={Platform.OS === 'ios' ? 'ios-help-circle-outline' : 'md-help-circle-outline'}
                                color='#827F80'
                                size={26} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        padding: 20,
    },
    content: {
        paddingBottom: 40
    },
    nameImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    progress: {
        marginBottom: 30
    },
    stepsContainer: {
        borderTopWidth: 1,
        borderColor: '#bbb',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    profileMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb',
        paddingTop: 15,
        paddingBottom: 15
    },
    profileMenuText: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.gray04
    },
    defaultText: {
        fontSize: 16,
        marginTop: 15
    },
    incContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15
    },  
    incInfoHeader: {
        fontSize: 20,
        fontWeight: '500'
    },
    incInfo: {
        color: '#f86e7b',
        fontSize: 18,
        fontWeight: '500'
    },
    viewProf: {
        fontSize: 18
    }
})
