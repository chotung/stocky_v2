import React from 'react'

export default function GraphHeader(props) {
  return (
    <div>
      <h2 onClick={props.handleClick}>Show Graph</h2>
    </div>
  )
}
