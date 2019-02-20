import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Platform
} from 'react-native';
import colors from '../../assets/colors';
import typo from '../../constants/Typography';
import iPhoneSize from '../../helpers/utils';
import AutoHeightImage from 'react-native-auto-height-image';

const size = iPhoneSize();
let cardSize = 120;
let cardMargin = 4;

if (size === 'small') {
    cardSize = 90;
    cardMargin = 4;
} else if (size === 'large') {
    cardSize = 125;
}

export default class Lenders extends Component {

    get Lenders() {
        const { lenders } = this.props;
        return lenders.map((lender, index) => (
            <TouchableOpacity
                style={styles.card}
                key={`lander-item-${index}`}
            >   
                <View style={styles.lenderWrapper}>
                    <AutoHeightImage
                        width={115}
                        source={lender.logo}
                        style={styles.image}
                    />
                    <View style={styles.lenderDetailWrapper}>
                        <Text style={[typo.headerTitle, {fontWeight: '700', fontSize: 14}]}>{lender.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ));
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.wrapper}
                horizontal={true}
                showHorizontalScrollIndicator={false}
            >
                {this.Lenders}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: cardSize,
        // height: cardSize,
        marginRight: cardMargin,
        marginLeft: cardMargin,
        padding: 5,
    },
    lenderWrapper: {
        borderWidth: 0,
        ...Platform.select({
            ios: {
                shadowColor: '#666',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        })
    },
    lenderDetailWrapper: {
        backgroundColor: colors.gray01,
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: 115
    },
    lenderDesc: {
        fontSize: 12,
        color: colors.gray02,
    }
});
