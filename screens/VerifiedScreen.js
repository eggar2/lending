import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class VerifiedScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
	super(props);
	this.state = {
	  verifiedNum: "Your mobile number is now verified",
	}
  }

  render(){
	return (
	  <View style={styles.container}>
	  	<View style={styles.contentContainer}>
		  <View style={styles.fieldContainer}>
            <View style={styles.tyTextContainer}>
                <Icon
                    name='check-circle'
                    type='font-awesome'
                    color='#fff'
                    size={80}
                    iconStyle={{marginBottom: 15}}
                />
		  	    <Text style={styles.verifyText}>Thank you!</Text>
                <Text style={styles.codeText}>{this.state.verifiedNum}</Text>
            </View>
			
		  </View>
		  <View style={styles.buttonContainer}>
		  	<TouchableOpacity
         		style={styles.buttonStyle}
         		onPress={this.signIn}
       		>
         		<Text style={styles.buttonText}>Continue</Text>
       		</TouchableOpacity>
		  </View>
		</View>
	  </View>
	)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#008489',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	paddingTop: 30,
	paddingLeft: 30,
	paddingRight: 30
  },
  contentContainer: {
	flex: 1,
  },
  fieldContainer: {
	flex: 2,
	justifyContent: 'center'
  },
  buttonContainer: {
	flex: 1
  },
  verifyText: {
	  color: '#fff',
	  fontSize: 35,
	  fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center'
  },
  buttonStyle: {
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  padding: 10,
	  borderRadius: 10
  },
  buttonText: {
	color: '#008489',
    fontSize: 20,
    fontWeight: 'bold'
  },
  tyTextContainer: {
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'center',
    alignItems: 'center'
  },
  codeText: {
	  fontSize: 18,
      color: '#fff',
      textAlign: 'center'
  },
  
});
