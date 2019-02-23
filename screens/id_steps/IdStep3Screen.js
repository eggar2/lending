import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import RoundedButton from '../../components/buttons/RoundedButton';
import colors from '../../assets/colors';
import typo from '../../constants/Typography';
import idscreen from '../../assets/layout/IdScreens.style';
import { ImagePicker, Permissions } from 'expo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AutoHeightImage from 'react-native-auto-height-image';

export default class IdStep3Screen extends React.Component {

    state = {
        idPhoto: null,
        showError: false
    }

    handleimageSelfiePhoto = async () => {

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            const idPhoto = result.uri;
            const showError = false;
            this.setState({ idPhoto });
            this.setState({ showError });
        }

    }

    handleNext = () => {
        if (this.state.idPhoto) {
            this.props.navigation.navigate('PersonalInfo');
        } else {
            this.setState({ showError: true });
        }
    }

    render() {
        const dimensions = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <Text style={typo.textNormalLarger}>Selfie with your SSS</Text>

                <View style={styles.inputWrapper}>
                    {!this.state.idPhoto && (
                        <View style={idscreen.idPlaceholder}>

                        </View>
                    )}
                    <View style={idscreen.imageWrapper}>
                        {this.state.idPhoto && (
                            <AutoHeightImage
                                style={idscreen.idImage}
                                width={(dimensions.width) - 40}
                                source={{ uri: this.state.idPhoto }}
                            />
                        )}
                    </View>
                    <TouchableOpacity
                        onPress={this.handleimageSelfiePhoto}
                        style={[
                            idscreen.idPhotoIconWrapper,
                            this.state.idPhoto ? idscreen.hasPhoto : idscreen.noPhoto,
                        ]}>
                        <FAIcon
                            name='camera'
                            type='font-awesome'
                            color={colors.white}
                            size={35}
                            style={[
                                idscreen.idPhotoIcon,
                                this.state.idPhoto ? { opacity: 0.3 } : { opacity: 1 }
                            ]}
                        />
                    </TouchableOpacity>
                </View>

                {this.state.showError && (
                    <Text style={[typo.textNormal, typo.textAlignCenter, { color: colors.red, paddingTop: 20 }]}>Please select a photo</Text>
                )}

                <View style={{ marginTop: 20 }}>
                    <Text style={[typo.textNormal, typo.textAlignCenter]}>Please make sure your photo meets the requirements below, otherwise you will have to resubmit.</Text>
                    <View style={{ marginTop: 10, paddingHorizontal: 50 }}>
                        <Text style={[typo.textNormal, { color: colors.orange }]}>• Your face is not covered</Text>
                        <Text style={[typo.textNormal, { color: colors.orange }]}>• ID type matches what you selected</Text>
                        <Text style={[typo.textNormal, { color: colors.orange }]}>• The photo is clear on your ID</Text>
                    </View>
                </View>


                <TouchableOpacity
                    onPress={this.handleNext}
                    style={idscreen.buttonWrapper} >
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
});