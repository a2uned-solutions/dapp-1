/* global process */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Home from './routes/Home';
import Game from './components/GameContainer';
import * as serviceWorker from './serviceWorker';
import './assets/styles/App.css';

const env = {
  network: process.env.REACT_APP_ETH_NETWORK || 'development', // Default to Ganache CLI
};

ReactDOM.render(
  <Router>
    <div>
      <Route path='/' render={() => <App {...env} />} />
      <Route path="/home" component={Home} />
      <Route path="/game" component={Game} />
    </div>
  </Router>, document.getElementById('root'));

// <App {...env} />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
