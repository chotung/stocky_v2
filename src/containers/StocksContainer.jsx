import React, { Component } from 'react'
import GraphContainer from './GraphContainer'
import StockHeader from '../components/StockHeader'
import StockDetails from '../components/StockDetails'
import axios from 'axios'
// import HomeLogo from '../components/HomeLogo'
import '../styles/stockContainer.css'
import NewsContainer from './NewsContainer';

class StocksContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      symbol: props.stockSymbol
    }
    this.getQuote()
  }
  

  componentDidUpdate = (prevProps, prevState) => {
    if(this.props.stockSymbol !== prevProps.stockSymbol) {
      this.getQuote()
    }
  }

  static getDerivedStateFromProps(props, state) {  
    if(props.stockSymbol !== state.symbol) {
      return {
        symbol:props.stockSymbol
      }
    }
    return null
  }

  

  
  getQuote = () => {
    // const symbol = this.props.stock.value.symbol
    const symbol = this.state.symbol
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
    const { companyName, close, changePercent, change, } = this.state.data
    const { data, symbol } = this.state
    // const { symbol } = this.props.stock.value

    // console.log('the ticker symbol is : ', symbol)
    return (
      <div className="one-stock">
          {/* <HomeLogo home={this.props.home} /> */}
          <StockHeader
            symbol={symbol}
            name={companyName}
            price={close}
            net={changePercent}
            price_change={change}
          />

        {/* <div className='stock-card'> */}
          <StockDetails stock={data} />
          <GraphContainer stockSymbol={symbol} />
          <NewsContainer news={this.props.news} />
        {/* </div> */}

      </div>
    )
  }
}

export default StocksContainer
