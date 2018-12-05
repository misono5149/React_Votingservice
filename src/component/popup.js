import React, { Component } from 'react';
import './popup.css';
import axios from 'axios'
import {getCookie} from '../lib/getcookie.js'
class Popup extends Component {
    constructor(props){
        super(props);
    }
    voting = (candidateid, electionid) => {
        if(this.props.auth){
        const vote = { //params
           params:{ 
                election_id : electionid,
                candidate_id : candidateid
           }
        }
        const url = 'http://52.79.177.231:8080/voter/elections/voting'
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+getCookie()
            }
          };
        axios.post(url, vote, config)
        .then((res) => {
            if(res.status === 200){
                alert('투표하였습니다')
            }
        })
        .catch((err) => (alert('알 수없는 오류가 발생하였습니다. 투표가 정상적으로 이루어 지지 않았습니다 에러 :' + err)))
        }
        else{
            alert('다시 로그인 해주시기 바랍니다.')
            this.props.history.push({
                pathname: '/login'
            })
        }
    }

    render(){
        return(
            <div className = 'popup'>
                <div className = 'popup_inner'>
                    <h1 className = 'popup_title'>{this.props.text}</h1>
                    <div className = 'button_grid'>
                        <button className = 'ui big negative button m-b-20'
                                role = 'button'
                                onClick = {() => this.voting(this.props.candidate_id, this.props.election_id)} >투표하기</button>
                        <button className = 'ui big positive button m-b-20'
                                role = 'button'
                                onClick = {this.props.closePopup}>다시 한번 생각해보기</button>
                    </div>
                </div>
            </div>
        );
    }

  

 

   
}
export default Popup;