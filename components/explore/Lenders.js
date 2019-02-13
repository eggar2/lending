import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Text,
} from 'react-native';
import colors from '../../assets/colors';
import iPhoneSize from '../../helpers/utils';

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
                    <Image
                        source={lender.logo}
                        style={styles.image}
                    />
                    <View style={styles.lenderDetailWrapper}>
                        <Text style={styles.lenderName}>{lender.name}</Text>
                        <Text style={styles.lenderDesc}>{lender.description}</Text>
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
        height: cardSize,
        marginRight: cardMargin,
        marginLeft: cardMargin,
        padding: 5,
    },
    image: {
        width: '100%',
        height: 30,
    },
    lenderWrapper: {
        borderWidth: 0,
        // borderColor: colors.gray01,
        elevation: 5,
    },
    lenderDetailWrapper: {
        backgroundColor: colors.gray01,
        padding: 5,
    },
    lenderName: {
        fontSize: 15
    },
    lenderDesc: {
        fontSize: 12,
        color: colors.gray02,
    }
});
