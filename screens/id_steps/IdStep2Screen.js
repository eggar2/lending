import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Picker,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import RoundedButton from '../../components/buttons/RoundedButton';
import colors from '../../assets/colors';
import typo from '../../constants/Typography';
import { Icon, ImagePicker, Permissions } from 'expo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';

export default class IdStep2Screen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => { navigation.goBack(); }}
                underlayColor={colors.gray01}
                style={{ marginLeft: 10, paddingHorizontal: 10 }}
            >
                <Icon.Ionicons
                    name={'md-arrow-round-back'}
                    size={26}
                />
            </TouchableOpacity>
        ),
    });

    state = {
        idPhoto: null,
    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    handleimageidPhoto = async () => {

        if ( this.ifPermissionGranted() ){
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });

            if (!result.cancelled) {
                const idPhoto = result.uri;
                this.setState({ idPhoto });
            }
        }
        
    }

    handleNext = () => {
        this.props.navigation.navigate('IdStep3');
    }

    // permissions
    ifPermissionGranted = async () => {
        const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (status === 'granted') {
            console.log('granted');
            return true;
        } else {
            return false;
        }
    }

    render() {
        const dimensions = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <Text style={typo.textNormalLarger}>SSS Photo</Text>

                <View style={styles.inputWrapper}>
                    <View style={styles.imageWrapper}>
                        {this.state.idPhoto && (
                            <Image
                                style={styles.idImage}
                                width={'100%'}
                                height={180}
                                source={{ uri: this.state.idPhoto }}
                            />
                        )}
                    </View>
                    <TouchableOpacity 
                        onPress={this.handleimageidPhoto}
                        style={[
                            styles.idPhotoIconWrapper, 
                            this.state.idPhoto ? { backgroundColor: 'rgba(11,60,97,0.3)' } : { backgroundColor: colors.blue02  }
                        ]}>
                        <FAIcon
                            name='camera'
                            type='font-awesome'
                            color={colors.white}
                            size={35}
                            style={[
                                styles.idPhotoIcon, 
                                this.state.idPhoto ? { opacity: 0.3 } : { opacity: 1 }
                            ]}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 20}}>
                    <Text style={[typo.textNormal, typo.textAlignCenter]}>Please make sure your photo meets the requirements below, otherwise you will have to resubmit.</Text>
                    <View style={{marginTop: 10, paddingHorizontal: 50}}>
                        <Text style={[typo.textNormal, {color: colors.orange}]}>• Face is clear and the text is readable</Text>
                        <Text style={[typo.textNormal, {color: colors.orange}]}>• ID type matches what you selected</Text>
                        <Text style={[typo.textNormal, {color: colors.orange}]}>• ID is not expired</Text>
                    </View>
                </View>


                <TouchableOpacity
                    onPress={this.handleNext}
                    style={styles.buttonWrapper} >
                    <RoundedButton
                        textColor={colors.white}
                        bgColor={colors.blue02}
                        label={'NEXT'}
                    />
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    inputWrapper: {
        marginTop: 20,
        backgroundColor: colors.gray02,
        borderRadius: 5
    },
    imageWrapper: {
        height: 180,
    },  
    idImage: {
        borderRadius: 5
    },
    buttonWrapper:
    {
        width: 200,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50
    },
    idPhotoIconWrapper: {
        position: 'absolute',
        top: '35%',
        right: '40%',
        borderRadius: 50,
        padding: 15
    },
});