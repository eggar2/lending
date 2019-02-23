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
import ContactModScreen from '../screens/ContactModScreen';

// ID Steps
import IdStep1Screen from '../screens/id_steps/IdStep1Screen';
import IdStep2Screen from '../screens/id_steps/IdStep2Screen';
import IdStep3Screen from '../screens/id_steps/IdStep3Screen';

const RootStack = createStackNavigator(
    {   
        Home: HomeScreen,
        ShareLinks: ShareLinksScreen,
        ContactModerator: ContactModScreen,
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
        // PersonalInfo: PersonalInfoScreen,
        WorkInfo: WorkInfoScreen,
        Contact: ContactInfoScreen,
    },
);

// IDENTIFICATION 
const IdentificationStack = createStackNavigator(
    {
        IdStep1: IdStep1Screen,
        IdStep2: IdStep2Screen,
        IdStep3: IdStep3Screen,
    },
);

// PERSONAL
const PersonalInfoStack = createStackNavigator(
    {
        PersonalInfo: PersonalInfoScreen,
    },
);

const MyDrawerNavigator = createDrawerNavigator({
    Tab: MainTabNavigator,
    Main: RootStack,
    Lending: LendingStack,
    ProfileInfo: ProfileInfoStack,
    IdSteps: IdentificationStack,
    PersonalInfoStack: PersonalInfoStack,
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
