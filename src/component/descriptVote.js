import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import PopupCandidate from './popupCandidate.js'
import {Route, Link} from 'react-router-dom';
class DescriptVote extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPopup : false
        }; // there is no state
        this.renderPopup = this.renderPopup.bind(this);
    }
      
    renderPopup = (id) => {
        console.log("click popup")
        return(
            <Link to = {{
                pathname : "/voter/candidates/:candidate_id",
                state : {showPopup : !this.state.showPopup}}}>{id}</Link>
        )
    }
     rendertableVote = () => {
        return this.props.list.map((row, index) => {
           return (
                 <tr className="candidate-table" key={index} onClick={() => this.renderPopup(row.id)}>
                       <td>
                            {row.election_id}
                       </td>
                       <td>
                            {row.thumb_nail}
                       </td>
                       <td>
                            {row.name}
                       </td>
                 </tr>
              )
        })
     }
    render(){
        return (
            <div className = 'about-voting'>
                <div className = 'title text-left m-b-50'>
                    선거이름
                </div>
                <div className = 'ui divider'></div>
                <div className = 'ui internally grid'>
                    <div className = 'row'>
                        <div className = 'four wide column'>
                            사진
                        </div>
                        <div className = 'twelve wide column text-left'>
                            <div className = 'voting-title'>
                                선거 기간 
                            </div>
                            <div className = 'm-t-20 m-b-20'>
                                기간 따오기
                            </div>
                            <div className = 'voting-content'>
                                선거 내용
                            </div>
                            <div className = 'm-t-20 m-b-20'>
                                내용 따오기
                            </div>
                        </div>
                    </div>
                    <div className = 'row m-t-50'>
                        <div className = 'title text-left m-b-50'>
                            선거에 등록 된 후보자 목록
                        </div>
                        <div className = 'ui grid centered'>
                            <div className = 'fourteen wide computer column'>
                                <table className = 'ui celled table selectable'>
                                    <thead>
                                        <tr>
                                            <th>
                                                후보자 번호
                                            </th>
                                            <th>
                                                후보자 사진
                                            </th>
                                            <th>
                                                후보자 이름
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.rendertableVote()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(DescriptVote);