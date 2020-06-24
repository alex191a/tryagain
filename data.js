// componentDidMount() {
//     axios.get(`http://localhost:42000/getmonitoring`)
//       .then(res => {
//         const nameList = res.data;
//         this.setState({ nameList });
//       })
//   }
//   InsertDataToChart = (chartData) => {
//     let temp= [];
//     let co2= [];
//     chartData.forEach(element => {
//       temp.push(element.temp);
//       co2.push(element.co2);
//      console.log(temp);
//      console.log(co2);
//     });
//   }