import React, { Component } from 'react';
import VotingList from '../../component/votingList.js';
import axios from 'axios'
class Voting extends Component{
    constructor(props){
        super(props);
    this.state = {
        'current_page':'0',
        'list':[],
        'status':''
        }
    }

      /* Call api with asynchronos  
        before components mount in this web page 
        vote list are called by api server */
    componentDidMount(){
        this.voteInfo();
    }
    voteInfo = () => { 
         axios.get('http://52.79.177.231:8080/voter/elections')//get 형식
        .then((data) => {
            this.setState({
                current_page : data.current_page,
                list : data.data.list,
                status : data.status
            });
        })
    }
    render(){
        return (
            <div className = 'list'>
                <VotingList vote = {this.state.list}/>
            </div>
        );
    }
}
export default Voting;