import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
//import vav from 'LinkScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import Buttonl from '../button.js';
import { mis,roomchart } from '../App.js'
function Separator() {
  return <View style={styles.separator} />;
}

export default class roomlist extends Component{
  state = {
      roomId: 45
      
  }
  render(){
      var roomButtons =[]
      this.props.roomNames.forEach(element => {
          roomButtons.push(<Buttonl name= {element}/>)
      });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
         {roomButtons}
        </View>
      </ScrollView>
   </SafeAreaView>
  );
  }
}
roomlist.navigationOptions = {
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

export function ting() {
  return mis()
}
