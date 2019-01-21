import React, { Component } from 'react'
import { Line } from "react-chartjs-2";
// import axios from 'axios'

export default class Graph extends Component {

  state = {
    chartData: [],
    test:'test'
  }

  convertRange = () => {
    let range = this.props.range
    switch(range) {
      case '1d':
        return '1 Day'
      case '5d':
        return '5 Days'
      case '1m':
        return '1 Month'
      case '6m':
        return '6 Months'
      case 'YTD':
        return 'YTD'
      case '1y':
        return '1 Year'
      case '5y':
        return '5 Year'
      default:
      break
    }
  }

  render() {
    const { chartData } = this.props
    return (
      <div className='uk-height-1-1 uk-width-1-1 chart' >
        <Line
          data={chartData}
          options={{
            title: {
              display: true,
              text: this.convertRange()
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
