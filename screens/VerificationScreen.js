import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class VerificationScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
	super(props);
	this.state = {
	  verify: "",
	  cpNumber: "+63 9161234567"
	}
  }

  render(){
	return (
	  <View style={styles.container}>
	  	<View style={styles.contentContainer}>
		  <View style={styles.fieldContainer}>
            
		  	<Text style={styles.verifyText}>Enter verification</Text>
            <View style={styles.codeTextContainer}>
                <Text style={styles.codeText}>We sent you 6 digit code to</Text>
                <Text style={styles.codeText}>{this.state.cpNumber}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({verfiy: text})}
                    secureTextEntry={true}
                    placeholder="0"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({verify:text})}
                    secureTextEntry={true}
                    placeholder="0"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({verify:text})}
                    secureTextEntry={true}
                    placeholder="0"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({verify:text})}
                    secureTextEntry={true}
                    placeholder="0"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({verify:text})}
                    secureTextEntry={true}
                    placeholder="0"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({verify:text})}
                    secureTextEntry={true}
                    placeholder="0"
                />
            </View>
			
		  </View>
		  <View style={styles.buttonContainer}>
		  	<TouchableOpacity
         		style={styles.buttonStyle}
         		onPress={this.signIn}
       		>
         		<Text style={styles.buttonText}>Verify</Text>
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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
	  color: '#fff',
	  fontWeight: 'bold',
      fontSize: 16,
      padding: 10,
      borderBottomWidth: 4,
      borderColor: '#fff',
      textAlign: 'center'
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
  codeTextContainer: {
    marginBottom: 15,
    marginTop: 10
  },
  codeText: {
	  fontSize: 18,
      color: '#fff',
      textAlign: 'center'
  },
  
});
