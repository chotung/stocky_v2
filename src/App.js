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



  // chartData = () => {
  //   // const range = this.state.testRange
  //   // const symbol = this.props.stock.value.symbol

  //   const range = '1d'
  //   const symbol = 'AAPL'
  //   let label = []
  //   let open = []

  //   axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
  //     .then(res => {
  //       let quotes = res.data

  //       return quotes.map(quote => {
  //         let tempTime = quote.minute.split(':')
  //         let combined = tempTime[0] + tempTime[1]
  //         // console.log('combined', combined)
  //         let parsed = parseInt(combined)
  //         // console.log('parsed', parsed)
  //         if (parsed % 5 === 0) {
  //           label.push(quote.label)
  //           // console.log(label)
  //           open.push(quote.open)
  //           // console.log(open)
  //         }
  //       })
  //     })



  //   this.setState({
  //     chartData: {
  //       labels: label,
  //       // labels: ['10:00 am', '10:05 am'],
  //       //  These labels need to be minutes
  //       datasets: [
  //         {
  //           fill:false,
  //           // data: [150, 134, 144],
  //           data: open,
  //           // Data points are stock high prices
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.6)",
  //             "rgba(54, 162, 235, 0.6)",
  //             "rgba(255, 206, 86, 0.6)",
  //             "rgba(75, 192, 192, 0.6)",
  //             "rgba(153, 102, 225, 0.6)",
  //             "rgba(255, 159, 64, 0.6)",
  //             "rgba(255, 99, 132, 0.6)"
  //           ]
  //         }
  //       ]
  //     }
  //   });
  // }





  render () {
    const { selectedOption, searching, singleStock, stocks } = this.state
    // console.log( selectedOption )
    return (
      <div className='App'>
        {searching ? (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={stocks}
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
// chartData = { this.state.chartData }