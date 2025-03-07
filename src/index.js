import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "./polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { icons } from "./assets/icons";
import { Provider } from "react-redux";
import { initFunc } from "./store/apiCall";
import store from "./store/index";
import "./scss/style.scss";
import "./index.css"

initFunc();

React.icons = icons;



ReactDOM.render(

  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}