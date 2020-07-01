import React, { Component } from 'react';
import { StyleSheet, Button, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

export default class RoomBtn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Button title={this.props.name} onPress={() => this.props.func()} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
});
