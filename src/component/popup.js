import React, { Component } from 'react';
import './popup.css';
class Popup extends Component {
    constructor(props){
        super(props);
        this.voting = this.voting.bind(this);
    }

    voting = (candidateid, electionid) => {
       
        console.log(candidateid);
        console.log(electionid);
        
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