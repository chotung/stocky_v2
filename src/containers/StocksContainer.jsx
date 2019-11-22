import React, { Component } from 'react'
import GraphContainer from './GraphContainer'
import StockHeader from '../components/StockHeader'
// import StockDetails from '../components/StockDetails'
import axios from 'axios'
import '../styles/stockContainer.css'
// import NewsContainer from './NewsContainer';
// import { async } from 'q';


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
    // this.getStats()
    // this.getNews()
  }
  

  componentDidUpdate = (prevProps, prevState) => {
    if(this.props.stockSymbol !== prevProps.stockSymbol) {
      this.getQuote()
      // this.getStats()
      // this.getNews()
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

  
  getQuote = async () => {
    // const symbol = this.props.stock.value.symbol

    const symbol = this.state.symbol
    let response = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}`)

        this.setState({
          data: response.data.profile
        })
  }
  

  getStats = () => {
    // const symbol = this.props.stock.value.symbol

    // const symbol = this.state.symbol
    // axios
    //   .get(`https://api.iextrading.com/1.0/stock/${symbol}/stats`)
    //   .then(quote => {
    //     this.setState({
    //       addData: quote.data
    //     })
    //   })
  }



  render () {
    console.log("stock's container", this.state);
    const { companyName,  price, changesPercentage, changes } = this.state.data
    // const { companyName, ceo, price, changesPercentage, changes } = this.state.data
    // const {  symbol } = this.state
    // const { data, symbol, addData } = this.state
    const { symbol } = this.state
    
    // console.log( companyName )
    // console.log('le state', this.state.data.profile.ceo)
    // console.log(companyName, ceo, price, changes, changesPercentage);
    return (
      <div className="one-stock">
        <div className=' uk-grid-match uk-grid uk-grid-stack stock-info'>
            <StockHeader
              symbol={symbol}
              name={companyName}
              price={price}
              net={changesPercentage}
              price_change={changes}

            />
            {/* <StockDetails stock={data} addData={addData} /> */}
            <GraphContainer stockSymbol={symbol} />
            {/* <NewsContainer news={news} /> */}
          </div>
      </div>
    )
  }
}

export default StocksContainer
