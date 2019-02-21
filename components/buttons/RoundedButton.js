import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class RoundedButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { label, textColor, bgColor } = this.props;
        return (
            <View>
               <Text style={[styles.buttonStyle, 
                    {
                        backgroundColor: bgColor,
                        color: textColor,
                    }
               ]}>
                    {label}
                </Text>
            </View>
        );
    }
}

RoundedButton.propTypes = {
    label: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 15,
        borderRadius: 26,
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',
        overflow: 'hidden'
    }
});
