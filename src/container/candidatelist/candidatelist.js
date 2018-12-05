import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import img from '../../assets/img/matthew.png'
import axios from 'axios'
import './candidatelist.css'
import {getCookie} from '../../lib/getcookie.js'
class CandidateList extends Component {
    constructor(props){
        super(props);

       this.state = {
           'list' : [],
           'status' : '',
       }
    }
    componentDidMount(){
        this.candidateInfo();
    }
    candidateInfo = () => { 
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+getCookie()
            }
          };
         axios.get('http://52.79.177.231:8080/voter/election/info/'+this.props.candidate.election_id+'/candidates', config) //get 형식
        .then((data) => {
            this.setState({
                list : data.data.candidate,
                status : data.status
            });
        })
        .catch((err) => {console.log(err)})
    }
    handleHistory = (votestate, person) => {
        let url = '/voter/candidates/' + person.candidate_id
        this.props.history.push({
            pathname : url,
            state : person,
            voteState : votestate,
        })
    }
    renderCandidateListTable = () => {
        //후보자 번호, 후보자 사진, 후보자 이름 순
        //candidate로 받은 것을 매핑해서 뿌려줌
        //table크기 수정 필요
        let data = this.props.candidate;
        console.log(data);
        console.log(this.state)
        if(this.state.status === 200){
            return this.state.list.map((people, index) => {
                if(data.election_id === people.election_id){
                    return(
                        <tr className='' key = {index} onClick={() => this.handleHistory(this.props.location.state.state, people)}>
                            <td>
                                <img src = {img} className = 'ui image'/>                                
                            </td>
                            <td>
                                {people.candidate_id}
                            </td>
                            <td>
                                {people.name}
                            </td>
                        </tr>
                    )}
                   })
        }
        else{
            return(
                    <tr className='t-a-c'>
                        <td colSpan = '3'>
                            <h1>아직 후보자가 없네요</h1>                            
                        </td>
                    </tr>
                )}
               }
    render(){
        return(
            <div className = 'candidateList'>
                <div className = 'ui grid centered'>
                    <div className = 'fourteen wide computer column'>
                        <table className = 'ui celled red large table selectable'>
                            <thead>
                                <tr className = 't-a-c'>
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