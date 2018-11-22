import React, { Component } from 'react';
import {ConvertTimestamp} from '../lib/time.js'
import CandidateList from '../container/candidatelist/candidatelist.js'
import './descriptVote.css';
class DescriptVote extends Component{
    constructor(props){
        super(props);
        this.state = {}; // there is no state
    } 
    
    render(){
        return (
            <div className = 'about-voting'>
                <div className = 'title text-left m-b-50'>
                    {this.props.location.state.title}
                </div>
                <div className = 'ui divider'/>
                    <div className = 'ui internally grid'>
                        <div className = 'row'>
                            <div className = 'four wide column m-t-50'>
                                사진
                            </div>
                            <div className = 'twelve wide column text-left'>
                            <div className = 'voting-title m-b-50'>
                                선거 기간 
                            </div>
                            <div className = 'm-t-20 m-b-20'>
                                {ConvertTimestamp(this.props.location.state.start_time)} ~ {ConvertTimestamp(this.props.location.state.end_time)}
                            </div>
                            <div className = 'voting-content'>
                                선거 내용
                            </div>
                            <div className = 'm-t-20 m-b-20'>
                                {this.props.location.state.text}
                            </div>
                        </div>
                        </div>
                        <div className = 'row ui grid'>
                            <div className = 'row title m-l-20 m-b-50'>
                                선거에 등록 된 후보자 목록
                            </div>
                        <div className = 'row'>
                            <CandidateList candidate = {this.props.location.state.id}/>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default DescriptVote;