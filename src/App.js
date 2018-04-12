import React, { Component } from 'react';
import './App.css';
import Layout from './Layout';
import Register from './Register';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Layout}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </div>
    );
  }
}

export default App;
