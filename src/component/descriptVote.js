import React, { Component } from 'react';
import CandidateList from '../container/candidatelist/candidatelist.js'
import './descriptVote.css';
import img from '../assets/img/poster.PNG'
class DescriptVote extends Component{
    constructor(props){
        super(props);
        this.state = {}; // there is no state
    } 
    isVoting = (voteStatus) => {
        if(voteStatus === 2){ //투표가능
            return ' <투표가능!>'
        }
        else if(voteStatus === 3){ //투표종료
            return ' <종료된 선거!>'
        }
        else{ //투표 시작전
            return ' <시작 전 선거>'
        }
    }
    render(){
        return (
            <div className = 'about-voting'>
                <div className = 'title text-left m-b-50'>
                    {this.props.location.state.title}   {this.isVoting(this.props.location.state.state)}
                </div>
                <div className = 'ui divider'/>
                    <div className = 'ui internally grid'>
                        <div className = 'row'>
                            <div className = 'four wide column m-t-50'>
                                <img src = {img}></img>
                            </div>
                            <div className = 'twelve wide column text-left'>
                            <div className = 'voting-title  m-b-20'>
                                <h2>선거 기간 =></h2>
                            </div>
                            <div className = 'm-t-20 m-b-50'>
                                <h3>{(this.props.location.state.start_time)} ~ {(this.props.location.state.end_time)}</h3>
                            </div>
                            <div className = 'voting-content'>
                                <h2>선거 내용 =></h2>
                            </div>
                            <div className = 'm-t-20 m-b-20'>
                                <h3>{this.props.location.state.content}</h3>
                            </div>
                        </div>
                        </div>
                        <div className = 'row ui grid'>
                            <div className = 'row title m-l-20 m-b-50'>
                                선거에 등록 된 후보자 목록
                            </div>
                        <div className = 'row'>
                            <CandidateList candidate = {this.props.location.state}/>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default DescriptVote;