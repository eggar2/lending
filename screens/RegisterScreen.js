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
import { MonoText } from '../components/StyledText';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
	super(props);
	this.state = {
	  name: "",
	  email: "",
	  password: ""
	}
  }

  render(){
	return (
	  <View style={styles.container}>
	  	<View style={styles.contentContainer}>
		  <View style={styles.fieldContainer}>
		  	<Text style={styles.loginText}>Fill the details</Text>
            <View style={styles.inputContainer}>
                <Icon
                    name='mobile'
                    type='font-awesome'
                    color='#fff'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({email: text})}
                    placeholder="Mobile"
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon
                    name='shield'
                    type='font-awesome'
                    color='#fff'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({password:text})}
                    secureTextEntry={true}
                    placeholder="Password"
                />
            </View>
			<Text style={{color: '#fff'}}>Forgot Password</Text>
		  </View>
		  <View style={styles.buttonContainer}>
		  	<TouchableOpacity
         		style={styles.buttonStyle}
         		onPress={this.signIn}
       		>
         		<Text style={styles.buttonText}>Sign In</Text>
       		</TouchableOpacity>
			<View style={styles.regContainer}>
				<Text style={styles.regText}>Already have an account? </Text>
				<Text style={[styles.regText, styles.regLink]}>Login</Text>
			</View>
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
    borderBottomWidth: 1,
    borderColor: '#fff',
    alignItems: 'center'
  },
  input: {
	  color: '#fff',
	  fontWeight: 'bold',
      fontSize: 16,
      padding: 10
  },
  loginText: {
	  color: '#fff',
	  fontSize: 30,
	  fontWeight: 'bold',
	  marginBottom: 15
  },
  buttonStyle: {
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  padding: 10,
	  borderRadius: 10
  },
  buttonText: {
	color: '#008489',
	fontSize: 20
  },
  regContainer: {
	  flex: 1,
	  flexDirection: 'row',
	  justifyContent: 'center',
	  marginTop: 15
  },
  regText: {
	  fontSize: 18,
	  color: '#fff'
  },
  regLink: {
	  color: '#ff0000'
  }
  
});
