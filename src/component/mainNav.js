import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {deleteCookie} from '../lib/delcookie.js'
import { auth } from '../lib/auth.js';
import axios from 'axios'
import {getCookie} from '../lib/getcookie.js'
import {ConvertTimestamp} from '../lib/time.js'
import { Label } from 'semantic-ui-react';
class MainNav extends Component{

    state = {
      time : ''
    }
    handleLogout = () => {
      deleteCookie();
      auth();
      alert('로그아웃 되었습니다')
    }

    componentDidMount(){
      this.ticktok()
    }
    displayTime = setInterval(() => {
      this.ticktok()
      console.log(this.state.time)
    }, 60000)
  
  ticktok = () => {
    const url = 'http://52.79.177.231:8080/servertime'
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer '+getCookie()
        }
      };
      axios.get(url, config)
      .then((res) => {this.setState({
          time : ConvertTimestamp(res.data.current_time)
      })
    })

    }

    render() {
        return (
          <div className="header">
              <div className='toc'>
                <div className='ui inverted vertical labeled icon ui overlay left thin visible sidebar menu'>
                  <Link to="/voter/elections" className='item'>
                    <i aria-hidden='true' className='clipboard list icon' />
                    선거목록
                  </Link>
                  <Link to="/voting/result" className='item'>
                    <i aria-hidden='true' className='trophy icon' />
                    투표결과목록
                  </Link>
                  <Link to ={{pathname : '/login'}} onClick = {() => this.handleLogout()} className = 'item'>
                    <i aria-hidden='true' className='power off icon'/>
                    Logout
                  </Link>
                  <br/>
                  {() => this.displayTime}
                  <Label>현재서버시각</Label>
                  <Label>{this.state.time}</Label>
                 
                </div>
              </div>
          </div>
        );
      }
    }
  
    
export default MainNav;