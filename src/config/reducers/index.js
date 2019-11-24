import { combineReducers } from "redux";
import stocks from "./stocks"
import graph from "./graph"

const rootReducer = combineReducers({
  stocks,
  graph
});

export default rootReducer;

