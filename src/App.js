import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import StocksContainer from "./containers/StocksContainer";
// import Search from "./components/Search";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class App extends Component {
  state = {
    stocks: [
      {
        label: "APPL/Apple",
        symbol: "AAPL",
        companyName: "Apple Inc.",
        primaryExchange: "Nasdaq Global Select",
        sector: "Technology",
        calculationPrice: "close",
        open: 148.7,
        openTime: 1546871400481,
        close: 147.93,
        closeTime: 1546894800458,
        high: 148.83,
        low: 145.9,
        latestPrice: 147.93,
        latestSource: "Close",
        latestTime: "January 7, 2019",
        latestUpdate: 1546894800458,
        latestVolume: 54507159,
        iexRealtimePrice: 147.89,
        iexRealtimeSize: 100,
        iexLastUpdated: 1546894799991,
        delayedPrice: 147.93,
        delayedPriceTime: 1546894800458,
        extendedPrice: 147.85,
        extendedChange: -0.08,
        extendedChangePercent: -0.00054,
        extendedPriceTime: 1546898387133,
        previousClose: 148.26,
        change: -0.33,
        changePercent: -0.00223,
        iexMarketPercent: 0.03143,
        iexVolume: 1713160,
        avgTotalVolume: 48587839,
        iexBidPrice: 0,
        iexBidSize: 0,
        iexAskPrice: 0,
        iexAskSize: 0,
        marketCap: 701986726140,
        peRatio: 12.46,
        week52High: 233.47,
        week52Low: 142,
        ytdChange: -0.06548987841945277
      },
      {
        symbol: "BABA",
        label: "BABA/Alibaba",
        name: "Alibaba",
        price: 60,
        price_change: 24,
        net: 0.0011
      },
      {
        symbol: "GOOGL",
        label: "GOOGL/Alphabet",
        name: "Alphabet",
        price: 1200,
        price_change: 1,
        net: 0.0006
      }
    ],
    singleStock: {},
    selectedOption: null,
    searching: true
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
    this.setState({
      singleStock: selectedOption,
      searching: false
    });
  };

  render() {
    const { selectedOption, searching, singleStock } = this.state;
    return (
      <div className="App">
        {searching ? (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            // options={this.state.stocks}
            options={this.state.stocks}
          />
        ) : (
          <StocksContainer stock={singleStock} />
        )}
        {/* <Header myStock={this.handleMystock}/> */}
      </div>
    );
  }
}

export default App;
