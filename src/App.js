import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Route, Link, Switch} from 'react-router-dom';
import Register from './container/register/register.js';

const Main = () => (
  <Switch>
   
    <Route exact path = '/sign-up' component = {Register}></Route>
  </Switch>
)
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Register/>
      </div>

    );
  }
}

export default App;
