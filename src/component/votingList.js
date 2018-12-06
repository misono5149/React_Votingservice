import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './votingList.css'
import '../lib/time.js'
import '../App.css';
import axios from 'axios'
import { getCookie } from '../lib/getcookie';
class VotingList extends Component{
    constructor(props){
        super(props);
        this.state = {
            'current_page':'',
            'list':[],
            'status':'',
        } // there is no state
    }
    handleHistory = (item) => {
        let url = '/voter/elections/:' + item.election_id + '/candidates'
        this.props.history.push({
            pathname: url,
            state : item,
          })
    }
    pagiNation = (pagenum) => { 
        const tempPage = pagenum;
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+getCookie()
            }
          };
        axios.get('http://52.79.177.231:8080/voter/elections?page='+tempPage, config)//get 형식
        .then((data) => {
            this.setState({
                current_page : data.data.current_page,
                list : data.data.list,
                status : data.status
            })
        })
   }
   
     renderTableRow = () => {
         if(this.state.current_page>0 && this.state.status === 200){ //정상 페이지면
            return this.state.list.map((row, index) => {
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
                               {(row.start_time)}
                            </td>
                            <td>
                               {(row.end_time)}
                            </td>
                      </tr>
                   )
             })
         }
         else if(this.state.current_page>0 && this.state.status === 400){
            return (
                <tr>
                      <td colSpan = '5'>
                         <h1>선거가 없습니다</h1>
                      </td>
                </tr>
             )
         }
         else{
             return this.props.vote.list.map((row, index) => {
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
                           {(row.start_time)}
                        </td>
                        <td>
                           {(row.end_time)}
                        </td>
                  </tr>
               )
         })}
        
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
                        <table className = 'ui celled table selectable fixed'>
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
                                        <a className = 'item one' onClick = {(e) => this.pagiNation(1)}>1</a>
                                        <a className = 'item two' onClick = {(e) => this.pagiNation(2)}>2</a>
                                        <a className = 'item three' onClick = {(e) => this.pagiNation(3)}>3</a>
                                        <a className = 'item four' onClick = {(e) => this.pagiNation(4)}>4</a>
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