import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors';
import { NavigationActions } from 'react-navigation';

export default class ProfileInfoScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
          profInfoName: 'Richard Illescas',
          profInfoDesc: 'June 2018',
          profInfoImg: ''
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

        if(this.state.profInfoImg) {
            profImage = <Image 
                style={styles.profImage}
                source={{uri: this.state.profinfoImg}}
            />
        } else {
            profImage = <Image 
                style={styles.profImage}
                source={{uri: 'http://placehold.it/720x420'}}
            />
        }

        return (
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.profContainer}>
                        {profImage}
                        <View style={{padding: 15}}>
                            <Text style={styles.name}>{this.state.profInfoName}</Text>
                            <Text style={styles.descText}>Member since {this.state.profInfoDesc}</Text>
                        </View>
                    </View>
                    <View style={styles.stepsContainer}>
                        <View style={[styles.profileMenu, styles.profileMenuFirst]}>
                            <View style={{flex: 3}}>
                                <TouchableOpacity
                                    onPress={this.navigateToScreen('Identification')}>
                                    <Text style={styles.profileMenuText}>Identification</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <TouchableOpacity
                                    onPress={this.navigateToScreen('PersonalInfo')}>
                                    <Text style={styles.profileMenuText}>Personal Information</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Work Information</Text>
                            </View>
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <TouchableOpacity
                                    onPress={this.navigateToScreen('Contact')}>
                                    <Text style={styles.profileMenuText}>Contact Information</Text>
                                </TouchableOpacity>                            
                            </View>
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
        padding: 30,
    },
    content: {
        paddingBottom: 30
    },
    profContainer: {
    },
    stepsContainer: {
        paddingHorizontal: 15,
        marginTop: 15
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black
    },
    profileMenuFirst: {
        borderTopWidth: 1,
        borderColor: '#bbb',
    },  
    profileMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb',
        paddingTop: 15,
        paddingBottom: 15
    },
    profImage: {
        height: 240,
        maxWidth: '100%',
    },
    profileMenuText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#444'
    },
    descText: {
        fontSize: 18,
        color: '#444'
    }
})
