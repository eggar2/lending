import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class InboxScreen extends React.Component {

    static navigationOptions = {
        title: 'Inbox',
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text>Inbox Screen</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }, 
})