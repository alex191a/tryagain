import React, { Component } from 'react';
import { View } from 'react-native';
import ButtonList from '../buttonlist';

function Lol(navigation) {
    console.log("f")
    return navigation.navigate('RoomChart')
  };
export default class roomlist extends Component {

  render() {
    return (
      <View>
            <ButtonList btnfunc={() => Lol(this.props.navigation)} />
      </View>
    );
  }
}