import {LineChart} from 'react-native-chart-kit'
import React, { Component } from 'react'
import { View, Text } from 'react-native'
//const screenWidth = Dimensions.get("window").width;
class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://infoskaerm.pcvdata.dk/getall', {
      })
      .then((response) => response.json())
      .then((responseJson) => {
         this.setState({
            data: responseJson
         })
         console.log (this.state.data);
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Text>
               {this.state.data.body}
            </Text>
         </View>
      )
   }
}
export default HttpExample