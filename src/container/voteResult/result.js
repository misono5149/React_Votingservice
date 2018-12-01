import React, { Component } from 'react';
import VotingResultList from '../../component/VotingResultList.js';
import './result.css'
class VotingResult extends Component {
	constructor(props) {
      super(props);
      
		this.list = {
	  	status:"success",
	  	current_page:1,
        election:[
            {
	  		title: "100대 회장선거",
	  		text:"회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거",
	  		start_time:1541989543,
	  		end_time:1542680743,
	  		state:3,
	  		id:1,
	  		all_vote:100,
	  		candidate:[{
	  			name:"김숙자",
	  			poll:60
	  		},{
	  			name: "최연주",
	  			poll:80
	  		},{
	  			name: "박창지",
	  			poll:10
	  		}]

            },
            {
	  		title: "101대 회장선거",
	  		text:"회장선거",
	  		start_time:1541989543,
	  		end_time:1542680743,
	  		state:3,
	  		id:2,
	  		all_vote:120,
	  		candidate:[{
	  			name:"김지말",
	  			poll:20
	  		},{
	  			name: "최건호",
	  			poll:40
	  		},{
	  			name: "박기범",
	  			poll:50
	  		}]

            },
			
			{
			title: "1대 회장선거",
			text:"회장선거",
			start_time:1541989543,
			end_time:1542680743,
			state:3,
			id:3,
			all_vote:1567,
			candidate:[{
				name:"Kate",
				poll:684
			},{
				name: "Andy",
				poll:321
			},{
				name: "Stacy",
				poll:865
			}]

		  }]
		
	  }
        this.state = {};
    }

  render() {
    return (
      <div className="voting-result">
      	<div className="title m-b-50">
      		 종료된 투표
      	</div>
            <VotingResultList data={this.list.election}/>
      </div>
    );
  }
}

export default VotingResult;