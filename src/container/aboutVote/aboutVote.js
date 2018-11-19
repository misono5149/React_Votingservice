import React, { Component } from 'react';
import DescriptVote from '../../component/descriptVote.js'
import axios from 'axios'

class AboutVote extends Component{
    constructor(props){
        super(props);
    this.list = { 
        candidate:[
            {}
        ],
    status:'' 
    }
    this.state = {};
    }

      /* Call api with asynchronos  
        before components mount in this web page 
        vote list are called by api server */
    async componentDidMount(){
        await this.voteInfo_cand
    }
    voteInfo_cand = e => { 
     return (
         axios.get('/voter/elections/:' + this.props.election_id + '/candidates') //get 형식
         .then(res => res.json)
         .then(json => console.log(json))
         .then(res => 
             {this.setState(
                {
                     candidate : res.json //이런식인가??? 검증필요 
                }
            )}
             )
         .catch(err => alert(err))
     )
 }   
    render(){
        return (
            <div className = 'd'>
                <DescriptVote list = {this.list.candidate}/>
            </div>
        );
    }
}
export default AboutVote;