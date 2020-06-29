import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from 'react-native';
import { ting } from './screens/HomeScreen';

export default function button(props) {
    // redirectButton = (name) => {
    // }
    return (
        <View>
            <Button
                title={props.name}
                onPress={() => ting()}
            />
        </View>
    )
}