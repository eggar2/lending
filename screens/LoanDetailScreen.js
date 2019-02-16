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
        title: 'Loan Details',
        headerLayoutPreset: 'center',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            color: colors.white
        },
        headerStyle: {
            backgroundColor: colors.blueGreen,
            ...Platform.select({
                ios: {
                    shadowOffset: { height: 0 },
                    shadowOpacity: 0,
                    shadowRadius: 0,
                },
                android: {
                    elevation: 0,
                },
            })
        },
        headerLeft: (
            <TouchableHighlight
                onPress={() => { navigation.goBack(); }}
                underlayColor={colors.gray01}
                style={{ marginLeft: 10, paddingHorizontal: 10 }} >
                <Icon.Ionicons
                    name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}
                    size={26} 
                    color={colors.white}
                />
            </TouchableHighlight>
        ),
        headerRight: (
            <Text>{''}</Text>
        ),
    });

    onPressPayLoan = () => {
        this.props.navigation.navigate('PaymentGateway');
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.blueContainer}>
                    <Text style={[typo.headerTitle, typo.textAlignCenter]}>LOAN BALANCE</Text>
                    <Text style={[typo.headerTitleBolder, typo.textAlignCenter, {color: colors.white}]}>Php 3,000.00</Text>
                    <View style={columns.twoColumnWrapper}>
                        <View style={columns.twoColumnWrapperItem}>
                            <Text style={typo.headerTitle}>LOAN AMOUNT</Text>
                            <Text style={[typo.headerTitle, styles.blueDetailValue]}>Php 20,000.00</Text>
                        </View>
                        <View style={columns.twoColumnWrapperItem}>
                            <Text style={[typo.headerTitle, typo.textAlignRight]}>REMAINING TERM</Text>
                            <Text style={[typo.headerTitle, styles.blueDetailValue, typo.textAlignCenter]}>7 Mos</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.whiteWrapper}>
                    <View style={styles.whiteContainer}>

                        <View style={[columns.twoColumnWrapper, styles.whiteHeader]}>
                            <View style={[columns.twoColumnWrapperItem, styles.nxtAmount]}>
                                <Text style={[typo.headerTitle, styles.whiteHeaderLabel]}>NEXT PAYMENT</Text>
                                <Text style={[typo.headerTitleBold, styles.whiteHeaderValue]}>Mar 5, 2018</Text>
                            </View>
                            <View style={[columns.twoColumnWrapperItem]}>
                                <Text style={[typo.headerTitle, styles.whiteHeaderLabel]}>NEXT PAYMENT AMT</Text>
                                <Text style={[typo.headerTitleBold, styles.whiteHeaderValue]}>Php 300/mo</Text>
                            </View>
                        </View>
                        
                        <View style={styles.historyWrapper}>
                            <Text style={[typo.headerTitleBold, typo.textAlignCenter]}>HISTORY</Text>
                            <View style={[columns.twoColumnWrapper, styles.historyItem]}>
                                <View style={[columns.twoColumnWrapperItem]}>
                                    <Text style={[typo.headerTitle, {fontWeight: '300'}]}>Payment G-Cash</Text>
                                    <Text>03/05/18</Text>
                                </View>
                                <View style={[columns.twoColumnWrapperItem]}>
                                    <Text style={typo.textAlignRight}>
                                        <Text style={typo.headerTitle}>Php 300.</Text>00
                                    </Text>
                                </View>
                            </View>
                            <View style={[columns.twoColumnWrapper, styles.historyItem]}>
                                <View style={[columns.twoColumnWrapperItem]}>
                                    <Text style={[typo.headerTitle, { fontWeight: '300' }]}>Payment G-Cash</Text>
                                    <Text>03/05/18</Text>
                                </View>
                                <View style={[columns.twoColumnWrapperItem]}>
                                    <Text style={typo.textAlignRight}>
                                        <Text style={typo.headerTitle}>Php 300.</Text>00
                                    </Text>
                                </View>
                            </View>
                            <View style={[columns.twoColumnWrapper, styles.historyItem]}>
                                <View style={[columns.twoColumnWrapperItem]}>
                                    <Text style={[typo.headerTitle, { fontWeight: '300' }]}>Payment G-Cash</Text>
                                    <Text>03/05/18</Text>
                                </View>
                                <View style={[columns.twoColumnWrapperItem]}>
                                    <Text style={typo.textAlignRight}>
                                        <Text style={typo.headerTitle}>Php 300.</Text>00
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.payLoanWrapper}>
                        <TouchableHighlight onPress={this.onPressPayLoan} underlayColor={colors.gray06}>
                            <Text style={[typo.headerTitleBold, styles.payLoanButtonText]}>PAY MY LOAN</Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    blueContainer: {
        backgroundColor: colors.blueGreen,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 80,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    blueDetailValue: {
        color: colors.white,
        paddingTop: 5,
        fontSize: 20
    },
    whiteWrapper: {
        paddingBottom: 10,
        marginTop: -65
    },  
    whiteContainer: {
        paddingBottom: 20,
        marginHorizontal: 20,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray01,
        ...Platform.select({
            ios: {
                shadowColor: '#666',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 2,
            },
        })
    },
    nxtAmount: {
        borderRightWidth: 1,
        borderColor: colors.gray03,
    },
    whiteHeader: {
        marginTop: 0, 
        marginHorizontal: 0, 
        borderBottomWidth: 1,
        borderColor: colors.gray03,
    },
    whiteHeaderLabel: {
        fontSize: 13,
        textAlign: 'center',
        paddingTop: 10
    },
    whiteHeaderValue: {
        textAlign: 'center',
        paddingBottom: 5
    },
    historyWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    historyItem: { 
        marginHorizontal: 0, 
        marginTop: 10, 
        borderBottomWidth: 1,
        borderBottomColor: colors.gray03,
        paddingBottom: 10
    },
    payLoanWrapper: {
        alignItems: 'center',
        marginTop: 20,
    },
    payLoanButtonText: {
        color: colors.pink
    }
});