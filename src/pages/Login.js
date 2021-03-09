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

    const emailonChange = (e) => {
        emailInputChange(e.target.value);
    }
    const passonChange = (e) => {
        passInputChange(e.target.value);
    }

    const handleClick = () => {

        let emailError02 = emailError;
        let passwordError02 = passwordError;
  
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

            if (passInput === user.password) {
                alert("로그인 성공");
               
            }
            else if (user.email === "Email was not found") {
                alert("없는 아이디 입니다.")
            }else{
                alert("비밀번호가 틀렸습니다.")
            }

        }); 
        //localStorage.setItem('ID', 'chltpgus');

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
                {emailError2 && <p style={{ color: 'red' }}>이메일 형식이 아닙니다.</p>}
            </div>
            <div className="PASS">
                <input type="password" onChange={passonChange} value={passInput} className="INPUT01" placeholder="비밀번호를 입력해주세요." />
                {passwordError && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
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