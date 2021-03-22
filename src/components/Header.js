import React,  { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {
    let user = JSON.parse(sessionStorage.getItem('USER')); // 로그인 한 유저 데이터를 가져온다.
    let state;

      
    if(user === null){
        state = false;
    }
    else{
        state = true;
    }
    const [loginout, setLoginout] = useState(state);
    
    

    const handleClick = () => {  //로그아웃 버튼을 클릭하면
        sessionStorage.setItem('USER', null);  //세션 스토리지를 초기화한다.
        let user = JSON.parse(sessionStorage.getItem('USER'));

        if(user === null){
            setLoginout(false);
        }
        else{
            setLoginout(true);
        }
     
    }
    const handleClick2 = () => { // 자유 게시판 로고를 클릭하면
        let user = JSON.parse(sessionStorage.getItem('USER')); //세션 스토리지를 가져온다.
        if(user === null){
            setLoginout(false);
        }
        else{
            setLoginout(true);
        }

    }

    return (
        <header className="nav">
        <div className="nav-1">
            <i className="fas fa-frog"></i>
            <Link className="logo" to="/" onClick={handleClick2}>자유 게시판</Link>
        </div>
        <div className="nav-2">
                {!loginout && <div>
                    <Link className="login" to="/login" >Log in</Link>
                    <Link className="signup" to="/signup" >sign up</Link>
                </div>}
                {loginout && <div>
                    <Link className="logouttext" > {user.nickname}님  </Link>
                    <Link className="logout" onClick={handleClick} to="/" >Log out</Link>
                </div>}
          
        </div>
    </header>
    );
  
  }


export default Header;