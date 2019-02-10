import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    
    constructor(props) {
        super(props);
        this.state = {
          profName: 'Richard',
          profDetails: 'View and edit profile'
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.nameImageContainer}>
                    <View style={{flex: 3}}>
                        <Text style={styles.name}>{this.state.profName}</Text>
                        <Text>{this.state.profDetails}</Text>
                    </View>
                    <Icon
                        name='user-circle'
                        type='font-awesome'
                        color='#e2e2e2'
                        size={80}
                        iconStyle={{marginBottom: 15, flex: 1}}
                    />
                </View>
                <View style={styles.stepsContainer}>
                    <View style={styles.profileMenu}>
                        <View style={{flex: 3}}>
                            <Text style={styles.profileMenuText}>Notifications</Text>
                        </View>
                        <Icon
                            name='bell'
                            type='font-awesome'
                            color='#827F80'
                            size={25}
                            iconStyle={{marginBottom: 15, flex: 1}}
                        />
                    </View>
                    <View style={styles.profileMenu}>
                        <View style={{flex: 3}}>
                            <Text style={styles.profileMenuText}>Loan Record</Text>
                        </View>
                        <Icon
                            name='folder-open'
                            type='font-awesome'
                            color='#827F80'
                            size={25}
                            iconStyle={{marginBottom: 15, flex: 1}}
                        />
                    </View>
                    <View style={styles.profileMenu}>
                        <View style={{flex: 3}}>
                            <Text style={styles.profileMenuText}>Invite Your Fiends</Text>
                        </View>
                        <Icon
                            name='gift'
                            type='font-awesome'
                            color='#827F80'
                            size={25}
                            iconStyle={{marginBottom: 15, flex: 1}}
                        />
                    </View>
                    <View style={styles.profileMenu}>
                        <View style={{flex: 3}}>
                            <Text style={styles.profileMenuText}>Settings</Text>
                        </View>
                        <Icon
                            name='cog'
                            type='font-awesome'
                            color='#827F80'
                            size={25}
                            iconStyle={{marginBottom: 15, flex: 1}}
                        />
                    </View>
                    <View style={styles.profileMenu}>
                        <View style={{flex: 3}}>
                            <Text style={styles.profileMenuText}>About Us</Text>
                        </View>
                        <Icon
                            name='question-circle'
                            type='font-awesome'
                            color='#827F80'
                            size={25}
                            iconStyle={{marginBottom: 15, flex: 1}}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingRight: 20,
        paddingLeft: 20
    },
    nameImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    stepsContainer: {
        flex: 3,
        borderTopWidth: 1,
        borderColor: '#bbb',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    profileMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb',
        paddingTop: 15,
        paddingBottom: 15
    },
    profileMenuText: {
        fontSize: 18
    }
})