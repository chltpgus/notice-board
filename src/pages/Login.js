import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Signup';

function Login() {
    const [emailInput, emailInputChange] = useState('');
    const [passInput, passInputChange] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [emailError2, setEmailError2] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [movestring, setMovestring] = useState(null);

    

    const emailonChange = (e) => {
        emailInputChange(e.target.value);
    }
    const passonChange = (e) => {
        passInputChange(e.target.value);
    }

    const handleClick = () => {

        let emailError02 = emailError;
  
        fetch('https://noticeboardserverr.herokuapp.com/signup/email=' + emailInput)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            console.log(res);
            let user = res;

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                setEmailError(false);
                emailError02 = false;
            }
            else {
                setEmailError(true);
                emailError02 = true;
            }

            if(user.email === "Email was not found"){
                setEmailError2(true);
            }
            else{
                setEmailError2(false);
            }

            if (passInput === user.password && emailError02 === false) {
                setPasswordError(false);
                sessionStorage.setItem('USER', JSON.stringify(user));  
                alert("로그인 성공");
                setMovestring('/');
            }
            else {
                setPasswordError(true);
            }

    
        }); 


    }

    return (
        <div className="loginpage">
            <div>
                <p className="logintext">로그인</p>
                <p className="logintext2">로그인 후 이용이 가능합니다.</p>
            </div>
            <div className="ID">
                <input type="text" onChange={emailonChange} value={emailInput} className="INPUT01" placeholder="아이디를 입력해주세요." />
                {emailError && <p style={{ color: 'red' }}>이메일 형식이 아닙니다.</p>}
                {emailError2 && <p style={{ color: 'red' }}>없는 이메일 입니다.</p>}
            </div>
            <div className="PASS">
                <input type="password" onChange={passonChange} value={passInput} className="INPUT01" placeholder="비밀번호를 입력해주세요." />
                {passwordError && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
            </div>
            <div className="logbtndiv">
                <Link className="loginbtn" onClick={handleClick} to={movestring} >게시판 로그인</Link>
            </div>
            <div className="logsign">
                <Link className="loginbtn2" to="/signup">회원가입</Link>
            </div>
        </div>
    );
  
  }

export default Login;