import React from 'react'

function StockHeader(props) {
  const { symbol, name, price, net, price_change } = props
  console.log(net)
  return (
    <div className={"uk-width-1-1  stock-head" + (net < 0 ? '-bearish' : '-bullish') }>
      <p className='company-name'>{name} ({symbol})</p>
      <h1 className='price-usd' >{price}$</h1>
      <p className={'price' + (net < 0 ? '-bearish' : '-bullish' ) } >{price_change} ({(net * 100).toFixed(2)})%</p>

    </div>
  )
}

export default StockHeader
