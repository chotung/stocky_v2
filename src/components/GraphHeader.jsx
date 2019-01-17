import React from 'react'

export default function GraphHeader(props) {
  return (
    <div className="graph-buttons">
      <h2 onClick={props.range} >1d</h2>
      <h2 onClick={props.range}>5d</h2>
      <h2 onClick={props.range}>1m</h2>
      <h2 onClick={props.range}>6m</h2>
      <h2 onClick={props.range}>YTD</h2>
      <h2 onClick={props.range}>1y</h2>
      <h2 onClick={props.range}>5y</h2>
      {/* <h2 onClick={props.range}>Max</h2> */}
    </div>
  )
}
