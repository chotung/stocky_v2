import React, { Component } from 'react';
import GraphContainer from './GraphContainer';
import StockHeader from '../components/StockHeader';
import StockDetails from '../components/StockDetails';
import axios from "axios";

class StocksContainer extends Component {
  state = {
    data:[]
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const symbol = this.props.stock.value.symbol
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
    .then(quote => {
      this.setState({
        data: quote.data
      })
    })
  }
  
  

  render(props) {
    console.log('stocks container', this.state)
    const { symbol, companyName, close, changePercent, change } = this.state.data
    
    return (
      <div>
        <StockHeader symbol={symbol} name={companyName} price={close} net={changePercent} price_change={change} />
        <GraphContainer />
        <StockDetails stock={this.state.data} />
        
      </div>
    );
  }
}

export default StocksContainer;