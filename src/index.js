import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";
import thunk from "redux-thunk";
import { CookiesProvider } from "react-cookie";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

//const store = createStore(rootReducer);
/*

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
*/

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);
store.subscribe(
  throttle(() => {
    saveState({
      jobData: store.getState().jobData,
    });
  }, 1000)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
