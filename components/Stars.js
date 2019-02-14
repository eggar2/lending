import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import colors from '../assets/colors';

export default class Stars extends Component {
    get stars() {
        const { votes, size, color, host, reviews } = this.props;
        const starsNumber = parseInt(votes);
        const starElements = [];
        for (let i = 0; i < 5; i++) {
            starElements.push(
                <Icon
                    key={`star-${i}`}
                    name="star"
                    size={size}
                    color={starsNumber > i ? color : colors.gray02}
                    style={styles.star}
                />,
            );
        }
        return starElements;
    }

    render() {
        const { host, reviews } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.stars}>
                    {this.stars}
                    <Text style={styles.votesNumber}>
                        {reviews ? reviews : ''} {host ? '- ' + host : ''}
                    </Text>
                </View>
            </View>
        );
    }
}

Stars.propTypes = {
    votes: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    },
    star: {
        marginRight: 1,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    votesNumber: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 1,
        marginLeft: 3,
    },
});
