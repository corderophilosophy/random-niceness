import React from 'react';
import ReactDOM from 'react-dom';
import tachyons from 'tachyons';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store';

import './index.css';

const store = configureStore();

const RndNiceness = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(
    <RndNiceness />,
  document.getElementById('root')
);
