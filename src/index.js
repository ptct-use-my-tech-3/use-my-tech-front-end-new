import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/reducer';

import { applyMiddleware,createStore } from 'redux';
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'


import reportWebVitals from './reportWebVitals';

const store=createStore(rootReducer,applyMiddleware(logger,thunk))

ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
      <App />
    </React.StrictMode>

  </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
