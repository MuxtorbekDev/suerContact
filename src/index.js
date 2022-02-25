import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { contactReducer } from "./redux/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import "react-toastify/dist/ReactToastify.css";

const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
