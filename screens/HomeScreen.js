import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import colors from '../assets/colors';
import Lenders from '../components/explore/Lenders';
import lendersList from '../assets/data/lenders';
import Companies from '../components/explore/Companies';
import companiesList from '../assets/data/companies';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const dimensions = Dimensions.get('window');
    return (
      <View style={styles.wrapper}>
        <SearchBar />
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.heading}>Companies that can help you</Text>
          <View style={styles.lenders}>
            <Lenders lenders={lendersList} />
          </View>

          <Text style={styles.heading}>Introducing Lendster Plus</Text>
          <Text style={styles.landingDesc}>A new selection of lending companies verified for quality and relax</Text>

          <View style={styles.landingImage}>
            <Image
              style={{ width: '100%' }}
              source={require('../assets/data/photos/listing10.png')}
            />
          </View>

          <Text style={styles.heading}>Lending Companies around the world</Text>
          <View style={styles.companiesWrapper}>
            <Companies companies={companiesList} />
          </View>

          <TouchableOpacity style={styles.buttonStyle} >
            <Text style={styles.buttonText}>Show all (2000+)</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    marginTop: 20,
    flex: 1
  },
  scrollview: {
    paddingTop: 100,
  },
  lenders: {
    flex: 1
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 10,
    color: colors.gray04,
  },
  landingDesc: {
    paddingHorizontal: 20
  },
  landingImage: {
    padding: 20,
  },
  companiesWrapper: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  buttonStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#666',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    })
  },
  buttonText: {
    color: '#008489',
    fontSize: 16,
    fontWeight: '500'
  },
});
