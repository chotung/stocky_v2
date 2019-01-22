import React from 'react'

function StockDetails(props) {
  const { open, high, low, marketCap, peRatio, previousClose, week52High, week52Low } = props.stock;
  // console.log(props)
  return <div className="uk-flex uk-padding-remove uk-margin-remove uk-padding-small-top uk-width-1-2 uk-flex-top stock-details">
      <ul className="uk-width-1-2 details-1">
        <li>Open: ${open}</li>
        <li>High: ${high}</li>
        <li>Low: ${low}</li>
        <li>MKT CAP: ${(marketCap / Math.pow(10, 9)).toFixed(2)} B</li>
        <li>P/E Ratio: ${peRatio}</li>
        <li>Prev Close: ${previousClose}</li>
        <li>52 Week High: ${week52High}</li>
        <li>52 Week Low: ${week52Low}</li>
        <li>52 Week Low: ${week52Low}</li>
      </ul>
      <ul className="uk-width-1-2 details-2">
        <li>Open: ${open}</li>
        <li>High: ${high}</li>
        <li>Low: ${low}</li>
        <li>MKT CAP: ${(marketCap / Math.pow(10, 9)).toFixed(2)} B</li>
        <li>P/E Ratio: ${peRatio}</li>
        <li>Prev Close: ${previousClose}</li>
        <li>52 Week High: ${week52High}</li>
        <li>52 Week Low: ${week52Low}</li>
        <li>52 Week Low: ${week52Low}</li>
      </ul>
    </div>;
}

export default StockDetails
