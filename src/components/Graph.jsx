import React, { Component } from 'react'
import { Line } from "react-chartjs-2";
// import axios from 'axios'

export default class Graph extends Component {

  state = {
    chartData: [],
    test:'test'
  }

  // componentDidMount() {
  //   this.forceUpdate()
  // }
  
  


  // static defaultProps = {
    
  // }

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
    // debugger
    console.log('GRAPH PROPS', this.props)
    // console.log('GRAPH STATE', this.state)
    // this.forceUpdate()

    const { chartData, range } = this.props
    return (
      <div className='chart' >
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
