import React, { Component } from 'react';
import GraphContainer from './GraphContainer';
import StockHeader from '../components/StockHeader';
import StockDetails from '../components/StockDetails';
import axios from "axios";
import HomeLogo from '../components/HomeLogo';



class StocksContainer extends Component {

  state = {
    data:[],
    // chartData:{},
    timeRange: {
      oned: '1d',
      onem: '1m',
      sixm: '6m',
      ytd: 'ytd',
      oney: '1y',
      twoy: '2y',
      fivey: '5y'
    },
    testRange: '1d',
  }

  
  
  componentDidMount() {
    this.getQuote()

  }


  getQuote = () => {
    const symbol = this.props.stock.value.symbol
    // const symbol = 'AAPL'
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
    .then(quote => {
      this.setState({
        data: quote.data
      })
    })
  }

  // getTimeData = () => {
  //   const range = this.state.testRange
  //   const symbol = this.props.stock.value.symbol
  //   let quoteH = []
  //   let minutes = []
  //   axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
  //     .then(res => {
  //       let quotes = res.data

  //        quotes.map(quote => {
  //         let tempTime = quote.minute.split(':')
  //         let combined = tempTime[0] + tempTime[1]
  //         let parsed = parseInt(combined)
  //         if (parsed % 5 === 0) {
  //           // console.log(quote.minute)
  //           // console.log(quote.high)
  //           quoteH.push(quote.high)
  //           minutes.push(quote.minute)
  //         }

  //       })
  //       this.setState({
  //         quoteH,
  //         minutes
  //       })
  //     })
  // }


  
  

  render() {
    // debugger
    // console.log('socks container', this.state)
    const {  companyName, close, changePercent, change, } = this.state.data
    const {  data } = this.state
    const { symbol } = this.props.stock.value
    return (
      <div>
        <HomeLogo home={this.props.home} />
       
        {/* <GraphContainer chartData={chartData} /> */}
        <StockHeader symbol={symbol} name={companyName} price={close} net={changePercent} price_change={change} />
        <StockDetails stock={data} /> 
        <GraphContainer symbol={symbol} />
        
      </div>
    );
  }
}

export default StocksContainer;