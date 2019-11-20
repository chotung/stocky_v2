const initialState = {
  stocks: [{}],
  singleStock: {},
  selectedOption: null,
  searching: true
};
/**
 *    data: [],
      symbol: props.stockSymbol,
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