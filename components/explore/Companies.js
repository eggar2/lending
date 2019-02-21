import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Dimensions
} from 'react-native';
import colors from '../../assets/colors';
import HeartButton from '../buttons/HeartButton';
import Stars from '../Stars';
import AutoHeightImage from 'react-native-auto-height-image';

export default class Companies extends Component {

    handlePressCompany = () => {
        this.props.onPress();
    }

    get Companies() {
        const { companies } = this.props;
        const dimensions = Dimensions.get('window');
        return companies.map((company, index) => (
            <TouchableOpacity
                key={index}
                style={styles.companyWrapper}
                onPress={this.handlePressCompany}
            >
                <View>
                    <View style={styles.addToFavoriteBtn}>
                        <HeartButton
                            color={colors.white}
                            selectedColor={colors.pink}
                        />
                    </View>
                    <AutoHeightImage
                        width={(dimensions.width / 2) - 35}
                        source={company.photo}
                        style={styles.companyImage}
                    />
                    <View style={styles.listingDetail}>
                        <Text style={styles.listingTitle} numberOfLines={2} >
                            {company.name}
                        </Text>
                        <Text numberOfLines={2}>
                            Up to Php {company.offer}
                            {"\n"}
                            Interest rate {company.interest}
                        </Text>
                        <Stars 
                            votes={company.stars} 
                            host={company.host} 
                            reviews={company.reviews}
                            size={10} 
                            color={colors.green02} />
                    </View>
                </View>
            </TouchableOpacity>
        ));
    }

    render() {
        return (
            <View style={styles.companiesWrapper}>
                {this.Companies}
            </View>
        );
    }
}

Companies.propTypes = {
    onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    companiesWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    companyWrapper: {
        height: undefined,
        width: '50%',
        marginBottom: 20,
    },
    addToFavoriteBtn: {
        position: 'absolute',
        right: 20,
        top: 7,
        zIndex: 2,
    },
    companyImage: {
        marginBottom: 7,
        alignItems: 'center',
    },
    listingDetail: {
        paddingHorizontal: 15,
        paddingBottom: 10
    },  
    listingTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.gray04,
        marginTop: 2,
    },
    listingPrice: {
        color: colors.gray04,
        marginTop: 4,
        marginBottom: 2,
        fontSize: 12,
        fontWeight: '300',
    },
});
