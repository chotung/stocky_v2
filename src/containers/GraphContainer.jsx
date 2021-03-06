import React, { Component } from 'react'
import GraphHeader from '../components/GraphHeader'
import Graph from '../components/Graph'
import axios from 'axios'
import '../styles/graphContainer.css'

// Removed  1D 
class GraphContainer extends Component {
  state = {
    chartData: [],
    timeFrame: [
      // {name:'1d'},
      {name:'5d'}, 
      {name:'1m'}, 
      {name:'6m'}, 
      // {name:'YTD'}, 
      {name:'1Y'}, 
      {name:'5Y'}
    ],
    show: false,
    symbol: this.props.stockSymbol,
    activeIndex: 0,
    range: '5',
    // value: 1

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
      // .get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
      .get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=${range}&apikey=${this.props.apiKey}`)
      .then(res => {
        let quotes = res.data.historical
        let label = []
        let openPrice = []
        // console.log(openPrice)
        // console.log('quotes', quotes);
        quotes.forEach(quote => {
          openPrice.push(quote.open)
          label.push(quote.date)
          /**
         * was for previous api
         * 
         * if (range === '1d') {
            let tempTime = quote.minute.split(':')
            if (tempTime[1] * 1 === 30) {
              // console.log(quote);
              label.push(quote.label)
              openPrice.push(quote.marketAverage)
            }
          } else {
            // This I always want to do
            label.push(quote.label)
            openPrice.push(quote.open)
          }
         */ 
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
            // backgroundColor: backColor, 
            // borderColor: backColor
            backgroundColor: ["rgb(43, 102, 137)"],
            borderColor: ["rgb(79, 193, 233)"]
          }
        ]
      },
      show: true
    });

  }


  // handleClick = (index, e) => {
  //   this.setState({ activeIndex: index },
  //   () => {
  //     switch (this.state.activeIndex) {
  //       case 0:
  //         this.setState({ range: '1d' },
  //           () => this.chartData())
  //         break;
  //       case 1:
  //         this.setState({ range: '5' },
  //           () => this.chartData())
  //           break;
  //       case 2:
  //         this.setState({ range: '1m' },
  //           () => this.chartData())
  //         break;
  //       case 3:
  //         this.setState({ range: '6m' },
  //           () => this.chartData())
  //           break;
  //       case 4:
  //         this.setState({ range: 'YTD' },
  //           () => this.chartData())
  //           break;
  //       case 5:
  //         this.setState({ range: '1y' },
  //           () => this.chartData())
  //           break;
  //       case 6:
  //         this.setState({ range: '5y' },
  //           () => this.chartData())
  //         break;
  //       default:
  //         break;
  //     }
  //   })
  // }
  handleClick = (index, e) => {
    this.setState({ activeIndex: index },
    () => {
      switch (this.state.activeIndex) {
        case 0:
          this.setState({ range: '5' },
            () => this.chartData())
            break;
        case 1:
          this.setState({ range: '30' },
            () => this.chartData())
          break;
        case 2:
          this.setState({ range: '180' },
            () => this.chartData())
            break;
        // case 3:
        //   this.setState({ range: 'YTD' },
        //     () => this.chartData())
        //     break;
        case 3:
          this.setState({ range: '365' },
            () => this.chartData())
            break;
        case 4:
          this.setState({ range: '1825' },
            () => this.chartData())
          break;
        default:
          break;
      }
    })
    
  }

   timeButtons = () => {
    return this.state.timeFrame.map((click, i ) => {
      // console.log(click);
      return <GraphHeader 
        key={click.name}
        name={click.name}
        index={ i }
        isActive={ this.state.activeIndex === i}
        onClick={ this.handleClick } 
        // range={ e => this.swapRange(e)}
        />
    })
   }


  
   setRange = (event) => {
     this.setState({ range: event.target.value }, 
      ()=> this.chartData())
   }
 
  render () {
    const { chartData, range,  } = this.state
    // console.log(range);
    return (
      <div className='uk-width-1-1 graph'>

      {/* render buttons if large screen */}
       <div className='uk-child-width-1-1 btn-group' >
        {this.timeButtons()}
       </div>

      {/* Else Render dropdown mobile */}
      <select className='select'value={this.state.range} onChange={this.setRange}>
        {/* <option value="1d" >1D</option>         */}
        <option value="5" >5D</option>
        <option value="1m" >1M</option>
        <option value="6m" >6M</option>
        {/* <option value="YTD" >YTD</option> */}
        <option value="1y" >1Y</option>
        <option value="5y" >5Y</option>
      </select>

        {this.state.show === false ? null : (
          <Graph chartData={chartData} range={range} />
        )}
      </div>
    )
  }
}

export default GraphContainer
