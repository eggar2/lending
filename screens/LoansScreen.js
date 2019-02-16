import React from 'react';
import {
  Text,
  View,
  Platform,
  TouchableHighlight,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Icon } from 'expo';
import colors from '../assets/colors';
import LoanDetails from '../components/LoanDetails';
import loansList from '../assets/data/loans';

export default class LoanScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'My Loan Record',
    headerLayoutPreset: 'center',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    },
    headerRight: (
      <Text>{''}</Text>
    ),
    headerLeft: (
      <TouchableHighlight
        onPress={() => { navigation.navigate('Home'); }}
        underlayColor={colors.gray01}
        style={{ marginLeft: 10, paddingHorizontal: 10 }}
      >
        <Icon.Ionicons
          name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}
          size={26}
        />
      </TouchableHighlight>
    ),
  });

  selectLoanDetails = () => {
    // go to single loan detail
    this.props.navigation.navigate('LoanDetail');
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <LoanDetails loans={loansList} onPress={this.selectLoanDetails} />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0
  }
});