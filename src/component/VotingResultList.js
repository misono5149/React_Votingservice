import React, { Component } from 'react';
import VotingResultContent from './VotingResultContent.js'

class VotingResultList extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	renderCandidateListRender = () => {
		console.log(this.props.data)
		let count = Math.ceil(this.props.data.length/4)
		let candidateListComponents = []
		
		for(let i=0;i<count;i++) {
			let data = this.props.data.slice(i*4,i*4+4)


			candidateListComponents.push(
				<div className="row">
					{
						data.map((election, index) => {
							
							return (
								<div className="column" key={index}>
									<VotingResultContent data={election} handleHistory={this.handleHistroy}/>
								</div>
							)
						})
					}
				</div>
			)
		}
		return candidateListComponents;
	}
	noResult = () => {
		return (<div className = 'noresult_div'>
            <div className = 'ui middle aligned centered grid container'>
                	<h1 className = 'ui centered header'>현재없음</h1>
            </div>
        </div>
		);
	}
	render() {
		return(
			<div className="voting-result-list row">
				<div className="ui equal width grid row">
					{
						this.props.data?
						this.renderCandidateListRender():
						this.noResult()}
				</div>				
			</div>
		)
	}
}

export default VotingResultList;