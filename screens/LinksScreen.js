import { AreaChart, Grid} from 'react-native-svg-charts';
import React, { Component } from 'react';
import { View } from 'react-native';
import * as shape from 'd3-shape';
export default class HttpExample extends Component {
  state = {
    data: [],
    temp: [],
    co2: []
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
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  equaldata = (chartdata) => {
    let temP = [];
    let cO2 = [];
    chartdata.forEach(element => {
      temP.push(element.Temp);
      cO2.push(element.CO2);
    });
    this.setState({
      temp: temP,
      co2: cO2,
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