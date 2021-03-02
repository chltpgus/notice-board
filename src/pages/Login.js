import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

function Login() {
   
    return (
        <div className="loginpage">
            <div>
                <p className="logintext">로그인</p>
            </div>
            <div className="ID">
                <input type="text" className="INPUT01" placeholder="아이디를 입력해주세요." />
            </div>
            <div className="PASS">
                <input type="text" className="INPUT01" placeholder="비밀 번호를 입력해주세요." />
            </div>
            <div>
                <Link className="loginbtn">게시판 로그인</Link>

            </div>
        </div>
    );
  
  }

export default Login;