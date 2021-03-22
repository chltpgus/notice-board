import React, { useState } from 'react';
import { Link} from 'react-router-dom';




function Signup() {
    const [emailInput, emailInputChange] = useState(''); //input 데이터들의 상태 useState를 선언한다.
    const [passInput, passInputChange] = useState('');
    const [pass2Input, pass2InputChange] = useState('');
    const [nicknameInput, nicknameInputChange] = useState('');

    const [emailError, setEmailError] = useState(false);  //에러 상태를 보여줄 useState를 선언
    const [emailoverlapError, setEmailoverlapError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nicknameError, setNicknameError] = useState(false);


    
    const emailonChange = (e) => {  // input 데이터를 보여줄 함수들을 선언
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


    const handleClick = () => {   //회원가입 버튼을 누르면 실행

        let emailError02 = emailError;      // 에러 상태들을 임시로 변수들에 저장해준다.
        let emailoverlapError02 = emailoverlapError;
        let passwordError02 = passwordError;
        let nicknameError02 = nicknameError;

        let users = { //users에 인풋 데이터들을 넣는다.

            email: emailInput,
            password: passInput,
            nickname: nicknameInput

        };

 

        if (users.email != "" && users.nickname != "") {
            fetch('https://noticeboardserverr.herokuapp.com/signup/email=' + users.email) // 웹서버에 기존 이메일이 있는지 확인하고 데이터를 가져온다.
                .then(function (res) {
                    return res.json();
                })
                .then(function (res) {
                    let user = res;

    
                        fetch('https://noticeboardserverr.herokuapp.com/signup/nickname=' + users.nickname) // 웹서버에 기존 닉네임이 있는지 확인하고 데이터를 가져온다.
                            .then(function (res2) {
                                return res2.json();
                            })
                            .then(function (res2) {
                                let user2 = res2;
            
                                if (emailInput === user.email) {  // 가져온 데이터들을 사용해서 중복 데이터가 있는지 등등 확인후에 에러들을 출력
                                    setEmailoverlapError(true);
                                    emailoverlapError02 = true;
                                   
                                }
                                else if (user.email === "Email was not found") {
                                    setEmailoverlapError(false);
                                    emailoverlapError02 = false;
                                }

                                if (users.nickname === user2.nickname) {
                                    setNicknameError(true);
                                    nicknameError02 = true;
                                }
                                else if (user2.nickname === "Nickname was not found") {
                                    setNicknameError(false);
                                    nicknameError02 = false;
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
                        
                                // 에러가 없으면 데이터들을 웹서버에 post 전송을 한다.
                                if (emailError02 === false && emailoverlapError02 === false && passwordError02 === false && nicknameError02 === false && emailInput !== "" && passInput !== "" && nicknameInput !== "") {
                                    fetch("https://noticeboardserverr.herokuapp.com/signup", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ //이메일, 패스워드, 닉네임을 보내 회원가입을 한다.
                                            email: emailInput,
                                            password: passInput,
                                            nickname: nicknameInput
                                        }),
                                    })
                                        .then(res => res.json())
                        
                                    alert("회원가입 성공");
                            
                                        emailInputChange('');
                                        passInputChange('');
                                        pass2InputChange('');
                                        nicknameInputChange('');
                                    
                        
                                }
            
                            }); 
                    
                    

                });
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
                <Link className="loginbtn" onClick={handleClick}  >게시판 회원가입</Link>
            </div>
            <div className="logsign">
                <Link className="loginbtn2" to="/login">로그인</Link>
            </div>
        </div>
    );
}



export default Signup;