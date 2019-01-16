import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import StocksContainer from './containers/StocksContainer'
import Select from 'react-select'

const url = 'https://api.iextrading.com/1.0/ref-data/symbols'
const options = []

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: '1px dotted pink',
//     color: state.isSelected ? 'red' : 'blue',
//     padding: 20
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 200
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1
//     const transition = 'opacity 300ms'

//     return { ...provided, opacity, transition }
//   }
// }

class App extends Component {
  state = {
    stocks: [{ value: 'start', label: 'start' }],
    singleStock: {},
    selectedOption: null,
    searching: true,
    searchTerm: '',
    // user: [
    //   { name:'', stock }
    // ]
    chartData: []
  }

  componentDidMount () {
    this.fetchData()
    // this.chartData()
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
        stocks: options
      })
    })
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
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
    const { selectedOption, searching, singleStock, stocks } = this.state
    // console.log( selectedOption )
    return (
      <div className='App'>
        {searching ? (
          <div className='suggest'>
            <Select
            className="suggest"
            placeholder="Ticker Symbol/Company"
            value={selectedOption}
            onChange={this.handleChange}
            options={stocks}
          />
          </div>
          
        ) : (
          <StocksContainer stock={singleStock} home={this.handleHomeClick} />
        )}
      </div>
    )
  }
}

export default App
// chartData = { this.state.chartData }
