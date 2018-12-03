import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './login.css';

class Login extends Component{
   constructor(props){
        super(props);
        this.state = {
            id : '',
            pw : '',
            is_auth : props.is_auth
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
    
    setCookie = (name, value, exp) => {
        var date = new Date();
        date.setTime(date.getTime() + exp*24*60*60*1000);
        document.cookie = namae + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
      };
    /*
        setCookie('name', 'Ethan', 7); /* name=Ethan, 7일 뒤 만료됨 
        setCookie('favoriteColor', 'Blue', 7); /* favoriteColor=Blue, 7일 뒤 만료됨 
    */
    getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
    };
        /*getCookie('name');  결과: Ethan */
     
    clickLogin = e => { //클릭시
        if(this.state.id === '' || this.state.pw === ''){
            
            alert('id나 pw를 입력해주세요')
        }
        else{
        e.preventDefault();
        const user = [{ //params
            id : this.state.id,
            pw : this.state.pw
        }]
        const url = 'http://52.79.177.231:8080/login'
        console.log(user); //확인 완료
        axios.post(url, {user})
        .then((res) => (console.log(res)))
        .catch((err) => (console.log(err)))
        }
        
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
                        <button type = 'submit' className = 'ui button' role = 'submit' onClick = {this.clickLogin}>로그인</button>
                        <Link to = '/sign-up' className = 'ui button'>회원가입</Link>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;