import React, { Component } from 'react';

class Search extends Component {
  render(props) {
    const { handleChange, searchTerm } = this.props
    console.log(this.props)
    return (
      <div>
        <input onChange={handleChange} value={searchTerm} placeholder=" Enter Company Name/Stock Symbol "/>
      </div>
    );
  }
}

export default Search;