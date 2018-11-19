import React, { Component } from 'react';
import VotingList from '../../component/votingList.js';
import axios from 'axios'
class Voting extends Component{
    constructor(props){
        super(props);
    
    this.list = {
        status:'',
        current_page:1, //칸 꽉차면 2페이지로 보내야하는데 이걸 어떻게 해야....
        election:[
            {}
        ]
    };
    this.state = {};
    }

      /* Call api with asynchronos  
        before components mount in this web page 
        vote list are called by api server */
    async componentDidMount(){
        await this.voteInfo
    }
    voteInfo = e => { 
     return (
         axios.get('/voter/elections') //get 형식
         .then(res => res.json)
         .then(json => console.log(json))
         .then(res => 
             {this.setState(
                {
                     list : res.json //이런식인가??? 검증필요 
                }
            )}
             )
         .catch(err => alert(err))
     )
 }   
    render(){
        return (
            <div className = 'list'>
                <VotingList list = {this.list.election}/>
            </div>
        );
    }
}
export default Voting;