import React, { Component } from 'react';
import './popup.css';
class Popup extends Component {
    constructor(props){
        super(props);
        this.voting = this.voting.bind(this);
    }

    voting = (electionid) => {
        console.log(electionid);
    }
    render(){
        return(
            <div className = 'popup'>
                <div className = 'popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick = {this.voting(this.props.id)} >투표하기</button>
                    <button onClick = {this.props.closePopup}>다시 한번 생각해보기</button>
                </div>
            </div>
        );
    }
}
export default Popup;