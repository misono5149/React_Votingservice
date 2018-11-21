import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PopupCandidate from '../../component/popupCandidate';
import img from '../../assets/img/matthew.png'
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
        this.state = {};
    }


    handleHistory = (candidate_id) => {
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
        /**
             1. end_time: "1542680743"
            2. id: 1
            3. start_time: "1541989543"
            4. state: 2
            5. text: "회장선검나ㅓ리ㅓㅁㄴ이ㅏ러ㅣㅁ낭ㄹ"
            6. title: "100대 회장선거"
         */
        //if(data.id === this.people.election_id){
           return this.people.map((people, index) => {
                if(data.id === people.election_id){
                    return(
                        <tr className='' key = {index} onClick={() => this.handleHistory(people.election_id)}>
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
                    else{
                        return (
                            <tr className='' key = {index}>
                            <td>
                                후보자가 없네요..
                            </td>
                        </tr>
                        )
                    }
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