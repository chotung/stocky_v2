import React from 'react'

function removeHMS(date) {

  const time = date.split(' ')
  
  return time[0]
}


function dayRange(low, high) {
  if(low) {
    return <li>Day's Range: {low} - {high}</li>
  } else {
    return <li>Day's Range:'N/A' </li>
  }
}

function week52Range(low52, high52) {
  if(low52) {
    return <li>52 Week Range: {low52} - {high52}</li>
  } else {
    return <li>52 Week Range:'N/A' </li>
  }

}

function StockDetails(props) {
  const { open, high, low, marketCap, peRatio, previousClose, week52High, week52Low, iexBidPrice, iexAskPrice, iexVolume, avgTotalVolume } = props.stock;
  // console.log(props)
  const { beta, ttmEPS, dividendYield, dividendRate, exDividendDate} = props.addData

  return <div className="uk-flex uk-padding-remove uk-margin-remove uk-padding-small-top uk-width-1-2 uk-flex-top stock-details">
      <ul className="uk-width-1-2 details-1">
        <li>Prev Close: {previousClose ? previousClose : 'N/A'}</li>
        <li>Open: {open ? open : 'N/A'}</li>
        <li>Bid Price: {iexBidPrice ? iexBidPrice : 'N/A'}</li>
        <li>Ask Price: {iexAskPrice ? iexAskPrice : 'N/A'}</li>
        {dayRange(low, high)}
        {week52Range(week52Low, week52High)}
        <li>Volume: {iexVolume ? iexVolume : 'N/A'}</li>
      </ul>
      <ul className="uk-width-1-2 details-2">
        <li>Avg Volume: {avgTotalVolume ? avgTotalVolume : 'N/A'}</li>
        <li>MKT CAP: {marketCap ? (marketCap / Math.pow(10, 9)).toFixed(2): 'N/A'} B</li>
        <li>Beta: {beta ? beta.toFixed(2) : 'N/A'}</li>
        <li>P/E Ratio: {peRatio ? peRatio: 'N/A'}</li>
        <li>EPS(TTM): {ttmEPS ? ttmEPS.toFixed(2) : 'N/A'}</li>
        <li>Forward Div &amp; Yield: {dividendRate ? dividendRate : 'N/A'} {dividendYield ? `(${dividendYield.toFixed(2)})` : ''} </li>
        <li>Ex-Dividend Date: {exDividendDate ? removeHMS(exDividendDate): 'N/A'} </li>
      </ul>
    </div>;
}

export default StockDetails


