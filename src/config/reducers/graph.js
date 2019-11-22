/**
 * 
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



    chartData: [],
    test:'test'







    chartData = () => {
    const symbol = this.state.symbol
    // const symbol = 'AAPL'
    const range = this.state.range
    axios
      // .get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
      .get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=${range}`)
      .then(res => {
        let quotes = res.data.historical
        let label = []
        let openPrice = []
        console.log(openPrice)
        console.log('quotes', quotes);
        quotes.forEach(quote => {
          openPrice.push(quote.open)
          label.push(quote.date)
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








 */