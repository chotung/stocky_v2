import React, { Component } from 'react';
import GraphHeader from '../components/GraphHeader';
import Graph from '../components/Graph';

class GraphContainer extends Component {


  render() {
    // console.log(this.props)
    return <div>
         <GraphHeader />
         <Graph chartData={this.props.chartData} />
      </div>;
  }
}

export default GraphContainer;