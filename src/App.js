import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import StockCard from './components/StockCard';

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
    stocks: [],
    user: {
      userName: '',
      password: '',
      portfolio: [{}],
    }
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }
  
  filterResults = () => {

  }
  


  render() {
    // console.log(this.state.term)

    return <div className="App">
      <StockCard />
        {/* {this.filterResults()} */}
        {/* <Search handleChange={this.handleChange} searchTerm={this.state.term} /> */}
      </div>;
  }
}

export default App;

// Pseudo code

// types something into input field
// changes term

// filtered state gets changed

// where does filtered state get the information?
// gets data from "suggestions"
// filter suggestions based off the term 

//  then set the state of filtered to whatever the filtered results was