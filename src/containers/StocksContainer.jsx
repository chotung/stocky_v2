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
    testRange: '1d',
  }
  
  UNSAFE_componentWillMount() {
    this.chartData()
  }

  componentDidMount() {
    this.getQuote()
    // this.chartData()
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
  


  

  chartData = () => {
    const range = this.state.testRange
    const symbol = this.props.stock.value.symbol
    let label = []
    let open = []

    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
      .then(res => {
        let quotes = res.data

        return quotes.map(quote => {
          let tempTime = quote.minute.split(':')
          let combined = tempTime[0] + tempTime[1]
          console.log('combined', combined)
          let parsed = parseInt(combined)
          console.log('parsed', parsed)
          if (parsed % 5 === 0) {
            label.push(quote.label)
            console.log(label)
            open.push(quote.open)
            console.log(open)
          }
        })
      })

 

    this.setState({
      chartData: {
        labels: label,
        // labels: ['min1', 'min2'],
        //  These labels need to be minutes
        datasets: [
          {
            fill:false,
            // data: [12, 14, 15],
            data: open,
            // Data points are stock high prices
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
    // console.log('socks container', this.state)
    const { symbol, companyName, close, changePercent, change } = this.state.data
    console.log(this.state.chartData)
    
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