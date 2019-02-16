import React from 'react';
import {
    Text,
    View,
    Platform,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Icon } from 'expo';
import colors from '../assets/colors';
import columns from '../assets/layout/Columns.style';
import typo from '../constants/Typography';

export default class LoanReviewScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    onPressCheckStatus = () => {
        this.props.navigation.navigate('Loans');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Icon.Ionicons
                        name={Platform.OS === 'ios' ? 'ios-checkmark-circle-outline' : 'md-checkmark-circle-outline'}
                        size={80}
                        color={colors.blueGreen}
                    />
                    <Text style={[typo.headerTitleBold, {marginVertical: 20}]}>Your application is in review</Text>
                    
                    <Text style={[typo.headerTitleBolder]}>Loan Amount</Text>
                    <Text style={[typo.headerTitleBold, styles.amountDivider]}>PHP 2,000.00</Text>
                    <Text style={[typo.headerTitleBolder]}>Loan Terms</Text>
                    <Text style={[typo.headerTitleBold]}>PHP 6 Months</Text>

                    <TouchableOpacity
                        onPress={this.onPressCheckStatus}
                        style={[typo.rawButton, styles.checkStatusWrapper]} >
                        <Text style={[typo.rawButtonText, styles.checkStatusText]}>Check Status</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        alignItems: 'center',
        width: '100%',
        padding: 20
    },
    amountDivider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray02,
        width: '100%', 
        textAlign: 'center',
        paddingBottom: 20
    },
    checkStatusWrapper: {
        marginTop: 100
    },
    checkStatusText: {
        color: colors.blueGreen,
        fontSize: 20
    }
})