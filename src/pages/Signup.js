import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';




function Signup() {
    const [emailInput, emailInputChange] = useState('');
    const [passInput, passInputChange] = useState('');
    const [pass2Input, pass2InputChange] = useState('');
    const [nicknameInput, nicknameInputChange] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [emailoverlapError, setEmailoverlapError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nicknameError, setNicknameError] = useState(false);

    const emailonChange = (e) => {
        emailInputChange(e.target.value);
    }
    const passonChange = (e) => {
        passInputChange(e.target.value);
    }
    const pass2onChange = (e) => {
        pass2InputChange(e.target.value);
    }
    const nicknamonChange = (e) => {
        nicknameInputChange(e.target.value);
    }

    const Emailoutput = (E) =>
            fetch('https://noticeboardserverr.herokuapp.com/signup/email=' + E.email)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (res) {
                        let user = res;
                        return user;
                    });
    }

    const handleClick = () => {

        let emailError02 = emailError;
        let emailoverlapError02 = emailoverlapError;
        let passwordError02 = passwordError;
        let nicknameError02 = nicknameError;

        let users = {

            email: emailInput,
            password: passInput,
            nickname: nicknameInput

        };
/*
        console.log("emailError : " + emailError);
        console.log("emailoverlapError : " + emailoverlapError);
        console.log("passwordError : " + passwordError);
        console.log("nicknameError : " + nicknameError);
        console.log("emailError02 : " + emailError02);
        console.log("emailoverlapError02 : " + emailoverlapError02);
        console.log("passwordError02 : " + passwordError02);
        console.log("nicknameError02 : " + nicknameError02);
*/
        if (users.email != "") {
            /*
            fetch('https://noticeboardserverr.herokuapp.com/signup/email=' + users.email)
                .then(function (res) {
                    return res.json();
                })
                .then(function (res) {
                    let user = res;

                    if (users.email === user.email) {
                        setEmailoverlapError(true);
                        emailoverlapError02 = true;
                    }
                    else if (user.email === "Email was not found") {
                        setEmailoverlapError(false);
                        emailoverlapError02 = false;
                    }

                });*/
                let EEE = Emailoutput(users);
                console.log(EEE);
        }


        if (users.nickname != "") {
            let user = {};
            fetch('https://noticeboardserverr.herokuapp.com/signup/nickname=' + users.nickname, user)
                .then(function (res) {
                    return res.json();
                })
                .then(function (res) {
                    user = res;

                    if (users.nickname === user.nickname) {
                        setNicknameError(true);
                        nicknameError02 = true;
                        console.log(user);
                    }
                    else if (user.nickname === "Nickname was not found") {
                        setNicknameError(false);
                        nicknameError02 = false;
                        console.log(user);
                    }

                });
                console.log(user);
        }

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
            setEmailError(false);
            emailError02 = false;
        }
        else {
            setEmailError(true);
            emailError02 = true;
        }

        if (passInput !== pass2Input) {
            setPasswordError(true);
            passwordError02 = true;
        }
        else {
            setPasswordError(false);
            passwordError02 = false;
        }


        if (emailError02 === false && emailoverlapError02 === false && passwordError02 === false && nicknameError02 === false && emailInput !== "" && passInput !== "" && nicknameInput !== "") {

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

            alert("회원가입 성공");

        }



    }
   

    return (
        <div className="Signuppage">
            <div>
                <p className="signuptext">회원가입</p>
                <p className="signuptext2">회원 가입 후 컨텐츠 이용이 가능합니다.</p>
            </div>
            <div className="ID">
                <input type="text" onChange={emailonChange} value={emailInput} id="name" className="INPUT02" placeholder="이메일 주소" />
                {emailError && <p style={{ color: 'red' }}>이메일 형식이 아닙니다.</p>}
                {emailoverlapError && <p style={{ color: 'red' }}>이미 있는 이메일 입니다.</p>}
            </div>
            <div className="PASS">
                <input type="password" onChange={passonChange} value={passInput} id="password" className="INPUT02" placeholder="암호" />
            </div>
            <div className="PASS2">
                <input type="password" onChange={pass2onChange} value={pass2Input} id="password2" className="INPUT02" placeholder="암호 확인" />
                {passwordError && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
            </div>
            <div className="NICKNAME">
                <input type="text" onChange={nicknamonChange} value={nicknameInput} id="nickname" className="INPUT02" placeholder="계정 이름" />
                {nicknameError && <p style={{ color: 'red' }}>이미 있는 계정 이름 입니다.</p>}
            </div>
            <div className="logbtndiv">
                <Link className="loginbtn" onClick={handleClick} >게시판 회원가입</Link>
            </div>
            <div className="logsign">
                <Link className="loginbtn2" to="/login">로그인</Link>
            </div>
        </div>
    );
}



export default Signup;