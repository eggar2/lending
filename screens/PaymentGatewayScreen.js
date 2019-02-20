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
import AutoHeightImage from 'react-native-auto-height-image';

export default class PaymentGatewayScreen extends React.Component {
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

                <View style={styles.paymentGatewayWrapper}>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.paymentItem]}>
                            <View style={[columns.threeColumnWrapperItem]}>
                                <AutoHeightImage
                                    width={80}
                                    source={require('../assets/images/payment/credit-card.jpg')}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.paymentTitle]}>
                                <Text style={[typo.headerTitle]}>Credit Card</Text>
                                <Icon.Ionicons
                                    style={styles.payIcon}
                                    name={'ios-arrow-forward'}
                                    size={30}
                                    color={colors.gray04}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.paymentItem]}>
                            <View style={[columns.threeColumnWrapperItem]}>
                                <AutoHeightImage
                                    width={80}
                                    source={require('../assets/images/payment/gcash.jpg')}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.paymentTitle]}>
                                <Text style={[typo.headerTitle]}>Globe GCash</Text>
                                <Icon.Ionicons
                                    style={styles.payIcon}
                                    name={'ios-arrow-forward'}
                                    size={30}
                                    color={colors.gray04}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.paymentItem]}>
                            <View style={[columns.threeColumnWrapperItem]}>
                                <AutoHeightImage
                                    width={80}
                                    source={require('../assets/images/payment/cliqq.png')}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.paymentTitle]}>
                                <Text style={[typo.headerTitle]}>7Eleven</Text>
                                <Icon.Ionicons
                                    style={styles.payIcon}
                                    name={'ios-arrow-forward'}
                                    size={30}
                                    color={colors.gray04}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }, 
    paymentGatewayWrapper: {
        paddingTop: 10
    },  
    paymentItem: {
        marginHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray03,
        paddingBottom: 10,
        marginTop: 10
    },
    paymentTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        width: '67%'
    },
    payIcon: {
        position: 'absolute',
        right: 0,
    }
})