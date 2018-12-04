import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Route, Link, Switch} from 'react-router-dom';
import Voting from './container/voting/voting.js';
import MainNav from './component/mainNav.js'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import DescriptVote from './component/descriptVote';
import Candidate from './component/Candidate.js';
import VotingResult from './container/voteResult/result.js'
const Main = () => (
  <Switch>
    <Route exact path = '/voter/elections' component = {Voting}></Route>
    <Route exact path = '/login' component = {Login}></Route>
    <Route exact path = '/sign-up' component = {Register}></Route>
    <Route  exact path = '/voter/elections/:election_id/candidates' component = {DescriptVote}></Route>
    <Route  exact path = '/voter/candidates/:candidate_id' component = {Candidate}></Route>
    <Route  exact path="/voting/result" component={VotingResult}></Route>

  </Switch>
)
class App extends Component {
  state = {
    'is_auth' : false
  }
  render() {
    return (
      
      <div className="App">
          {this.state.is_auth?(
      		  <div> 
      			  <MainNav/>
		          <div className="content bg">
		         	  <Main/>
		         </div>
        	</div>
        ):(<Login auth = {this.state.is_auth}/>)
      }
      </div>

    );
  }
}

export default App;
