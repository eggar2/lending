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

export default class InboxScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Notifications',
        headerLayoutPreset: 'center',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center'
        },
        headerRight: (
            <Text>{''}</Text>
        ),
        headerLeft: (
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home'); }}
                underlayColor={colors.gray01}
                style={{ marginLeft: 10, paddingHorizontal: 10 }}
            >
                <Icon.Ionicons
                    name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}
                    size={26}
                />
            </TouchableOpacity>
        ),
    })

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.notifWrapper}>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.notifItem]}>
                            <View style={[columns.threeColumnWrapperItem]}>
                                <View style={styles.notifStatus}>
                                    <Text style={styles.notifStatusText}>{' '}</Text>
                                </View>
                                <AutoHeightImage
                                    width={60}
                                    source={require('../assets/images/notif.jpg')}
                                    style={styles.notifFromAvatar}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.notifMessage]}>
                                <Text style={typo.textNormal}>You have missing payments in 3 Jewels Lending Corp, Lorem Ipsum amet...</Text>
                                <Text style={typo.textSmall}>3 minutes ago</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.notifItem]}>
                            <View style={[columns.threeColumnWrapperItem]}>
                                <View style={styles.notifStatus}>
                                    <Text style={styles.notifStatusText}>{' '}</Text>
                                </View>
                                <AutoHeightImage
                                    width={60}
                                    source={require('../assets/images/lendster_logo.jpg')}
                                    style={styles.notifFromAvatar}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.notifMessage]}>
                                <Text style={typo.textNormal}>You have missing payments in 3 Jewels Lending Corp, Lorem Ipsum amet...</Text>
                                <Text style={typo.textSmall}>1 day ago</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[columns.twoColumnWrapper, styles.notifItem]}>
                            <View style={[columns.threeColumnWrapperItem]}>
                                <View style={styles.notifStatus}>
                                    <Text style={styles.notifStatusText}>{' '}</Text>
                                </View>
                                <AutoHeightImage
                                    width={60}
                                    source={require('../assets/images/lendster_logo.jpg')}
                                    style={styles.notifFromAvatar}
                                />
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.notifMessage]}>
                                <Text style={typo.textNormal}>You have missing payments in 3 Jewels Lending Corp, Lorem Ipsum amet...</Text>
                                <Text style={typo.textSmall}>1 day ago</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }, 
    notifItem: {
        marginHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray03,
        paddingBottom: 15,
        marginTop: 15,
    },
    notifFromAvatar: {
        marginLeft: 25
    },
    notifMessage: {
        width: '67%'
    },
    notifStatus: {
        position: 'absolute',
        left: 0,
        top: '46%'
    }, 
    notifStatusText: {
        height: 8,
        width: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.darkOrange
    }
})