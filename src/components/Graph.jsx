import React, { Component } from 'react'
import { Bar, Line, Pie } from "react-chartjs-2";

export default class Graph extends Component {

  state = {
    chartData: this.props.chartData
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }

  render() {
    console.log(this.props.chartData);
    return (
      <div className='chart' >
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Test',
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        /> 
      </div>
    )
  }
}
