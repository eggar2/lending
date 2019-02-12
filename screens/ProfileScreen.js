import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    
    constructor(props) {
        super(props);
        this.state = {
          profName: 'Richard',
          profDetails: 'View and edit profile',
          profSteps: 'You need to complete your details before you can apply for a loan, so get a head start by doing it now.',
          incInfo: 'Incomplete Info',
          profImg: ''
        }
    }

    render() {
        let profImage;

        if(this.state.profImg) {
            profImage = <Image 
                style={{width: 64, height: 64}}
                source={{uri: this.state.profImg}}
            />
        } else {
            profImage = <Icon
                name='user-circle'
                type='font-awesome'
                color='#e2e2e2'
                size={80}
                iconStyle={{marginBottom: 15, flex: 1}}
            />
        }
        return (
            <View style={styles.mainContainer}>
                <View style={styles.nameImageContainer}>
                    <View style={{flex: 3}}>
                        <Text style={styles.name}>{this.state.profName}</Text>
                        <Text style={styles.viewProf}>{this.state.profDetails}</Text>
                    </View>

                    {profImage}

                </View>
                <View style={styles.progress}>
                    <View style={styles.incContainer}>
                        <Text style={styles.incInfoHeader}>Just 4 steps</Text>
                        <Text style={styles.incInfo}>{this.state.incInfo}</Text>
                    </View>
                    <Progress.Bar 
                        progress={0.25} 
                        borderWidth={0} 
                        borderRadius={0} 
                        width={null} 
                        height={10}
                        color='#429cf4'
                        unfilledColor='#c6e0fb'
                    />
                    <Text style={styles.defaultText}>{this.state.profSteps}</Text>
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
        paddingRight: 30,
        paddingLeft: 30
    },
    nameImageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    progress: {
        flex: 1,
        marginBottom: 30
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
        fontSize: 20,
        fontWeight: '600'
    },
    defaultText: {
        fontSize: 16,
        marginTop: 15
    },
    incContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15
    },  
    incInfoHeader: {
        fontSize: 20,
        fontWeight: '600'
    },
    incInfo: {
        color: '#f86e7b',
        fontSize: 18,
        fontWeight: '600'
    },
    viewProf: {
        fontSize: 18
    }
})
