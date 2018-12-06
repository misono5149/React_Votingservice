import React, { Component } from 'react';
import './VotingResultContent.css'
import {Sortnum} from '../lib/sort.js'
import { Segment} from 'semantic-ui-react';
import {Pie} from 'react-chartjs-2'
import 'chartjs-plugin-annotation'

class VotingResultContent extends Component {

	renderSortinglist = () => {
		let list = Sortnum(this.props.data.candidate);
		let prize = []; //순위 배열
		for(let i = 0; i<list.length; i++){
			prize.push(
				<Segment>{i+1}위 : {list[i].name} {'( '+ list[i].poll+'표 )'}</Segment>
			  )
			}
			return (
				<div className = ''>
					{prize}
				</div>
			)
	} 

	renderPieChart(){
		let list = Sortnum(this.props.data.candidate);
		let nametemp = [] //array type
		let polltemp = []
		for(let i =0; i< list.length; i++){
			nametemp.push(String(list[i].name));
			polltemp.push(list[i].poll);
		}
		const aboutvote = {
			charData :{
				labels : nametemp,
				datasets : [
					{
						label : '투표수',
						data : polltemp,
						backgroundColor : [
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
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
						display: true, 
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
		console.log(this.props.data)
		return (
			<div className="voting-result-content">
				<div className='ui card'>
					<div className='content resultcard'>
				    <div className='header'>{this.props.data.title}<br/> 결과</div>
				    <div className='meta'> <br/>
                      <span className='date'>
                      시작 시간 : {this.props.data.start_time}      <br/>
                      </span>
					  <span className='date'>
                      종료 시간 : {this.props.data.end_time}
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