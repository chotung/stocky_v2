const initialState = {
  // Stocks for the search
  stocks: [{}],
  // a single stock
  singleStock: {},
  // Conditional Rendering
  searching: true
};
/**
 * APP STATE
 * stocks: [{}],
  singleStock: {},
  selectedOption: null,
  searching: true

  STOCKS CONTAINER STATE
  data: [],
  symbol: props.stockSymbol,  SHOULD USE THE SYMBOL FROM SINGLESTOCK.VALUE.SYMBOL
  addData: [],
  news: []
 */



const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return state
    default:
      return state
  }
}


export default stockReducer



/**
 
 getQuote = async () => {

    const symbol = this.state.symbol
    let response = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}`)

        this.setState({
          data: response.data.profile
        })
  }




  fetchData = () => {
    axios.get(url).then(companies => {
      // console.log(companies.data.symbolsList)
      companies.data.symbolsList.map(comp => {
        return options.push({
          value: comp,  
          label: comp.symbol + "/" + comp.name
        });
      });
      this.setState({
        stocks: options
      });
    });
  };
 */