import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import ButtonList from '../buttonlist';

function Separator() {
  return <View style={styles.separator} />;
}
export default class roomlist extends Component {
  state = {
    roomId: 45
  }

  render() {
    return (
      <View>
        <ButtonList btnfunc={() => Lol()} />
      </View>
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
function Lol() {
  console.log("f")
  return alert("HEj")
};
// function Mis({navigation}){
//     return(
//         console.log(navigation),
//     navigation.navigate('RoomChart')
//     )
//     };
