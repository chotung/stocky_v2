import React, { Component } from 'react'
import GraphHeader from '../components/GraphHeader'
import Graph from '../components/Graph'
import axios from 'axios'
import '../styles/graphContainer.css'

class GraphContainer extends Component {
  state = {
    chartData: [],
    range: '1d',
    show: false,
  }

  componentDidMount = () => {
    this.chartData()
  }
  
  chartData = () => {
    const symbol = this.props.symbol
    // const symbol = 'AAPL'
    const range = this.state.range
    axios
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
      .then(res => {
        let quotes = res.data
        let label = []
        let openPrice = []
         quotes.map(quote => {
        

          // if range equals 1d
          // Switch(range) {case 1d: return something}
           if (range === '1d') {
             let tempTime = quote.minute.split(':')
             let combined = tempTime[0] + tempTime[1]
             // // console.log('combined', combined)
             let parsed = parseInt(combined)
             // console.log('parsed', parsed)
             if (parsed % 5 === 0) {
               label.push(quote.label)
               // console.log(label)
               openPrice.push(quote.open)
               // console.log(open)
             }
           } else {
             label.push(quote.label)
             openPrice.push(quote.open)
           }


        })

        this.setGraph(label, openPrice)


      })

  }

  setGraph = (label, open) => {
    this.setState({
      chartData: {
        labels: label,
        // labels: ['10:00 am', '10:05 am'],
        //  These labels need to be minutes
        datasets: [
          {
            fill: false,
            // data: [150, 134, 144],
            data: open,
            // Data points are stock high prices
            backgroundColor: [
              'pink'
            ],
            borderColor: ['blue']
          }
        ]
      },
      show: true
    })
  }

  swapRange = (e) => { 
    console.log(e.target.innerText)
    this.setState({ range: e.target.innerText},
      () => this.chartData()) 
    // console.log('Range state', this.state.range)
  }

  render () {
    // console.log('Graph Container', this.props)
    console.log('Graph Container State', this.state)

    const { chartData, range} = this.state
    return (
      <div className='graph'>

        <GraphHeader
          range={(e) => this.swapRange(e)}
        />
        {this.state.show === false ? null : (
          <Graph chartData={chartData} range={range} />
        )}
      </div>
    )
  }
}

export default GraphContainer
