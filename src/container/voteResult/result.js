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

            }
		]
		
	  }
        this.state = {};
	}
	/*{
    	"current_page": 0,
    	"election": [
        	{
            	"election_id": 100,
            	"title": "제 101호 컴퓨터공학과 회장 선거", //사용
            	"start_time": "2018-11-12 12:23:00",  //사용
            	"end_time": "2018-11-12 12:23:00",	// 사용
            	"state": 3,			//사용
            	"candidate": []
        	},
       		{
            	"election_id": 99,
            	"title": "제 101호 학생회장",
            	"start_time": "2018-11-12 12:23:00",
            	"end_time": "2018-11-12 12:23:00",
            	"state": 3,
            	"candidate": [
                	{
                    	"election_id": 99,
                    	"all_vote": 4,
                   	 	"candidate_id": 13,
                    	"poll": 4,
                    	"student_id": "201301923",
                    	"name": "도로링",
                    	"major": "고양이학과",
                    	"college": "동물대학",
                    	"thumbnail": "aaa",
                    	"resume": "ddd"
                }
            ]
        }
    ],
    "status": 200
}
			*/
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