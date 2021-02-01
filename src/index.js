import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {myreducer} from './reducer';

const store = createStore(myreducer);

const status = false;

ReactDOM.render(
  <Provider store={store}>
    <App status={status} />
    </Provider>,
  document.getElementById('root')
);
