import React from 'react'

function StockHeader(props) {
  const { symbol, name, price, net, price_change } = props
  // console.log(net)
  return (
    <div className={"stock-head" + (net < 0 ? '-bearish' : '-bullish') }>
      <p className='uk-margin-small-top company-name'>{name} ({symbol})</p>
      <h1 className='price-usd' >{price}$</h1>
      <p className={'uk-margin-small-bottom price' + (net < 0 ? '-bearish' : '-bullish' ) } >{price_change} ({(net * 100).toFixed(2)})%</p>

    </div>
  )
}

export default StockHeader
