import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Buttonl from '../button.js';
function Separator() {
  return <View style={styles.separator} />;
}
export default class roomlist extends Component{
  state = {
      roomId: 45
  }
  
  render(){
      var roomButtons =[]
      var roomNames = ['ting', 'ting2','ting3']
          roomNames.forEach(element => {
          roomButtons.push(<Buttonl name= {element} function={Lol()} />)
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
function Lol ({navigation}){
    return(
        console.log(navigation)
    )
};
// function Mis({navigation}){
//     return(
//         console.log(navigation),
//     navigation.navigate('RoomChart')
//     )
//     };
