import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Picker,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
    Platform,
    Switch,
    Slider
} from 'react-native';
import { Icon } from 'expo';
import colors from '../assets/colors';
import columns from '../assets/layout/Columns.style';
import HeartButton from '../components/buttons/HeartButton';
import Stars from '../components/Stars';
import AutoHeightImage from 'react-native-auto-height-image';
import NumberFormat from 'react-number-format';

export default class LendingDetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <View style={[columns.twoColumnWrapper, 
                {
                    width: 70,
                    marginHorizontal: 0,
                    marginTop: 0,
                    marginRight: 20,
                }]}
            >
                <View style={[columns.twoColumnWrapperItem, 
                    {
                        paddingRight: 10,
                    }]}
                >
                    <TouchableHighlight
                        onPress={() => { console.log('share'); }}
                        underlayColor={colors.gray01}
                    >
                        <Icon.Ionicons
                            name={Platform.OS === 'ios' ? 'ios-share' : 'md-share'}
                            size={26}
                        />
                    </TouchableHighlight>
                </View>
                <View style={[columns.twoColumnWrapperItem,
                    {
                        alignItems: 'flex-end'
                    }]}
                >
                    <HeartButton
                        color={colors.black}
                        size={26}
                        selectedColor={colors.pink}
                    />
                </View>
            </View>
        ),
    });

    state = {
        switchTermValue: 'Days',
        amountValue: 9000,
        termValue: 14,
        termMin: 7,
        termMax: 30,
    };

    _handleToggleSwitch = (value) => {
        const switchTermValue = value ? 'Months' : 'Days';
        if( value ){ //months
            this.setState({ 
                termValue: 3,
                termMin: 3,
                termMax: 18
            });
        }else{ //days
            this.setState({ 
                termValue: 14,
                termMin: 7,
                termMax: 30
            });
        }
        this.setState({ switchTermValue });
    }

    _handleSliderAmount = (amountValue) => {
        this.setState({amountValue});
    }

    _handleSliderTerms = (termValue) => {
        this.setState({ termValue });
    }
    
    render() {
        const dimensions = Dimensions.get('window');
        return (
            <ScrollView style={styles.container}>
                <View style={[columns.twoColumnWrapper, {marginHorizontal: 0}, styles.bottomDivider]}>
                    <View style={[columns.twoColumnWrapperItem, styles.lenderImageWrapper]}>
                        <AutoHeightImage
                            width={80}
                            source={require('../assets/data/photos/jewel.jpg')}
                            style={styles.lenderImage}
                        />
                    </View>
                    <View style={[columns.twoColumnWrapperItem, styles.lenderDetailWrapper]}>
                        <Text style={styles.headerTitle}>3 Jewels Lending Corp</Text>
                        <Stars
                            votes={5}
                            host={''}
                            reviews={0}
                            size={15}
                            color={colors.green02}
                        />
                        <Text style={[styles.textDetail, {paddingTop: 5}]}>1Km away</Text>
                        <Text style={styles.textDetail}>$10,000.00 Lended</Text>
                    </View>
                </View>
                <View style={styles.bottomDivider}>
                    <Text style={styles.headerTitle}>LOAN AMOUNT</Text>
                    <Text style={styles.textDetail}>Repeat borrowing will increase your limit.</Text>
                    <Text style={[styles.headerTitleBold, { textAlign: 'center' }]}>
                        <NumberFormat 
                            value={this.state.amountValue} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'PHP '} 
                            suffix={'.00'}
                            renderText={value => <Text>{value}</Text>}
                        />
                    </Text>
                    <View>
                        <Slider
                            value={this.state.amountValue}
                            onValueChange={this._handleSliderAmount}
                            thumbTintColor={colors.green02}
                            maximumValue={20000}
                            minimumValue={2000}
                            step={100}
                        />
                        <View style={[columns.twoColumnWrapper, {marginHorizontal: 0, marginTop: -20}]}>
                            <Text style={[columns.twoColumnWrapper, { color: colors.green01 }]}>2,000.00</Text>
                            <Text style={[columns.twoColumnWrapper, {color: colors.green01, textAlign: 'right'}]}>20,000.00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomDivider}>
                    <Text style={styles.headerTitle}>LOAN TERM</Text>
                    <View style={[columns.twoColumnWrapper,{marginTop: 10}]}>
                        <View style={[columns.threeColumnWrapperItem, {alignItems: 'flex-end'}]}>
                            <Text style={[styles.textMedium, {marginRight: -10}]}>Days</Text>
                        </View>
                        <View style={[columns.threeColumnWrapperItem, {alignItems: 'center'}]}>
                            <Switch
                                onValueChange={this._handleToggleSwitch}
                                value={this.state.switchTermValue == 'Months' ? true : false }
                                thumbColor={colors.green02}
                            />
                        </View>
                        <View style={columns.threeColumnWrapperItem}>
                            <Text style={[styles.textMedium, { marginLeft: -10 }]}>Months</Text>
                        </View>
                    </View>
                    <Text style={[styles.headerTitleBold, { textAlign: 'center' }]}>
                        {this.state.termValue} {this.state.switchTermValue}
                    </Text>
                    <View>
                        <Slider
                            value={this.state.termValue}
                            onValueChange={this._handleSliderTerms}
                            thumbTintColor={colors.green02}
                            maximumValue={this.state.termMax}
                            minimumValue={this.state.termMin}
                            step={1}
                        />
                        <View style={[columns.twoColumnWrapper, { marginHorizontal: 0, marginTop: -20 }]}>
                            <Text style={[columns.twoColumnWrapper, { color: colors.green01 }]}>
                                {this.state.termMin} {this.state.switchTermValue}
                            </Text>
                            <Text style={[columns.twoColumnWrapper, { color: colors.green01, textAlign: 'right' }]}>
                                {this.state.termMax} {this.state.switchTermValue}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomDivider}>
                    <Text style={[styles.textMedium]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante eget metus luctus aliquam. Cras eget pellentesque diam. Sed porttitor porttitor enim eu faucibus.
                    </Text>
                    <AutoHeightImage
                        width={dimensions.width}
                        source={require('../assets/data/photos/map.jpg')}
                        style={{marginTop: 20}}
                    />
                </View>

                <View style={styles.stickyFooter}>

                </View>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 0
    },
    lenderImageWrapper: {
        borderWidth: 1,
        borderColor: colors.gray01,
        width: '30%',
        alignItems: 'center'
    },
    lenderImage: {
    },
    lenderDetailWrapper: {
        width: '70%',
        paddingLeft: 10
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.gray04,
        marginTop: 2,
    },
    headerTitleBold: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.gray04,
        marginVertical: 10
    },  
    textDetail: {
        fontSize: 14,
        paddingBottom: 4
    },
    textMedium: {
        fontSize: 16,
        marginTop: 3,
        lineHeight: 22
    },    
    bottomDivider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray06,
        paddingBottom: 20,
        marginBottom: 10
    },
});