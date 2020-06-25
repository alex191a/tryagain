import { AreaChart, Grid} from 'react-native-svg-charts';
import React, { Component } from 'react';
import { View } from 'react-native';
import * as shape from 'd3-shape';
import homescreen from './HomeScreen.js'
//const screenWidth = Dimensions.get("window").width;
export default class HttpExample extends Component {
  state = {
    data: [],
    temp: [],
    co2: [],
    time: []
  }
  componentDidMount = () => {
    fetch('https://infoskaerm.pcvdata.dk/getall', {
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson
        })
        this.equaldata(this.state.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  equaldata = (chartdata) => {
    let temP = [];
    let cO2 = [];
    let Time = [];
    chartdata.forEach(element => {
      temP.push(element.Temp);
      cO2.push(element.CO2);
      Time.push(element.UpdatedAt);
    });
    this.setState({
      temP: this.state.temp,
      cO2: this.state.co2,
      Time: this.state.time,
      temp: temP,
      co2: cO2,
      time: Time
    })
  }
  render() {
    return (
      <View>
        <AreaChart
          style={{ height: 200, y: [10, 20, 30], x: this.state.time }}
          data={this.state.temp}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        >
          <Grid />
        </AreaChart>
      </View>
    )
  }
}