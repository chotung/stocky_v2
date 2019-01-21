import React from 'react'

function StockHeader(props) {
  const { symbol, name, price, net, price_change } = props

  return (
    <div className="uk-width-1-1 uk-margin-small-top stock-head">
      <p>{name} ({symbol})</p>
      <h1>{price}$</h1>
      <p className='price'>{price_change} ({(net * 100).toFixed(2)})%</p>

    </div>
  )
}

export default StockHeader
