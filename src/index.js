import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/App';

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import { store } from './_helpers';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();