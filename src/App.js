import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Counter from './counter';
import Bootstrap from './Bootstrap';
import Portfolio from './Portfolio';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div className="App">
    <Navigation/>
    	<Switch>
    	<Route path='/' component={Counter} exact />
        <Route path='/bootstrap' component={Bootstrap} />
        <Route path='/portfolio' component={Portfolio} />
    	</Switch>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
