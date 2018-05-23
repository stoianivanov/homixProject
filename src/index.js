import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { combineReducers } from "redux";
import createStore from "./client/store/middleware";
import { persistStore } from "redux-persist";

import reducers from "./client/store/reducers";

const appReducer = combineReducers(reducers);

const store = createStore(appReducer);

import App from "./client/App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
