import React, { Component } from "react";
import './App.css'
import axios from "axios";
import StocksContainer from "./containers/StocksContainer";
import Select from "react-select";
import MenuList from "./components/MenuList";
// import NewsContainer from "./containers/NewsContainer";
import "uikit";

const url = "https://api.iextrading.com/1.0/ref-data/symbols";
const options = [];

class App extends Component {
  state = {
    stocks: [{}],
    singleStock: {},
    selectedOption: null,
    searching: true,
    news: []
  };

  componentDidMount() {
    this.fetchData();
    this.getNews();
  }



  // getNews = () => {
  //   axios
  //     .get("https://api.iextrading.com/1.0//stock/market/news/last/5")
  //     .then(news => {
  //       this.setState({ news: news.data });
  //     });
  // };

  fetchData = () => {
    axios.get(url).then(companies => {
      companies.data.map(comp => {
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

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.setState({
      singleStock: selectedOption,
      searching: false
    });
  };

  handleHomeClick = () => {
    this.setState({ searching: true });
    this.setState({ selectedOption: null });
  };

  goHome = () => {
    this.setState({ searching: true });
  };

  render() {
    const { selectedOption, searching, singleStock, stocks, news } = this.state;
    return (
      <div className="">
        <div className="uk-grid top-bar">
          <h1
            id="head"
            className="uk-width-1-2 uk-width-small-1"
            onClick={this.goHome}
          >
            Stocky
          </h1>

          <div className="uk-width-1-2 uk-width-small-1 select-bar">
            <Select
              placeholder="Ticker Symbol/Company"
              value={selectedOption}
              onChange={this.handleChange}
              options={stocks}
              components={{ MenuList }}
            />
          </div>
        </div>

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
