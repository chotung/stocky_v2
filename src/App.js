import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import Header from "./components/Header";
import StocksContainer from "./containers/StocksContainer";
// import Search from "./components/Search";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const url = "https://api.iextrading.com/1.0/ref-data/symbols";

class App extends Component {
  state = {
    stocks: [
      {}
    ],
    singleStock: {},
    selectedOption: null,
    searching: true
  };


  componentDidMount() {
    this.fetchData()
  }
  
  fetchData = () => {
    axios.get(url)
    .then(companies => {
      this.setState({
        stocks:companies.data
      })
    })
  }


  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
    this.setState({
      singleStock: selectedOption,
      searching: false
    });
  };

  render() {
    console.log(this.state)
    const { selectedOption, searching, singleStock } = this.state;
    return (
      <div className="App">
        {searching ? (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            // options={this.state.stocks}
            options={options}
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


