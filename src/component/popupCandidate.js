import React, { Component } from 'react';

class PopupCandidate extends Component{
 render(){
    console.log(this.props)
     return(
        <tr className='' onClick={() => this.props.handleHistory(this.props.data.election_id)}>
        <td>
            {this.props.data.thumb_nail}
        </td>
        <td>
            {this.props.data.election_id}
        </td>
        <td>
            {this.props.data.name}
        </td>
    </tr>
     )
 }

}
export default PopupCandidate;