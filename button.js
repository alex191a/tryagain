import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView} from 'react-native';
import mis from './homescreen.js';

export default function button(props)
{
    redirectButton = (name) => {
      
    }
        return(
            <View>
            <Button 
            title= {props.name}
            onPress={() => Alert.alert('ged'), mis} 
            />
            </View>
        
    )
}