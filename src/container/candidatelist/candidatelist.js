import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PopupCandidate from '../../component/Candidate';
import img from '../../assets/img/matthew.png'
import { Segment } from 'semantic-ui-react';
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
                election_id : 1,
                id : 3
            }

        ]
    }

    handleHistory = (person, candidate_id) => {
        let url = '/voter/candidates/:' + candidate_id
        this.props.history.push({
            pathname : url,
            state : person
        })
        console.log(person)
    }
    renderCandidateListTable = () => {
        //후보자 번호, 후보자 사진, 후보자 이름 순
        //candidate로 받은 것을 매핑해서 뿌려줌
        //table크기 수정 필요
        let data = this.props.location.state
           return this.people.map((people, index) => {
                if(data.id === people.election_id){
                    return(
                        <tr className='' key = {index} onClick={() => this.handleHistory(people, people.id)}>
                            <td>
                                <img src = {img} className = 'ui image'/>                                
                            </td>
                            <td>
                                {people.id}
                            </td>
                            <td>
                                {people.name}
                            </td>
                        </tr>
                    )}
                   }
        
        )
   // }
}
    render(){
        return(
            <div className = 'candidateList'>
                <div className = 'ui grid centered'>
                    <div className = 'fourteen wide computer column'>
                        <table className = 'ui celled red large table selectable'>
                            <thead>
                                <tr>
                                    <th>후보자 사진</th>
                                    <th>후보자 번호</th>
                                    <th>후보자 이름</th>
                                </tr>
                            </thead>
                            <tbody>{this.renderCandidateListTable()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CandidateList);