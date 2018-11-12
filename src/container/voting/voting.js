import React, { Component } from 'react';
import votingList from '../../component/votingList.js';

class Voting extends Component{
    constructor(props){
        super(props);
    
    this.list = {
        status:'',
        current_page:1,
        election:[
            {}
        ]
    };
    this.state = {};
    }

      /* Call api with asynchronos  */
    componentDidMount = async = () => {
        await this.voteInfo
    }
    voteInfo = e => { 
     return (
         axios.get('/voter/elections') //post 형식
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
            <div className = ''>
                <votingList list = {this.list.election}/>
            </div>
        );
    }
}
export default Voting;