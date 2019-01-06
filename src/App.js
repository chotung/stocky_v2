import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

class App extends Component {
  state = {
    fakeStock: [
      {},
      {}
    ],
    term: ''
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }
  

  render() {
    console.log(this.state.term)
    return <div className="App">
        <Search handleChange={this.handleChange} searchTerm={this.state.term} />
      </div>;
  }
}

export default App;
