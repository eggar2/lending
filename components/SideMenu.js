import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, Button } from 'react-native';

class SideMenu extends Component {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    navigatePush = (route) => () => {
        const navigateAction = NavigationActions.navigate({
                routeName: route,
                tabBar: { visible: false, drawBehind: true, animate: true }
            });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Login')}>
                                Login
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Register')}>
                                Register
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Identification')}>
                                Identification
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Verification')}>
                                Verification
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Verified')}>
                                Verified
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Profile')}>
                                Profile
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
<<<<<<< HEAD
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ProfileInfo')}>
                                Profile Info
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('PersonalInfo')}>
                                Personal Info
=======
                            <Text style={styles.navItemStyle} onPress={this.navigatePush('LendingDetails')}>
                                Lending Details
>>>>>>> 87392bd2f3b05bb47e3c44870b8883b1ce89bc3a
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}></View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;