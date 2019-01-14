import React, { Component } from 'react'
import { Line } from "react-chartjs-2";

export default class Graph extends Component {

  state = {
    chartData: this.props.chartData
  }

  static defaultProps = {
    
  }

  render() {
    // console.log(this.props.chartData);
    return (
      <div className='chart' >
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: false
            },
            legend: {
              display: false
            }
          }}
        /> 
      </div>
    )
  }
}
