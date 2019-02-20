import React from 'react';
import { Platform, Image } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import SideMenu from '../components/SideMenu';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';
import LendingDetailsScreen from '../screens/LendingDetailsScreen';
import LoanReviewScreen from '../screens/LoanReviewScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import VerificationScreen from '../screens/VerificationScreen';
import VerifiedScreen from '../screens/VerifiedScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ShareLinksScreen from '../screens/ShareLinksScreen';
import IdScreen from '../screens/IdScreen';
import ProfileInfoScreen from '../screens/ProfileInfoScreen';
import WorkInfoScreen from '../screens/WorkInfoScreen';
import ContactInfoScreen from '../screens/ContactInfoScreen';

const RootStack = createStackNavigator(
    {   
        Home: HomeScreen,
        ShareLinks: ShareLinksScreen,
    },
);

const LendingStack = createStackNavigator(
    {
        LendingDetails: LendingDetailsScreen,
        LoanReview: LoanReviewScreen,
        Login: LoginScreen,
        Register: RegisterScreen,
        Verification: VerificationScreen,
        Verified: VerifiedScreen,
        About: AboutScreen,
        Settings: SettingsScreen,
    },
);

// PROFILE 
const ProfileInfoStack = createStackNavigator(
    {
        ProfileInfo: ProfileInfoScreen,
        Identification: IdScreen,
        WorkInfo: WorkInfoScreen,
        PersonalInfo: PersonalInfoScreen,
        Contact: ContactInfoScreen,
    },
);

const MyDrawerNavigator = createDrawerNavigator({
    Tab: MainTabNavigator,
    Main: RootStack,
    Lending: LendingStack,
    ProfileInfo: ProfileInfoStack
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
