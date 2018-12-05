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
	/*{
		"current_page":0,
		"election_info":
			{
				"title":"제 101호 컴퓨터공학과 회장 선거",
				"major":"컴퓨터공학과",
				"college":"공과대학",
				"content":"컴퓨터공학과회장선거",
				"start_time":"1541989543",
				"end_time":"1542690743",
				"state":3,
				"election_id":100,
				"admin":"201202274"
			},
				"result":[],
				"status":200
			} 
			*/
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