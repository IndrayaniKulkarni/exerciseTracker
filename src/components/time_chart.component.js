//import React from 'react';
import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import ReactApexChart from "react-apexcharts";
import axios from "axios";
//array parameters called x_axis_data - date
//y-axis_axis_data - duration in mins
//desc - description 
const getConfig = (x_axis_data,desc,y_axis_data) => {

// const s = desc.map((s)=>s);

  return {
    series: [
      {
        name: desc.map((s)=>s),
        data: y_axis_data,

      },
     
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          
          horizontal: false,
          columnWidth: "10%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      xaxis: {
        
        categories: x_axis_data, 
        
      },
      yaxis: {
        title: {
          text: "Time spend in minutes",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {

          formatter: 
          
          function (val) {
            return  val + " minutes" ;
            //return exercise name and duration
          },
        },
      },
    },
  };
};
export default class ApexChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: Date(),
      users: [], //listing all -array
      x_axis_data: [],
      y_axis_data: [],
      desc: [],
    };
    this.state = {};
  }
  // componentDidMount(){
  //   axios.get('http://localhost:5000/exercises/'+this.props.match.params.id )
  //   .then(response => {
  //       this.setState({
  //           username: response.data.username,
  //           description: response.data.description,
  //           duration: response.data.duration,
  //           date: new Date(response.data.date)
  //       })
  //   })
  //   .catch(function (error) {
  //       console.log(error);
  //     })
  //}
  componentDidMount() {
    console.log(this.props.match);
    axios
      .get(
        "http://localhost:5000/exercises/" + this.props.match.params.username
      )
      .then((response) => {
    //data date and duration are taken as response and assigned to array
        let x_axis_data = []
        let y_axis_data = []
        let desc = []
        response.data.forEach(i=> {
          x_axis_data.push(i.date)
          y_axis_data.push(i.duration)
          desc.push(i.description)
        })
        let {series, options} = getConfig(x_axis_data,desc,y_axis_data)
        this.setState({series, options})
      }
      )
      // .then((response)=>
      // {
      //   this.state ({ username: response.data.username})
      // })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          {/* <h5>Name :{this.state.username}</h5> */}
          {/* <h5>Description :{this.state.description}</h5>
         <h5>Duration :{this.state.duration}</h5>
         <h5>Date : {this.state.date}</h5> */}
        </div>

        {this.state && this.state.options && this.state.series && <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>}
      </div>
    );
  }
}

/*const domContainer = document.querySelector("#app");
ReactDOM.render(React.createElement(ApexChart), domContainer);*/
