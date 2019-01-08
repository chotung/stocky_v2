import React from 'react'

function StockHeader(props) {
  console.log(props)
  const { symbol, name, price, net, price_change } = props
  return (
    <div>
      <h1>{name}</h1>
      <p>{symbol}</p>
      <p>{price}</p>
      <p>{price_change}/{net}</p>
    </div>
  )
}

export default StockHeader
