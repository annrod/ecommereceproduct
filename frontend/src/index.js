import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  //<React.StrictMode>
    //<App />
    //<HomePage/>
  //</React.StrictMode>,
  document.getElementById('root')
);

