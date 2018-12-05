import React, { Component } from 'react';
import VotingResultList from '../../component/VotingResultList.js';
import './result.css'
import axios from 'axios'
import {getCookie} from '../../lib/getcookie.js'
class VotingResult extends Component {
	constructor(props) {
      super(props);

        this.state = {
			'list':[]
		};
	}
	componentDidMount(){
		this.resultInfo();
	}
	resultInfo = () => { 
		var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+getCookie()
            }
          };
		axios.get('http://52.79.177.231:8080/voter/elections/result', config)//get 형식
		.then((data) => {
		this.setState({
			list : data.data.election
		});
		})
	}
  render() {
    return (
      <div className="voting-result">
      	<div className="title m-b-50">
      		 종료된 투표
      	</div>
            <VotingResultList data={this.state.list}/>
      </div>
    );
  }
}

export default VotingResult;