
import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';

export default class SearchBar extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.searchContainer}>
                    <Icon
                        name="ios-search"
                        size={20}
                        color={colors.gray02}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search for a Company"
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.9)',
        width: '100%',
        height: 80,
        zIndex: 99,
    },
    searchContainer: {
        display: 'flex',
        borderWidth: 1,
        borderColor: colors.gray03,
        backgroundColor: colors.white,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.7,
                shadowRadius: 10,
            },
            android: {
                elevation: 20,
            },
        }),
        borderRadius: 3,
        height: 40,
        marginTop: 28,
        marginLeft: 21,
        marginRight: 21,
    },
    searchIcon: {
        position: 'absolute',
        left: 18,
        top: 9,
    },
    textInput: {
        display: 'flex',
        marginTop: 5,
        marginLeft: 44,
        color: colors.gray02,
        ...Platform.select({
            ios: {
                height: 30
            },
        })
    },
});
