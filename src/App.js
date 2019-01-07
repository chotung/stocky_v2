import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import StocksContainer from "./containers/StocksContainer";
// import Search from "./components/Search";

class App extends Component {
  state = {};

  handleMystock = () => {
    console.log("clicking")  
  }
  
  render() {
    return (
      <div className="App">
        {/* <Header myStock={this.handleMystock}/> */}
        {/* <StocksContainer /> */}
      </div>
    );
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
