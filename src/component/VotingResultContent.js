import React, { Component } from 'react';
import './VotingResultContent.css'
import { ConvertTimestamp } from '../lib/time.js';
import {Sortnum} from '../lib/sort.js'
import { Segment } from 'semantic-ui-react';
class VotingResultContent extends Component {
    
   

	render() {
        console.log(Sortnum(this.props.data.candidate))
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
				    <div className='description'>파이차트 구현</div>
				  </div>
				  <div className='extra content'>
                        <Segment>1위 : {}</Segment>
                        <Segment>2위 : {}</Segment>
                        <Segment>3위 : {}</Segment>
				  </div>
				</div>
			</div>
		)
    }
    
}

export default VotingResultContent;