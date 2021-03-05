import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

function Signup() {
    const [emailInput, emailInputChange] = useState('');
    const [passInput, passInputChange] = useState('');
    const [pass2Input, pass2InputChange] = useState('');
    const [nicknameInput, nicknameInputChange] = useState('');

    const [emailError,setEmailError] = useState(false);
    const [emailoverlapError,setEmailoverlapError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [nicknameError,setNicknameError] = useState(false);

    const emailonChange = (e) =>{
        emailInputChange(e.target.value);
    }
    const passonChange = (e) =>{
        passInputChange(e.target.value);
    }
    const pass2onChange = (e) =>{
        pass2InputChange(e.target.value);
    }
    const nicknamonChange = (e) =>{
        nicknameInputChange(e.target.value);
    }
    

    const handleClick = () => {

        let users={

            email: emailInput,
            password: passInput,
            nickname: nicknameInput

        };

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }

        if(passInput !== pass2Input){
            setPasswordError(true);
           }
           else{setPasswordError(false);}

        fetch('https://noticeboardserverr.herokuapp.com/signup') //fetch로 서버에게 요청하고 테스트한 사용자 인원수를 가져와 출력한다.
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                let user = res;
                for(let a = 0; a < user.length; a++){
                    if (users.email === res[a].email){
                        setEmailoverlapError(true);
                    }
                    else{
                        setEmailoverlapError(false);
                    }

                    if (users.nickname === res[a].nickname){
                        setEmailoverlapError(true);
                    }
                    else{
                        setEmailoverlapError(false);
                    }
                }

                
                
                console.log(emailError);
                console.log(emailoverlapError);
                console.log(passwordError);
                console.log(nicknameError);

                if (emailError === false && emailoverlapError === false && passwordError === false && nicknameError === false) {

                    fetch("https://noticeboardserverr.herokuapp.com/signup", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: emailInput,
                            password: passInput,
                            nickname: nicknameInput
                        }),
                    })
                        .then(res => res.json())

                }

                
            });

    }
    
    return (
        <div className = "Signuppage">
            <div>
                <p className="signuptext">회원가입</p>
                <p className="signuptext2">회원 가입 후 컨텐츠 이용이 가능합니다.</p>
            </div>
            <div className="ID">
                <input type="text" onChange={emailonChange} value={emailInput} id="name" className="INPUT02" placeholder="이메일 주소" />
                {emailError && <p style={{color : 'red'}}>이메일 형식이 아닙니다.</p>}
                {emailoverlapError && <p style={{color : 'red'}}>이미 있는 이메일 입니다.</p>}
            </div>
            <div className="PASS">
                <input type="password" onChange={passonChange} value={passInput} id="password" className="INPUT02" placeholder="암호" />
            </div>
            <div className="PASS2">
                <input type="password" onChange={pass2onChange} value={pass2Input} id="password2" className="INPUT02" placeholder="암호 확인" />
                {passwordError && <p style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</p>}
            </div>
            <div className="NICKNAME">
                <input type="text" onChange={nicknamonChange} value={nicknameInput} id="nickname" className="INPUT02" placeholder="계정 이름" />
                {nicknameError && <p style={{color : 'red'}}>이미 있는 계정 이름 입니다.</p>}
            </div>
            <div className="logbtndiv">
                <Link className="loginbtn" onClick={ handleClick } >게시판 회원가입</Link>
            </div>
            <div className="logsign">
                <Link className="loginbtn2" to="/login">로그인</Link>
            </div>
        </div>
    );
  }



export default Signup;