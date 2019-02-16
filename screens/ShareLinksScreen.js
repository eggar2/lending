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

export default class ShareLinksScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => { navigation.goBack() }}
                style={{ marginLeft: 10, paddingHorizontal: 10 }} >
                <Icon.Ionicons
                    name={'md-close'}
                    size={26} 
                />
            </TouchableOpacity>
        ),
        headerStyle: {
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
    })
    render() {
        return (
            <ScrollView style={styles.container}>
                
                <View style={styles.logoWrapper}>
                    <AutoHeightImage
                        width={200}
                        source={require('../assets/images/lendster_logo.jpg')}
                    />
                </View>

                <View style={styles.socialWrapper}>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.socialItem]}>
                            <View style={[columns.threeColumnWrapperItem, styles.socialIcon]}>
                                <Icon.Ionicons
                                    name={'md-copy'}
                                    size={30} />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.socialTitle]}>
                                <Text style={[typo.headerTitleBold, {fontWeight: 'normal'}]}>Copy to Clipboard</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.socialItem]}>
                            <View style={[columns.threeColumnWrapperItem, styles.socialIcon]}>
                                <AutoHeightImage
                                    width={30}
                                    source={require('../assets/images/social/whatsapp.png')}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.socialTitle]}>
                                <Text style={[typo.headerTitleBold, { fontWeight: 'normal' }]}>WhatsApp</Text>
                                <Icon.Ionicons
                                    style={styles.payIcon}
                                    name={'md-checkmark'}
                                    size={30}
                                    color={colors.gray03}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.socialItem]}>
                            <View style={[columns.threeColumnWrapperItem, styles.socialIcon]}>
                                <AutoHeightImage
                                    width={30}
                                    source={require('../assets/images/social/facebook.jpg')}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.socialTitle]}>
                                <Text style={[typo.headerTitleBold, { fontWeight: 'normal' }]}>Facebook</Text>
                                <Icon.Ionicons
                                    style={styles.payIcon}
                                    name={'md-checkmark'}
                                    size={30}
                                    color={colors.gray03}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.socialItem]}>
                            <View style={[columns.threeColumnWrapperItem, styles.socialIcon]}>
                                <AutoHeightImage
                                    width={30}
                                    source={require('../assets/images/social/gmail.png')}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.socialTitle]}>
                                <Text style={[typo.headerTitleBold, { fontWeight: 'normal' }]}>Gmail</Text>
                                <Icon.Ionicons
                                    style={styles.payIcon}
                                    name={'md-checkmark'}
                                    size={30}
                                    color={colors.gray03}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.socialItem]}>
                            <View style={[columns.threeColumnWrapperItem, styles.socialIcon]}>
                                <AutoHeightImage
                                    width={30}
                                    source={require('../assets/images/social/messenger.png')}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.socialTitle]}>
                                <Text style={[typo.headerTitleBold, { fontWeight: 'normal' }]}>Messenger</Text>
                                <Icon.Ionicons
                                    style={styles.payIcon}
                                    name={'md-checkmark'}
                                    size={30}
                                    color={colors.gray03}
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
    logoWrapper: {
        alignItems: 'center',
        marginBottom: 20
    },  
    socialWrapper: {
        borderTopWidth: 1,
        borderTopColor: colors.gray03,
    },
    socialItem: {
        marginHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray03,
        paddingBottom: 15,
        marginTop: 15
    },
    socialIcon: {
        width: 40
    },  
    socialTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        width: '67%'
    },
    payIcon: {
        position: 'absolute',
        right: 0,
    }
})