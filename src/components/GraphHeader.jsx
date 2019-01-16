import React from 'react'

export default function GraphHeader(props) {
  return (
    <div className="graph-buttons">
      <h2 onClick={props.handleClick}>Show Graph will switch this to 1d</h2>
      <h2 onClick={props.handleClick}>5d</h2>
      <h2 onClick={props.handleClick}>1m</h2>
      <h2 onClick={props.handleClick}>6m</h2>
      <h2 onClick={props.handleClick}>YTD</h2>
      <h2 onClick={props.handleClick}>1y</h2>
      <h2 onClick={props.handleClick}>5y</h2>
      <h2 onClick={props.handleClick}>Max</h2>
    </div>
  )
}
