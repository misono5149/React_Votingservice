import React, { Component } from 'react';
import './VotingResultContent.css'
import { ConvertTimestamp } from '../lib/time.js';
import {Sortnum} from '../lib/sort.js'
import { Segment} from 'semantic-ui-react';
import {Pie} from 'react-chartjs-2'
import 'chartjs-plugin-annotation'

class VotingResultContent extends Component {
	
	renderSortinglist = () => {
		let list = Sortnum(this.props.data.candidate);
		let cand_name = [];
		for(let i = 0; i<list.length; i++){
			cand_name[i] = list[i].name;
			}
			return (
				<div className = ''>
					<Segment>1위 : {cand_name[0]}</Segment>
					<Segment>2위 : {cand_name[1]}</Segment>
					<Segment>3위 : {cand_name[2]}</Segment>
				</div>
			)
	}

	renderPieChart(){
		let list = Sortnum(this.props.data.candidate);
		const aboutvote = {
			charData :{
				labels : [list[0].name, list[1].name, list[2].name],
				datasets : [
					{
						label : '투표수',
						data : [list[0].poll, list[1].poll, list[2].poll],
						backgroundColor : [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						]
					}
				]
			}
		}
		return (
			
			<div>
			<Pie
				data = {aboutvote.charData}
				options = {{
					responsive : true,
					legend:{
						display:true, 
						position : 'bottom',
					},
					maintainAspectRatio: false
				}}
				width={400}
				height={350}
			/>
			</div>
		)
	}

	render() {
		return (
			<div className="voting-result-content">
				<div className='ui card'>
					<div className='content'>
				    <div className='header'>{this.props.data.title} 의 결과</div>
				    <div className='meta'>
                      <span className='date'>
                      {ConvertTimestamp(this.props.data.start_time)} ~ {ConvertTimestamp(this.props.data.end_time)}
                      </span>
				    </div>
				    <div className='description'>
						{this.renderPieChart()}
					</div>
				  </div>
				  <div className='extra content'>
                        {this.renderSortinglist()}
				  </div>
				</div>
			</div>
		)
    }
    
}

export default VotingResultContent;