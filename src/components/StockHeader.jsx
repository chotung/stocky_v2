import React from 'react'

function StockHeader(props) {
  const { symbol, name, price, net, price_change } = props
  return (
    <div className="stock-head">
      <h1>Company Name: {name}</h1>
      <p>Ticker Symbol: {symbol}</p>
      <p>Closing Price: {price}$</p>
      <p>Price Change: {price_change}/{net}</p>
    </div>
  )
}

export default StockHeader
