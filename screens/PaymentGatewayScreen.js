import React from 'react';
import {
    Text,
    View,
    Platform,
    TouchableHighlight,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Icon } from 'expo';
import colors from '../assets/colors';
import columns from '../assets/layout/Columns.style';
import typo from '../constants/Typography';

export default class LoanDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Pay My Loan',
        headerLayoutPreset: 'center',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center'
        },
        headerRight: (
            <Text>{''}</Text>
        ),
    })
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={typo.headerTitleBold}>Pay with</Text>
                <Text style={typo.headerTitle}>Payment currency: 
                    <Text style={{color: colors.blueGreen}}> PHP</Text>
                </Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})