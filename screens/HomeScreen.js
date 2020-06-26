import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
//import vav from 'LinkScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import Buttonl from '../button.js';
import { mis } from '../App.js'
function Separator() {
  return <View style={styles.separator} />;
}

class index extends Component{
  state = {
      roomId: 45
      
  }
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
         <Buttonl name="a1.40" />
        </View>
      </ScrollView>
   </SafeAreaView>
  );
  }
}
index.navigationOptions = {
    header: null,
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default inde
export function mis(){
  return (
    mis
  )

}