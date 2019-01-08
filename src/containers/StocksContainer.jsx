import React, { Component } from 'react';
import GraphContainer from './GraphContainer';
import StockHeader from '../components/StockHeader';
import StockDetails from '../components/StockDetails';

class StocksContainer extends Component {
  render(props) {
    console.log('stocks container', this.props)
    const { symbol, companyName, close, changePercent, change } = this.props.stock
    
    return (
      <div>
        <StockHeader symbol={symbol} name={companyName} price={close} net={changePercent} price_change={change} />
        <GraphContainer />
        <StockDetails stock={this.props.stock} />
        
      </div>
    );
  }
}

export default StocksContainer;