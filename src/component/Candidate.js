import React, { Component } from 'react';
import './Candidate.css';
import Popup from './popup.js'
class Candidate extends Component{
        constructor(props){
        super(props);
        this.state = {
            showPopup : false
        }; // there is no state
    } 
    togglePopup(){
        this.setState({
            showPopup : !this.state.showPopup
        });
    }
 render(){
    console.log(this.props.location.state)
     return(
        <div className = 'm-l-190'>
        <div className='ui celled centered grid'>
            <div className='row'>
                <div className='eight wide column'>
                    후보자 이미지
                </div>
            <div className='eight wide column'>
                <div className='ui celled grid'>
                    <div className='row'>
                        <div className='five wide column'>{this.props.location.state.name}</div>
                        <div className='five wide column'>{this.props.location.state.id}</div>
                        <div className='six wide column'>{this.props.location.state.party}</div>
                    </div>
                </div>
                <div className='ui celled grid'>
                    <div className='row'>
                        <p>{this.props.location.state.resume}</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='row'>
                <div className='eight wide column'>
                    <button className='ui fluid button' role='button' onClick = {this.togglePopup.bind(this)}>
                        투표하기
                    </button>
                    {this.state.showPopup ?
                    <Popup id = {this.props.location.state.election_id} text = '진짜로 투표를 하실 껍니까??' closePopup = {this.togglePopup.bind(this)}/> : null}
                </div>
                <div className='eight wide column'>
                    <button className='ui fluid button' role='button'>
                        목록으로
                    </button>
                </div>
            </div>
      </div>
      </div>
     )
 }

}
export default Candidate;