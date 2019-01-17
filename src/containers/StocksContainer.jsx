import React, { Component } from 'react'
import GraphContainer from './GraphContainer'
import StockHeader from '../components/StockHeader'
import StockDetails from '../components/StockDetails'
import axios from 'axios'
import HomeLogo from '../components/HomeLogo'
import '../styles/stockContainer.css'

class StocksContainer extends Component {
  state = {
    data: [],
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

  componentDidMount () {
    this.getQuote()
  }

  getQuote = () => {
    const symbol = this.props.stock.value.symbol
    // const symbol = 'AAPL'
    axios
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
      .then(quote => {
        this.setState({
          data: quote.data
        })
      })
  }



  render () {
    // debugger
    // console.log('socks container', this.state)
    const { companyName, close, changePercent, change } = this.state.data
    const { data } = this.state
    const { symbol } = this.props.stock.value
    return (
      <div className="one-stock">
          <HomeLogo home={this.props.home} />

        <GraphContainer symbol={symbol} />

        <div className='stock-card'>
          <StockHeader
            symbol={symbol}
            name={companyName}
            price={close}
            net={changePercent}
            price_change={change}
          />
          <StockDetails stock={data} />
        </div>
      </div>
    )
  }
}

export default StocksContainer
