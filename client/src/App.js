import React, { Component } from "react";
import './App.css'
import axios from "axios";
import StocksContainer from "./containers/StocksContainer";
import Select from "react-select";
import MenuList from "./components/MenuList";
import Login from "./components/Login"
import Signup from "./components/Signup"
// import NewsContainer from "./containers/NewsContainer";
// import "uikit";
// import NewsContainer from "./containers/NewsContainer";


// const url = "https://api.iextrading.com/1.0/ref-data/symbols";

const url = 'https://financialmodelingprep.com/api/v3/company/stock/list'
const options = [];
const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "midnightBlue"
  }),
};



class App extends Component {
  state = {
    stocks: [{}],
    singleStock: {},
    selectedOption: null,
    searching: true,
    login: false
    // news: []
  };

  componentDidMount() {
    this.fetchData();
    // this.getNews();
  }
  
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
  swapLogin = () => {
    this.setState(prevState => ({
      login: !prevState.login
    }))
  }
  
  render() {
    const { selectedOption, searching, singleStock, stocks, news } = this.state;
    return (
      <div className="app">
        <div className="top-bar">
          <h1
            id="head"
            className=""
            // className="uk-margin-medium-left uk-align-center uk-width-1-4@l"
            onClick={this.goHome}
          >
            Stocky
          </h1>
          <div className="account">
            <p onClick={this.swapLogin}>signup</p>
            <p onClick={this.swapLogin}>login</p>
          </div>
          <div className="select-bar">
            <Select
              styles={selectStyles}
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
        {this.state.login ? <Login /> : <Signup />}
      </div>
    );
  }
}

export default App;
