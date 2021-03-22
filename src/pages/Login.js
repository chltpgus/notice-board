import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import {  useHistory  } from 'react-router-dom';


function Login() {
    const [emailInput, emailInputChange] = useState(''); //이메일이 들어가는 input 데이터 선언
    const [passInput, passInputChange] = useState(''); //패스워드가 들어가는 input 데이터 선언

    const [emailError, setEmailError] = useState(false); //각종 에러들을 출력하기 위한 상태 선언
    const [emailError2, setEmailError2] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const history = useHistory();  

    const emailonChange = (e) => {          //emailInput, passInput에 input 입력 값이 들어가는데 변수랑 같이 보이는 값을 동적으로 변경하기 위해서 함수 선언
        emailInputChange(e.target.value);
    }
    const passonChange = (e) => {
        passInputChange(e.target.value);
    }



    const handleClick = () => {  //로그인 버튼을 누르면

        let emailError02 = emailError;
  
        fetch('https://noticeboardserverr.herokuapp.com/signup/email=' + emailInput)  // fetch로 emailInput에 입력된 값이 웹서버에 있으면 가져온다.
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

            if (passInput === user.password && emailError02 === false) {  // 웹서버에 데이터 값들이 있으면
                setPasswordError(false);
                sessionStorage.setItem('USER', JSON.stringify(user));    //세션스토리지에 값들을 넣어서 로그인 된 상태를 만든다.
                history.push('/');
                alert("로그인 성공");
                window.location.reload();
                window.scrollTo(0, 0);
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
                <Link className="loginbtn" onClick={handleClick}  >게시판 로그인</Link>
            </div>
            <div className="logsign">
                <Link className="loginbtn2" to="/signup">회원가입</Link>
            </div>
        </div>
    );
  
  }

export default Login;