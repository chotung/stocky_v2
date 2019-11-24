import Axios from "axios"
const url = "https://financialmodelingprep.com/api/v3/company/stock/list";
// Should add a backend route for this
   
export const requestPost = () => {
  
}


export const recievedPost = (json) => {
  return {
    type: "RECIEVED_POSTS",
    json: json.data
  }
}
export const getCompanies = () => {
  
}

export const fetchData =  () => {
  return async (dispatch) => {
    dispatch(requestPost()) 
    try {
      const res = Axios.get(url)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
}
   





/**
 * 
 * FETCH DATA
 *  - Sets setState
 *      stocks: options
 * 
 * HANDLE CHANGE
 * - Sets setState({ selectedOptions})
 * - Sets setState({ singleStock: selectedOption, 
 *        searching:false
 *    })
 * 
 * 
 * HANDLE HOME CLICK
 * - this.setState({ searching: true })
 * - this.setState({ selectionOption: null })
 * 
 * 
 * GO HOME 
 * - this.setState({ searching: true })
 */



 /**
  * STOCKS CONTAINER ACTIONS
  * GET QUOTE
  * const symbol = this.state.symbol
    let response = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}`)
        this.setState({
          data: response.data.profile
        })



  */




  /**
   * GRAPH CONTAINER ACTIONS
   * 
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

   * 
   */