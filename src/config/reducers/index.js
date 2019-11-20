import { combineReducers } from "redux";
import stocks from "./stocks"

const rootReducer = combineReducers({
  stocks
});

export default rootReducer;

/**
 * fetchData = () => {
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

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.setState({
      singleStock: selectedOption,
      searching: false
    });
  };

  handleHomeClick = () => {
    this.setState({ searching: true });
    this.setState({ selectedOption: null });
  };

  goHome = () => {
    this.setState({ searching: true });
  };
 */
