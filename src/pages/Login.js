import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Signup';

function Login() {
   
    const handleClick = () => {

        localStorage.setItem('ID', 'chltpgus');

    }

    return (
        <div className="loginpage">
            <div>
                <p className="logintext">로그인</p>
                <p className="logintext2">로그인 후 이용이 가능합니다.</p>
            </div>
            <div className="ID">
                <input type="text" className="INPUT01" placeholder="아이디를 입력해주세요." />
            </div>
            <div className="PASS">
                <input type="password" className="INPUT01" placeholder="비밀번호를 입력해주세요." />
            </div>
            <div className="logbtndiv">
                <Link className="loginbtn" onClick={handleClick}>게시판 로그인</Link>
            </div>
            <div className="logsign">
                <Link className="loginbtn2" to="/signup">회원가입</Link>
            </div>
        </div>
    );
  
  }

export default Login;