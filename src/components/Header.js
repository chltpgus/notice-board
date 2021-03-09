import React,  { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


function Header() {
    const [loginout, setLoginout] = useState(false);
    let user = JSON.parse(sessionStorage.getItem('USER'));

    if(user === null){
        setLoginout(false);
    }
    else{
        setLoginout(true);
    }

    const handleClick = () => {
        sessionStorage.setItem('USER', null);  
    }
    return (
        <header className="nav">
        <div className="nav-1">
            <i className="fas fa-frog"></i>
            <Link className="logo" to="/">자유 게시판</Link>
        </div>
        <div className="nav-2">
            {loginout && <Link  className="login" to="/login" >Log in</Link>}
          {loginout && <Link className="signup" to="/signup" >sign up</Link>}
            { loginout && <Link  className="logout" onClick={handleClick} >Log out</Link>}
        </div>
    </header>
    );
  
  }


export default Header;