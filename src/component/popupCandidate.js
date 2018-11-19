import React, { Component } from 'react';

class PopupCandidate extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return( this.props.children.map((id) => {
            return(
            <div className = 'about_candidate_popup'>
                <div className = 'popup'>
                    <div className = 'popup_inner'>
                        <div className = 'ui celled grid'>
                            <div className = 'row'>
                                <div className = 'three wide column'>
                                    {id.thumb_nail}
                                </div>
                                <div className = 'thirteen wide column'>
                                    {id.election_id} {id.name} {id.party}
                                    <div className = 'ui divider'>
                                        {id.resume}
                                    </div>
                                </div>
                            </div>
                            <div className = 'row'>
                                <button className = 'ui primary button' role = 'button'>투표하기</button>
                                <button className = 'ui secondary button' role = 'button'>돌아가기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        )
        )
    }
}
export default PopupCandidate;