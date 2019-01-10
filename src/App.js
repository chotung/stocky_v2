import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import Header from "./components/Header";
import StocksContainer from "./containers/StocksContainer";
// import Search from "./components/Search";
import Select from "react-select";


const url = "https://api.iextrading.com/1.0/ref-data/symbols";
const options = []

class App extends Component {
  state = {
    stocks: [
      { value:'start', label:'start'}
    ],
    singleStock: {},
    selectedOption: null,
    searching: true,
    // user: [
    //   { name:'', stock }
    // ]
  };


  componentDidMount() {
    this.fetchData()
    // this.addLabel()
  }
  
  fetchData = () => {
    axios.get(url)
    .then(companies => {
      companies.data.map(comp => {
        options.push({value: comp, label:comp.symbol + '/' + comp.name  })  
      })
      // console.log(options)
      
      this.setState({
        stocks:options
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

  handleHomeClick = () => {
    this.setState({ searching: true})
    this.setState({ selectedOption: null})
  }


  render() {

    const { selectedOption, searching, singleStock } = this.state;

    return (
      <div className="App">
        {searching ? (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.stocks}
          />
        ) : (
          <StocksContainer stock={singleStock} home={this.handleHomeClick} />
        )}
        {/* <Header myStock={this.handleMystock}/> */}
      </div>
    );
  }
}

export default App;


