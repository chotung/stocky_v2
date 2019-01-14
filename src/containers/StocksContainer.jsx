import React, { Component } from 'react';
import GraphContainer from './GraphContainer';
import StockHeader from '../components/StockHeader';
import StockDetails from '../components/StockDetails';
import axios from "axios";
import HomeLogo from '../components/HomeLogo';



class StocksContainer extends Component {

  state = {
    data:[],
    chartData:{},
    timeRange: {
      oned: '1d',
      onem: '1m',
      sixm: '6m',
      ytd: 'ytd',
      oney: '1y',
      twoy: '2y',
      fivey: '5y'
    },
    testRange: '1d'
  }
  
  UNSAFE_componentWillMount() {
    this.chartData()
  }

  componentDidMount() {
    this.getQuote()
    this.getTimeData()
  }


  getQuote = () => {
    const symbol = this.props.stock.value.symbol
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
    .then(quote => {
      this.setState({
        data: quote.data
      })
    })
  }

  getTimeData = () => {
    const range = this.state.testRange
    axios.get(`https://api.iextrading.com/1.0/stock/aapl/chart/${range}`)
      .then(res => {
        let times = res.data

        return times.map(time => {
          // let tempTime = time.minute.split(':')
          // let combined = tempTime[0] + tempTime[1]
          // let parsed = parseInt(combined)
          // if (parsed % 5 === 0) {
          //   console.log(time.minute)
          //   return 
          // }
          return 'hello'
        })
      })
  }
  

  chartData = () => {
    this.setState({
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            fill:false,
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 225, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }
  

  render(props) {
    console.log('stocks container', this.state)
    const { symbol, companyName, close, changePercent, change } = this.state.data
    
    return (
      <div>
        <HomeLogo home={this.props.home} />
        <StockHeader symbol={symbol} name={companyName} price={close} net={changePercent} price_change={change} />
        <GraphContainer chartData={this.state.chartData} />
        <StockDetails stock={this.state.data} />
        
      </div>
    );
  }
}

export default StocksContainer;