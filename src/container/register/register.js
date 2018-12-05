/*import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            email:'',
            pw:'',
            mobile:'',
            check_pw:''
        }
        /* 입력 state관리  
        this.changeID = this.changeID.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePW = this.changePW.bind(this)
        this.changeConfirmPW = this.changeConfirmPW.bind(this)
        this.changeMobile = this.changeMobile.bind(this)
        this.clickSignup = this.clickSignup.bind(this)
    }
    changeID(e){this.setState({id : e.target.value})}
    changeEmail(e){this.setState({email : e.target.value})}
    changePW(e){this.setState({pw : e.target.value})}
    changeConfirmPW(e){this.setState({check_pw : e.target.value})}
    changeMobile(e){this.setState({mobile : e.target.value})}

    /* Call api with asynchronos  
    _getUserAuth = async () => {await this.clickSignup}
    
    clickSignup = e => { //클릭시
    if(this.state.pw !== this.state.check_pw){
        alert("비밀번호가 서로 다릅니다")
    }
    else
    {
        if(this.state.check_pw === '' || this.state.email === '' || this.state.id === '' || this.state.mobile === '' || this.state.pw=== '')
        {
           alert('빠진 부분을 채워주세요')
        }
    
      e.preventDefault();
      const userinfo = {
          id : this.state.id,
          email : this.state.email,
          pw : this.state.pw,
          mobile : this.state.mobile
      }
      console.log(userinfo); //확인 완료
      return (
          axios.post('/sign-up', {userinfo}) //post 형식
          .then(res => res.json)
          .then(res => 
              {this.setState(
                {id : res.data.id, 
                email : res.data.email,
                pw : res.data.pw,
                mobil : res.data.email}
                )}
              )
          .then(json => console.log(json))
          .catch(err => alert(err))
          .then()//이메일을 보내야 할거 같음 여기다가 미구현
         // .alert("해당 이메일 주소로 확인 메일을 보냈습니다. 링크를 클릭해주세요")
      )
   
    }
  }   
    render(){
        return(
            <div className = 'register_div'>
            <div className = 'ui centered grid container'>
                <form className = 'ui form'>
                <div className = 'ui centered grid'>
                    <div className = 'row'>
                        <h1 className = 'ui header centered'>회원가입</h1>
                    </div>
                </div>
                <div className = 'ui section divider'></div>
                <div className = 'ui one column centered grid'>
                    <div className = 'row'>
                    <div className = 'sixteen wide mobile eight wide tablet four wide computer row'>
                        <div className = 'field'>
                            <label>아이디</label>
                                <input type = 'text' placeholder = 'input user id' onChange = {this.changeID} />
                        </div>
                    </div>
                    </div>
                </div>
                    <div className = 'ui section divider'></div>
                    <div className = 'ui one column centered grid'>
                    <div className = 'row'>
                    <div className = 'sixteen wide mobile eight wide tablet four wide computer row'>
                        <div className = 'field'>
                            <label>이메일</label>
                                <input type = 'email' placeholder = 'input user email' onChange = {this.changeEmail}/>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className = 'ui section divider'></div>
                    <div className = 'ui one column centered grid'>
                    <div className = 'row'>
                    <div className = 'sixteen wide mobile eight wide tablet four wide computer row'>
                        <div className = 'field'>
                            <label>휴대전화번호</label>
                                <input type = 'text' placeholder = 'input user mobile phone number' onChange = {this.changeMobile} />
                        </div>
                    </div>
                    </div>
                </div>
                    <div className = 'ui section divider'></div>
                    <div className = 'ui one column centered grid'>
                    <div className = 'row'>
                    <div className = 'sixteen wide mobile eight wide tablet four wide computer row'>
                        <div className = 'field'>
                            <label>비밀번호</label>
                                <input type = 'password' placeholder = 'input user password' onChange = {this.changePW} />
                        </div>
                    </div>
                    </div>
                </div>
                    <div className = 'ui section divider'></div>
                        <div className = 'ui one column centered grid'>
                            <div className = 'row'>
                                <div className = 'sixteen wide mobile eight wide tablet four wide computer row'>
                                    <div className = 'field'>
                                        <label>비밀번호확인</label>
                                        <input type = 'password' onChange = {this.changeConfirmPW}/>
                                     </div>
                                </div>
                            </div>
                        </div>
                    <div className = 'ui section divider'></div>
                    <button type = 'submit' class = 'ui button' role = 'submit' onClick = {this.clickSignup}>로그인</button>
                    <Link to = '/login' className = 'ui button'>돌아가기</Link>
                    </form>
                    </div>
                </div>
        );
    }
}
export default Register;
*/