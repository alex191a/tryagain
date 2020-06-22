import react from 'react';

export default function arduino()
{
getPerson = () => { 
    const arduinoId = this.props.match.params.arduinoId;
    axios.get('http://infoskaerm.pcvdata.dk/user/${arduinoId}').then(res =>{
      this.setState({oldData: res.data,
         SpecificData: res.data,
         chartVisible: true, 
         room: res.data[0].Room, 
         UpdatedVar: this.getPerson
        }),
      this.InsertDataToChart(res.data);
    });
  };
}