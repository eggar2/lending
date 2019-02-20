import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import LoansScreen from '../screens/LoansScreen';
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoanDetailScreen from '../screens/LoanDetailScreen';
import PaymentGatewayScreen from '../screens/PaymentGatewayScreen';
import NotificationScreen from '../screens/NotificationScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

// EXPLORE
HomeStack.navigationOptions = {
  tabBarLabel: 'EXPLORE',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-search'
      }
    />
  ),
};

// SAVED
const SavedStack = createStackNavigator({
  Saved: SavedScreen,
});

SavedStack.navigationOptions = {
  tabBarLabel: 'SAVED',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-heart'
          : 'md-heart'
      }
    />
  ),
};

// LOANS
const LoansStack = createStackNavigator({
  Loans: LoansScreen,
  LoanDetail: LoanDetailScreen,
  PaymentGateway: PaymentGatewayScreen,
});

LoansStack.navigationOptions = {
  tabBarLabel: 'LOANS',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-disc' : 'md-disc'}
    />
  ),
};

// INBOX 
const InboxStack = createStackNavigator({
  Inbox: InboxScreen,
});

InboxStack.navigationOptions = {
  tabBarLabel: 'INBOX',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
    />
  ),
};

// PROFILE 
const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Notifications: NotificationScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'PROFILE',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SavedStack,
  LoansStack,
  InboxStack,
  ProfileStack
});
