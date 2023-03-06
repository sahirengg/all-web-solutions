import { legacy_createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./../RootReducers/rootReducers";

const store = legacy_createStore (
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
