import React, { Component } from "react";
import './App.css'
import axios from "axios";
import StocksContainer from "./containers/StocksContainer";
import Select from "react-select";
import MenuList from "./components/MenuList";
import NewsContainer from "./containers/NewsContainer";
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

    // this.fetchNewsXML()
    this.getNews();
  }

  //  XML fetch yahoo news

  // fetchNewsXML = () => {
  //   fetch("https://feeds.finance.yahoo.com/rss/2.0/headline?s=aapl&region=US&lang=en-US"
  //   // {
  //   //   method: "GET",
  //   //   headers: { "Content-Type": "application/text"}
  //   )
  //   .then(res => res.text())
  //   .then(data => console.log(data))
  // }

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
        // console.log(comp.symbol, comp.name)
        return options.push({
          value: comp,
          label: comp.symbol + "/" + comp.name
        });
      });
      // console.log(options)
      this.setState({
        stocks: options
      });
    });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption)
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
      <div className="uk-grid">
        <div className="uk-flex-center uk-margin-small-bottom uk-flex-inline uk-width-1-1 top-bar">
          <h1 id="head" className='uk-margin-large-left uk-padding-small uk-heading-primary uk-width-1-6' onClick={this.goHome}>
            Stocky
          </h1>
          <div className="uk-margin-xlarge-right uk-width-1-1 select-bar">
            <Select
              placeholder="Ticker Symbol/Company"
              value={selectedOption}
              onChange={this.handleChange}
              options={stocks}
              components={{ MenuList }}
            />
          </div>
          
        </div>
        {/* {searching ? <NewsContainer news={news} className='' /> : null} */}
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
