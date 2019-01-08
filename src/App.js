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
        symbol: "APPL",
        label: "APPL/Apple",
        name: "Apple",
        price: 100,
        price_change: 10,
        net: 0.0001,
        open:,
        high:,
        low:,
        mkt_cap:,
        pe_ratio:,
        div_yield:,
        prev_close:,
        fiftytwo_wk_h:,
        fiftytwo_wk_l:,
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
    console.log(`Option selected:`, selectedOption);
    this.setState({
      singleStock: selectedOption,
      searching: false
    })
  };

  

  render() {
    const { selectedOption, searching, singleStock } = this.state;
    return (
      <div className="App">
        {searching ? <Select
          value={selectedOption}
          onChange={this.handleChange}
          // options={this.state.stocks}
          options={this.state.stocks}
        /> : <StocksContainer stock={singleStock} />}
        {/* <Header myStock={this.handleMystock}/> */}
      </div>
    );
  }
}

export default App;
