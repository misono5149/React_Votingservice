import axios from 'axios';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './login.css';
import badreq from '../../servermsg/badreq.js';
import Badreq from '../../servermsg/badreq.js';
class Login extends Component{
   constructor(props){
        super(props);
        this.state = {
            id : '',
            pw : '',
            is_auth : ''
        }
        /* 입력 state관리  */
        this.changeID = this.changeID.bind(this)
        this.changePW = this.changePW.bind(this)
        this.clickLogin = this.clickLogin.bind(this)
    }
    changeID(e){this.setState({id : e.target.value})}
    changePW(e){this.setState({pw : e.target.value})}

    
    /* Call api with asynchronos  */
    _getUserAuth = async () => {await this.clickLogin}
    
    setCookie = (value) => {
       document.cookie = 'token' + '=' + value + ';path=/';
      };

    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }
     
    clickLogin = e => { //클릭시
        if(this.state.id === '' || this.state.pw === ''){
            
            alert('id나 pw를 입력해주세요')
        }
        else{
        e.preventDefault();
        const user = { //params
            username : this.state.id,
            password : this.state.pw
        }
        const url = 'http://52.79.177.231:8080/login'
        axios.post(url, user)
        .then((res) => {
            console.log(res)
            if(res.data.is_success === 200){  // 인증 완료
                this.setCookie(res.data.auth_token) // 쿠키저장
                this.sleep(1000)
                alert('로그인 되었습니다')
                this.handleHistory()        //선거목록 이동
                
            }
            else if(res.status === 400){
                return <Badreq/>
            }
            else{
                alert('아이디나 비밀번호가 일치하지 않습니다')
            }
        })
        .catch((err) => (console.log(err)))
        }
        
    }   
    handleHistory = () => {
        let url = '/voter/elections'
        this.props.history.push({
            pathname : url,
        })
    }
    render(){
        return(
        <div className = 'signin_div'>
            <div className = 'ui middle aligned centered grid container'>
                <div className = 'four wide computer column'>
                <h1 className = 'ui centered header'>로그인</h1>
                    <form className = 'ui form'>
                        <div className = 'field'>
                            <label>아이디</label>
                            <input type = 'text' placeholder = 'input user id' onChange = {this.changeID}/>
                        </div>
                        <div className = 'field'>
                            <label>비밀번호</label>
                            <input type = 'password' placeholder = 'input user password' onChange = {this.changePW}/>
                        </div>
                        <button type = 'submit' className = 'ui button fluid' role = 'submit' onClick = {this.clickLogin}>로그인</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(Login);