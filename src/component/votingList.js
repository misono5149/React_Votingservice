import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './votingList.css'
import '../lib/time.js'
import '../App.css';
import { ConvertTimestamp } from '../lib/time.js';
class VotingList extends Component{
    constructor(props){
        super(props);
        this.state = {}; // there is no state
    }

    handleHistory = (item) => {
        let url = '/voter/elections/:' + item.election_id + '/candidates'
        this.props.history.push({
            pathname: url,
            state : item
          })
    }
   
     renderTableRow = () => {
        return this.props.vote.map((row, index) => {
           let color = ""
           let status = ""
   
           if(row.state === 1) {
              color = "negative"
              status = "투표전"
           } else if(row.state === 3) {
              color = "warning"
              status = "투표완료"
           } else {
              status = "투표중"
           }
           return (
                 <tr className={color} key={index} onClick={() => this.handleHistory(row)}>
                       <td>
                          {status}
                       </td>
                       <td>
                          {row.title}
                       </td>
                       <td className="voting-text">
                          {row.content}
                       </td>
                       <td>
                          {ConvertTimestamp(row.start_time)}
                       </td>
                       <td>
                          {ConvertTimestamp(row.end_time)}
                       </td>
                 </tr>
              )
        })
     }
    render(){
        return (
            <div className = 'voting_list'>
                <div className = 'title m-b-50'>
                <div className = 'ui horizontal divider'></div>
                    <h1 className = 'ui centered header'>선거 목록</h1>
                </div>
                <div className = 'ui horizontal divider'></div>
                <div className = 'ui grid centered'>
                    <div className = 'fourteen wide computer column'>
                        <table className = 'ui celled table selectable' id = 'thistable'>
                            <thead>
                                <tr>
                                    <th>
                                        상태
                                    </th>
                                    <th>
                                        제목
                                    </th>
                                    <th>
                                        내용
                                    </th>
                                    <th>
                                        시작 일(시간)
                                    </th>
                                    <th>
                                        종료 일(시간)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                           {this.renderTableRow()}
                            </tbody>
                            <tfoot className = ''>
                                <tr className = ''>
                                    <th colSpan = '5' className = ''>
                                    <div className = "ui pagination right floated menu">
                                        <a className = 'icon item'>
                                            <i aria-hidden = 'true' className = 'chevron left icon'/>
                                        </a>
                                        <a className = 'item'>1</a>
                                        <a className = 'item'>2</a>
                                        <a className = 'item'>3</a>
                                        <a className = 'item'>4</a>
                                        <a className = 'icon item'>
                                            <i aria-hidden = 'true' className = 'chevron right icon'/>
                                        </a>
                                    </div>
                                    
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(VotingList);