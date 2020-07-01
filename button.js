import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from 'react-native';

export default function button(props,{navigation}) {
    // redirectButton = (name) => {
    // }
    return (
        <View>
            <Button
                title={props.name}
                onPress={() => props.function()}
            />
        </View>
    )
}