import React from 'react';
import { Platform, Image } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import SideMenu from '../components/SideMenu';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';
import LendingDetailsScreen from '../screens/LendingDetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import VerificationScreen from '../screens/VerificationScreen';
import VerifiedScreen from '../screens/VerifiedScreen';
import ProfileInfoScreen from '../screens/ProfileInfoScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';

const RootStack = createStackNavigator(
    {   
        Home: HomeScreen,
    },
);

const LendingStack = createStackNavigator(
    {
        LendingDetails: LendingDetailsScreen,
        Login: LoginScreen,
        Register: RegisterScreen,
        Verification: VerificationScreen,
        Verified: VerifiedScreen,
        ProfileInfo: ProfileInfoScreen,
        PersonalInfo: PersonalInfoScreen,
        About: AboutScreen,
        Settings: SettingsScreen,
    },
);

const MyDrawerNavigator = createDrawerNavigator({
    Tab: MainTabNavigator,
    Main: RootStack,
    Lending: LendingStack
}, {
    contentComponent: SideMenu,
    drawerWidth: 300,
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class Main extends React.Component {
    render() {
        return <AppContainer />;
    }
}
