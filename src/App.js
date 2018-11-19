import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Route, Link, Switch} from 'react-router-dom';
import Voting from './container/voting/voting.js';
import MainNav from './component/mainNav.js'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import AboutVote from './container/aboutVote/aboutVote.js'

const Main = () => (
  <Switch>
    <Route exact path = '/voter/elections' component = {Voting}></Route>
    <Route exact path = '/login' component = {Login}></Route>
    <Route exact path = '/sign-up' component = {Register}></Route>
    <Route exact path = '/voter/elections/:election_id/candidates' component = {AboutVote}></Route>
  </Switch>
)
class App extends Component {
  
  render() {
    const is_auth = true;
    return (
      <div className="App">
      {
      	is_auth?(
      		<div> 
      			<MainNav/>
		          <div className="content">
		         	  <Main/>
		         </div>
        	</div>
        ):(<Login />)
      }
         
      </div>

    );
  }
}

export default App;
