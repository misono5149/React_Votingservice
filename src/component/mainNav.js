import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MainNav extends Component{

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
                  <Link to = '/login' className = 'item'>
                    <i aria-hidden='true' className='power off icon'/>
                    Logout
                  </Link>
                </div>
              </div>
          </div>
        );
      }
    }
    
export default MainNav;