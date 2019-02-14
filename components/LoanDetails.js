import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Text,
} from 'react-native';
import colors from '../assets/colors';
import columns from '../assets/layout/Columns.style';
import AutoHeightImage from 'react-native-auto-height-image';

export default class LoanDetails extends Component {

    handlePressDetail = () => {
        this.props.onPress();
    }

    get Loans() {
        const { loans } = this.props;
        return loans.map((loan, index) => (
            <TouchableOpacity
                key={loan.id}
                onPress={this.handlePressDetail}
            >
                <View style={[columns.twoColumnWrapper, styles.detailWrapper]}>
                    <View style={[columns.threeColumnWrapperItem, { width: '25%'}]}>
                        <AutoHeightImage 
                            width={70}
                            source={loan.photo}
                            style={styles.loanCompanyImage}
                        />
                    </View>
                    <View style={[columns.threeColumnWrapperItem, {width: '35%'}]}>
                        <Text style={styles.headerTitle}>{loan.company}</Text>
                        <Text>{loan.date}</Text>
                    </View>
                    <View style={[columns.threeColumnWrapperItem, { width: '40%' }]}>
                        <View style={[columns.twoColumnWrapper, styles.amounDetails]}>
                            <View style={[columns.twoColumnWrapperItem, styles.detailLabel]}>
                                <Text style={styles.detailText}>Loan Amount</Text> 
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.detailValue]}>
                                <Text style={[styles.detailText, {textAlign: 'right'}]}>{loan.amount}</Text> 
                            </View>
                        </View>
                        <View style={[columns.twoColumnWrapper, styles.amounDetails]}>
                            <View style={[columns.twoColumnWrapperItem, styles.detailLabel]}>
                                <Text style={styles.detailText}>Loan Terms</Text>
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.detailValue]}>
                                <Text style={[styles.detailText, { textAlign: 'right' }]}>{loan.termValue}{loan.term}</Text>
                            </View>
                        </View>
                        <View style={[columns.twoColumnWrapper, styles.amounDetails, {borderBottomWidth: 0}]}>
                            <View style={[columns.twoColumnWrapperItem, styles.detailLabel]}>
                                <Text style={styles.detailText}>Status</Text>
                            </View>
                            <View style={[columns.twoColumnWrapperItem, styles.detailValue]}>
                                <Text style={[styles.detailText, { textAlign: 'right' }]}>{loan.status}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        ));
    }

    render() {
        return (
            <View style={styles.detailsWrapper}>
                {this.Loans}
            </View>
        );
    }
}

LoanDetails.propTypes = {
    onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    detailsWrapper: {

    },
    detailWrapper: {
        marginHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray06,
        paddingBottom: 10,
        marginHorizontal: 0,
    },
    loanCompanyImage: {
        marginTop: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.pink,
    },
    amounDetails: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray06,
        paddingBottom: 4,
        marginBottom: 3,
        marginHorizontal: 0,
        marginTop: 0
    },
    detailLabel: {
        width: '60%',
    },
    detailValue: {
        width: '40%'
    },  
    detailText: {
        fontSize: 12
    },  
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.gray04,
    },
});
