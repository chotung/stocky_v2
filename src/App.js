import React, { Component } from "react";
import './App.css'
import axios from "axios";
import StocksContainer from "./containers/StocksContainer";
import Select from "react-select";
import MenuList from "./components/MenuList";
import "uikit";

// const url = "https://api.iextrading.com/1.0/ref-data/symbols";

const url = 'https://financialmodelingprep.com/api/v3/company/stock/list'
const options = [];




class App extends Component {
  state = {
    stocks: [{}],
    singleStock: null,
    searching: true
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get(url).then(companies => {
      companies.data.symbolsList.map(comp => {
        return options.push({
          value: comp,  
          label: comp.symbol + "/" + comp.name
        });
      });
      this.setState({
        stocks: options
      });
    });
  };

  handleChange = singleStock => {
  
    this.setState({ singleStock });
    this.setState({
      singleStock,
      searching: false
    });
  };

  handleHomeClick = () => {
    // dispatch the actions
    this.setState({ searching: true });
    this.setState({ singleStock: null });
  };


  render() {
    console.log('app state', this.state)
    const { selectedOption, searching, singleStock, stocks, news } = this.state;
    return (
      <div className="app">
        <div className="uk-child-width-1-2@l  uk-child-width-1-1@m uk-grid-match uk-grid uk-grid-stack top-bar">
          <h1
            id="head"
            className="uk-margin-medium-left uk-align-center uk-width-1-4@l"
            onClick={this.handleHomeClick}
          >
           Binder Finance
          </h1>

          <div className="select-bar">
            <Select
              placeholder="Ticker Symbol/Company"
              value={singleStock}
              onChange={this.handleChange}
              options={stocks}
              components={{ MenuList }}
            />
          </div>
        </div>
        {/* {searching ? <NewsContainer news={news} /> : null} */}
        {searching ? null : (
          <StocksContainer
            stockSymbol={singleStock.value.symbol}
            home={this.handleHomeClick}
            news={news}
          />
        )}
      </div>
    );
  }
}

export default App;
