import React from 'react';
import { Platform, Image } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import SideMenu from '../components/SideMenu';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';
import LendingDetailsScreen from '../screens/LendingDetailsScreen';

const RootStack = createStackNavigator(
    {   
        Home: HomeScreen,
    },
);

const LendingStack = createStackNavigator(
    {
        LendingDetails: LendingDetailsScreen,
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
