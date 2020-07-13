import React, { Component } from "react";
import './App.css'
import axios from "axios";
import StocksContainer from "./containers/StocksContainer";
import Select from "react-select";
import MenuList from "./components/MenuList";
// import NewsContainer from "./containers/NewsContainer";
import "uikit";
// import NewsContainer from "./containers/NewsContainer";


// const url = "https://api.iextrading.com/1.0/ref-data/symbols";

const url = `https://financialmodelingprep.com/api/v3/company/stock/list?apikey=${process.env.API_KEY}`
const options = [];
console.log(process.env.API_KEY);


class App extends Component {
  state = {
    stocks: [{}],
    singleStock: {},
    selectedOption: null,
    searching: true
    // news: []
  };

  componentDidMount() {
    this.fetchData();
    // this.getNews();
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
      // console.log(companies.data.symbolsList)
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
      <div className="app">
        <div className="uk-child-width-1-2@l  uk-child-width-1-1@m uk-grid-match uk-grid uk-grid-stack top-bar">
          <h1
            id="head"
            className="uk-margin-medium-left uk-align-center uk-width-1-4@l"
            onClick={this.goHome}
          >
           Binder Finance
          </h1>

          <div className="select-bar">
            <Select
              placeholder="Ticker Symbol/Company"
              value={selectedOption}
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
