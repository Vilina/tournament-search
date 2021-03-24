import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './redux/store'
import './style/app.scss';
import App from "./App";
import { Helmet } from "react-helmet";

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tournaments</title>
    </Helmet>
    <App />
  </Provider>,
  rootElement
)