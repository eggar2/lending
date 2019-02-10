import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class SavedScreen extends React.Component {
  static navigationOptions = {
    title: 'Saved',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>SavedScreen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
