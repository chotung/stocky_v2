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
    symbol: this.props.stockSymbol,
    isClicked: {
      '1d': false,
    }
  }

  componentDidMount = () => {
    this.chartData()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(this.props.stockSymbol !== prevProps.stockSymbol) {
      this.chartData()
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.stockSymbol !== state.symbol) {
      return {
        symbol: props.stockSymbol
      }
    }
    return null
  }


  chartData = () => {
    const symbol = this.state.symbol
    // const symbol = 'AAPL'
    const range = this.state.range
    axios
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
      .then(res => {
        let quotes = res.data
        let label = []
        let openPrice = []
        quotes.forEach(quote => {
      
          if (range === '1d') {
            let tempTime = quote.minute.split(':')
            if (tempTime[1] * 1 === 30) {
              // console.log(quote);
              label.push(quote.label)
              openPrice.push(quote.marketAverage)
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
            fill: true,
            // data: [150, 134, 144],
            data: open,
            // Data points are stock high prices
            backgroundColor: ["rgb(43, 102, 137)"],
            borderColor: ["rgb(79, 193, 233)"]
          }
        ]
      },
      show: true
    });
  }

  swapRange = (e) => { 
    // console.log(e.target.innerText)
    let dick = e.target.innerText

    this.setState({ range: e.target.innerText},
      () => this.chartData()) 
    // console.log('Range state', this.state.range)
    this.setState(prevState => ({
      isClicked : {
        '1d': 'penis'
      }
    }));
  }

  // btn class = btn
  // if (this.state.isPressed) btnclass += btn-press
  // else if (this.state.ishovered) btnclass += btn-over
    // return button className={btnclass}>1d</button>

  render () {
    const { chartData, range } = this.state
    console.log(this.state.isClicked['1d'])
    return (
      <div className='graph'>

        <GraphHeader
          range={(e) => this.swapRange(e)}
          clicked={(e)=>this.test(e)}
        />
        {this.state.show === false ? null : (
          <Graph chartData={chartData} range={range} />
        )}
      </div>
    )
  }
}

export default GraphContainer
