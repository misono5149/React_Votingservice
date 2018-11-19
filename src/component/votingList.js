import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './votingList.css'
class VotingList extends Component{
    constructor(props){
        super(props);
        this.state = {}; // there is no state
    }

    handleHistory = (id) => {
        let url = '/voter/elections/:' + {id} + '/candidates'
        this.props.history.push(url)
    }

    convertTimestamp = (timestamp) => {
        var d = new Date(timestamp * 1000),   // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),   // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),      // Add leading 0.
            ampm = 'AM',
            time;
               
         if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
         } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
         } else if (hh === 0) {
            h = 12;
         }
         
         // ie: 2013-02-18, 8:35 AM   
         time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
            
         return time;
      }
   
     renderTableRow = () => {
        return this.props.list.map((row, index) => {
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
                 <tr className={color} key={index} onClick={() => this.handleHistory(row.election_id)}>
                       <td>
                          {status}
                       </td>
                       <td>
                          {row.title}
                       </td>
                       <td className="voting-text">
                          {row.text}
                       </td>
                       <td>
                          {this.convertTimestamp(row.start_time)}
                       </td>
                       <td>
                          {this.convertTimestamp(row.end_time)}
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