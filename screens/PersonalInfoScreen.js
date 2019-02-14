import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';

export default class PersonalInfoScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableHighlight
                onPress={() => { navigation.navigate('Home'); }}
                underlayColor={colors.gray01}
                style={{marginLeft: 10, paddingHorizontal: 10}} >
                <Icon
                    name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}
                    size={26} />
            </TouchableHighlight>
            
        ),

    });

    constructor(props) {
        super(props);
        this.state = {
          profInfoName: 'Richard Illescas',
          profInfoDesc: 'Member since June 2018',
          profInfoImg: ''
        }
    }

    render() {

        let profImage;

        if(this.state.profInfoImg) {
            profImage = <Image 
                style={styles.profImage}
                source={{uri: this.state.profinfoImg}}
            />
        } else {
            profImage = <Image 
                style={styles.profImage}
                source={{uri: 'http://placehold.it/720x420'}}
            />
        }

        return (
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.stepsContainer}>
                        <View style={[styles.profileMenu, styles.profileMenuFirst]}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Education</Text>
                            </View>
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Marital Status</Text>
                            </View>
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Birthday</Text>
                            </View>
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Religion</Text>
                            </View>
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Current Address</Text>
                            </View>
                        </View>
                        <View style={styles.profileMenu}>
                            <View style={{flex: 3}}>
                                <Text style={styles.profileMenuText}>Detailed Address</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        padding: 30,
    },
    content: {
        paddingBottom: 30
    },
    profContainer: {
        
    },
    stepsContainer: {
        paddingHorizontal: 20,
        marginTop: 15
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    profileMenuFirst: {
        borderTopWidth: 1,
        borderColor: '#bbb',
    },  
    profileMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#bbb',
        paddingTop: 15,
        paddingBottom: 15
    },
    profImage: {
        height: 240,
        maxWidth: '100%'
    },
    profileMenuText: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.gray04
    },
    descText: {
        fontSize: 18,
        color: '#444'
    }
})
