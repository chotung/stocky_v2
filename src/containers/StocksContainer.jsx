import React, { Component } from 'react'
import GraphContainer from './GraphContainer'
import StockHeader from '../components/StockHeader'
import StockDetails from '../components/StockDetails'
import axios from 'axios'
import '../styles/stockContainer.css'
import NewsContainer from './NewsContainer';

class StocksContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      symbol: props.stockSymbol,
      addData: [],
      news: []
    }

    this.getQuote()
    this.getStats()
    this.getNews()
  }
  

  componentDidUpdate = (prevProps, prevState) => {
    if(this.props.stockSymbol !== prevProps.stockSymbol) {
      this.getQuote()
      this.getStats()
      this.getNews()
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

  getStats = () => {
    // const symbol = this.props.stock.value.symbol
    const symbol = this.state.symbol
    axios
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/stats`)
      .then(quote => {
        this.setState({
          addData: quote.data
        })
      })
  }

  getNews = () => {
    const symbol = this.state.symbol
    axios
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/news/last/5`)
      .then(article => {
        this.setState({
          news: article.data
        })
      })
  }


  render () {
    const { companyName, close, changePercent, change } = this.state.data
    const { data, symbol, addData, news } = this.state
    // console.log(this.state.addData)
    return (
      <div className="one-stock">
        <div className=' uk-grid-match uk-grid uk-grid-stack stock-info'>
            <StockHeader
              symbol={symbol}
              name={companyName}
              price={close}
              net={changePercent}
              price_change={change}

            />
            <StockDetails stock={data} addData={addData} />
            <GraphContainer stockSymbol={symbol} />
            <NewsContainer news={news} />
          </div>
      </div>
    )
  }
}

export default StocksContainer
