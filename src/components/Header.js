import React,  { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


function Header() {
    const [loginout, setLoginout] = useState(false);

    return (
        <header className="nav">
        <div className="nav-1">
            <i className="fas fa-frog"></i>
            <Link className="logo" to="/">자유 게시판</Link>
        </div>
        <div className="nav-2">
            <Link  className="login" to="/login" >Log in</Link>
            <Link className="signup" to="/signup" >sign up</Link>
            { <Link  className="logout"  >Log in</Link>}
            {loginout && <p style={{ color: 'red' }}>이미 있는 계정 이름 입니다.</p>}
        </div>
    </header>
    );
  
  }


export default Header;