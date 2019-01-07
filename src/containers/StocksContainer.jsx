import React, { Component } from 'react';
import GraphContainer from './GraphContainer';
import StockHeader from '../components/StockHeader';
import StockDetails from '../components/StockDetails';

class StocksContainer extends Component {
  render() {
    return (
      <div>
        <StockHeader />
        <GraphContainer />
        <StockDetails />
        
      </div>
    );
  }
}

export default StocksContainer;