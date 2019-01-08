import React, { Component } from 'react';
import GraphContainer from './GraphContainer';
import StockHeader from '../components/StockHeader';
import StockDetails from '../components/StockDetails';

class StocksContainer extends Component {
  render(props) {
    const { symbol, name, price, net, price_change } = this.props.stock
    
    return (
      <div>
        <StockHeader symbol={symbol} name={name} price={price} net={net} price_change={price_change} />
        <GraphContainer />
        <StockDetails />
        
      </div>
    );
  }
}

export default StocksContainer;