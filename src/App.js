import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import StocksContainer from "./containers/StocksContainer";
import Select from "react-select";
import Footer from "./components/Footer";
import MenuList from "./components/MenuList"



const url = "https://api.iextrading.com/1.0/ref-data/symbols";
const options = [];



class App extends Component {
  state = {
    stocks: [{}],
    singleStock: {},
    selectedOption: null,
    searching: true,
    // user: [
    //   { name:'', stock }
    // ]
    chartData: [],

  };

  componentDidMount() {
    this.fetchData();
    // this.chartData()
  }

  fetchData = () => {

    //  Do you  mean I shoudl wrap this in a setTimeOut()?


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

  render() {
    const { selectedOption, searching, singleStock, stocks } = this.state;
    // console.log( selectedOption )
    return (
      <div className="App">
        {searching ? <h1 id='head'>Stocky</h1> : null}
        {searching ? (
          <div className="suggest">
            <Select
              className="suggest"
              placeholder="Ticker Symbol/Company"
              value={selectedOption}
              onChange={this.handleChange}
              options={stocks}
              components={{ MenuList }}
            />
          </div>
        ) : (
          <StocksContainer stock={singleStock} home={this.handleHomeClick} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
// chartData = { this.state.chartData }
