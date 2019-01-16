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
    console.log('GRAPH PROPS', this.props)
    // console.log('GRAPH STATE', this.state)

    return (
      <div className='chart' >
      {/* <h3 onClick={props.timeRange} value="1d" >1D</h3>
      <h3 onClick={props.timeRange} value="5d" >5D</h3>
      <h3 onClick={props.timeRange} value="" >1M</h3>
      <h3 onClick={props.timeRange} value="" >6M</h3>
      <h3 onClick={props.timeRange} value="" >YTD</h3>
      <h3 onClick={props.timeRange} value="" >1Y</h3>
      <h3 onClick={props.timeRange} value="" >5Y</h3>
      <h3 onClick={props.timeRange} value="" >MAX</h3> */}
        <Line
          data={this.props.chartData}
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
