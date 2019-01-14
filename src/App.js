import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import StocksContainer from './containers/StocksContainer'
import Select from 'react-select'

// if what i type matches something in the symbols return those only?
const url = 'https://api.iextrading.com/1.0/ref-data/symbols'
const options = []

class App extends Component {
  state = {
    stocks: [{ value: 'start', label: 'start' }],
    singleStock: {},
    selectedOption: null,
    searching: true,
    searchTerm: ''
    // user: [
    //   { name:'', stock }
    // ]
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = () => {
    axios.get(url).then(companies => {
      companies.data.map(comp => {
        // console.log(comp.symbol, comp.name)
        return options.push({
          value: comp,
          label: comp.symbol + '/' + comp.name
        })
      })
      // console.log(options)
      this.setState({
          stocks:options
      })

    })
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption)
    this.setState({
      singleStock: selectedOption,
      searching: false
    })
  }

  handleHomeClick = () => {
    this.setState({ searching: true })
    this.setState({ selectedOption: null })
  }

  render () {
    const { selectedOption, searching, singleStock } = this.state

    return (
      <div className='App'>
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
    )
  }
}

export default App
