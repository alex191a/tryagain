import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from 'react-native';

export default class RoomBtn extends Component {
    render() {
        return (
            <View>
                <Button title={this.props.name} onPress={() => this.props.func()} />
            </View>
        )
    }
}