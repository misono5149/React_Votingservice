import React, { Component } from 'react';
import VotingList from '../../component/votingList.js';
import axios from 'axios'
import {getCookie} from '../../lib/getcookie.js'
class Voting extends Component{
    constructor(props){
        super(props);
    this.state = {
        'current_page':'',
        'list':[],
        'status':'',
        }
    }

      /* fCall api with asynchronos  
        before components mount in this web page 
        vote list are called by api server */
    componentDidMount(){
        this.voteInfo();
    }
   
    /*getCookie('name');  결과: Ethan */
    voteInfo = () => { 
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+getCookie()
            }
          };
        axios.get('http://52.79.177.231:8080/voter/elections?page=0', config)//get 형식
        .then((data) => {
            this.setState({
                current_page : data.data.current_page,
                list : data.data.list,
                status : data.status
            });
        })
    }
    render(){
        console.log(this.state)
        return (
            <div className = 'list'>
                <VotingList vote = {this.state}/>
            </div>
        );
    }
}
export default Voting;