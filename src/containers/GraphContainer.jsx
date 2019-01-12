// import React from 'react'
import GraphHeader from '../components/GraphHeader';
import Graph from '../components/Graph';

// function GraphContainer() {
//   return (
//     <div>
//       <GraphHeader />
//       <Graph/>
//     </div>
//   )
// }

// export default GraphContainer


import React, { Component } from 'react';

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