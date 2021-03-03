import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

function Signup() {
   
    

    return (
        <div className = "Signuppage">
            <div>
                <p className="signuptext">회원가입</p>
                <p className="signuptext2">회원 가입 후 컨텐츠 이용이 가능합니다.</p>
            </div>
            <div className="ID">
                <input type="text" className="INPUT02" placeholder="이메일 주소" />
                <p>{}</p>
            </div>
            <div className="PASS">
                <input type="password" className="INPUT02" placeholder="암호" />
            </div>
            <div className="PASS2">
                <input type="password" className="INPUT02" placeholder="암호 확인" />
            </div>
            <div className="NICKNAME">
                <input type="text" className="INPUT02" placeholder="계정 이름" />
            </div>
            <div className="logbtndiv">
                <Link className="loginbtn">게시판 회원가입</Link>
            </div>
            <div className="logsign">
                <Link className="loginbtn2" to="/login">로그인</Link>
            </div>
        </div>
    );
  
  }

export default Signup;