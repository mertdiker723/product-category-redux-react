import React from 'react';
import ReactDOM from 'react-dom';
import Approutes from './app-routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/index-reducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Approutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

