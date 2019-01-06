import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

class App extends Component {
  state = {
    suggestion: [
      {label: 'APPL'},
      {label: 'AMZN'},
      {label: 'BABA'},
      {label: 'GOOGL'},
    ],
    term: '',
    filtered: [], 
    stocks: []
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }
  
  filterResults = () => {
    return this.state.suggestion.map(suggestion => {
      return suggestion.label.includes(this.state.term)
      
    })
  }
  


  render() {
    // console.log(this.state.term)

    return <div className="App">
        {this.filterResults()}
        <Search handleChange={this.handleChange} searchTerm={this.state.term} />
      </div>;
  }
}

export default App;


// { symbol: "APPL", companyName: "Apple Inc.", sector: "Technology", open: "154", change: "-1.67", changePercent: "-0.01158" },
// { symbol: "AMZN", companyName: "Amazon", sector: "Technology", open: "154", change: "-1.67", changePercent: "-0.01158" },
// { symbol: "BABA", companyName: "Alibaba Group Holding Ltd", sector: "Technology", open: "154", change: "-1.67", changePercent: "-0.01158" },