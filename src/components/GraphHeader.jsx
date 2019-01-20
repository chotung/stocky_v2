import React, { Component} from 'react'

export default class GraphHeader extends Component{
  render() {
    const { range } = this.props
    return <div className="graph-buttons">
      <button className='' onClick={range}>1d</button>
      <button className='' onClick={range}>5d</button>
      <button className='' onClick={range}>1m</button>
      <button className='' onClick={range}>6m</button>
      <button className='' onClick={range}>YTD</button>
      <button className='' onClick={range}>1y</button>
      <button className='' onClick={range}>5y</button>
      {/* <h2 onClick={this.props.range}>Max</h2> */}
    </div>;
  }
}
