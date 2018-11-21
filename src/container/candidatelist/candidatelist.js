import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PopupCandidate from '../../component/popupCandidate';
class CandidateList extends Component {
    constructor(props){
        super(props);

        this.people  = [
            {
                name:'김진수',
                thumb_nail : '',
                resume : 'asdfasdfewr',
                party : '1',
                election_id : 1,
                id : 1
            },
            {
                name:'김진아',
                thumb_nail : '',
                resume : 'asdfasd1234324',
                party : '1',
                election_id : 1,
                id : 2
            },
            {
                name:'김진옹',
                thumb_nail : '',
                resume : 'asdf1밍ㄴ234324',
                party : '1',
                election_id : 2,
                id : 3
            }

        ]
        this.state = {};
    }


    handleHistory = (id, candidate_id) => {
        let url = '/voter/candidates/:' + candidate_id
        this.props.history.push({
            pathname : url,
            state : this.candidate[candidate_id-1]
        })

    }
    renderCandidateListTable = () => {
        //후보자 번호, 후보자 사진, 후보자 이름 순
        //person으로 받은 것을 매핑해서 뿌려줌
        let data = this.props.location.state
        console.log(data)
        if(data.id === this.people.election_id){
            console.log(1)
           return data.map((people, index) => {
                    
                        return(
                            <div className = 'column'>
                                   <tr className='' key = {index} onClick={() => this.handleHistory(people.election_id)}>
                                        <td>
                                            {people.thumb_nail}
                                        </td>
                                        <td>
                                            {people.election_id}
                                        </td>
                                        <td>
                                            {people.name}
                                        </td>
                                    </tr>
                            </div>
                        )
                    }
                
        )
    }
       
    }
    render(){
        return(
            <div className = 'CandidateList row'>
                {this.renderCandidateListTable()}
            </div>
        )
    }
}

export default withRouter(CandidateList);