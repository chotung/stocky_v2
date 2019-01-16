import React, { Component } from 'react'
import { Line } from "react-chartjs-2";
// import axios from 'axios'

export default class Graph extends Component {

  state = {
    chartData: []
  }

  // static defaultProps = {
    
  // }

  render() {
    // debugger
    // console.log('GRAPH PROPS', this.props)
    // console.log('GRAPH STATE', this.state)
    return (
      <div className='chart' >
        <Line
          data={this.props.chartData}
          options={{
            title: {
              display: false
            },
            legend: {
              display: false
            },
            maintainAspectRatio: true
          }}
        /> 
      </div>
    )
  }
}
