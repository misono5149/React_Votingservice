import React, { Component } from 'react';
import './popup.css';
import axios from 'axios'
class Popup extends Component {
    constructor(props){
        super(props);
        this.voting = this.voting.bind(this);
    }

    voting = (candidateid, electionid) => {
        console.log(candidateid);
        console.log(electionid);
        const vote = [{ //params
            election_id : electionid,
            candidate_id : candidateid
        }]
        const url = 'http://52.79.177.231:8080/voter/elections/voting'
        axios.post(url, {vote})
        .then((res) => (console.log(res)))
        .catch((err) => (console.log(err)))
    }
    render(){
        console.log(this.props);
        return(
            <div className = 'popup'>
                <div className = 'popup_inner'>
                    <h1 className = 'popup_title'>{this.props.text}</h1>
                    <div className = 'button_grid'>
                        <button className = 'ui big negative button m-b-20'
                                role = 'button'
                                onClick = {this.voting(this.props.candidate_id, this.props.election_id)} >투표하기</button>
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