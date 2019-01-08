import React from 'react'

function StockDetails(props) {
  const { open, high, low, marketCap, peRatio, previousClose, week52High, week52Low } = props.stock;
  console.log(props)
  return (
    <div>
      <ul>
        <li>{open}</li>
        <li>{high}</li>
        <li>{low}</li>
        <li>{marketCap/1000000}</li>
        <li>{peRatio}</li>
        <li>{previousClose}</li>
        <li>{week52High}</li>
        <li>{week52Low}</li>
      </ul>
    </div>
  )
}

export default StockDetails
// open={} high={} low={} mk_tcap={} pe_ratio={} div_yield={} prev_close={} week52_high={} week52_low={}
