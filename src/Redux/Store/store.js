import { legacy_createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import userReducers from "./../Reducers/userReducers";

const store = legacy_createStore (
  userReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
