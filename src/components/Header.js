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
        if(user === null){
            setLoginout(false);
        }
        else{
            setLoginout(true);
        }
        sessionStorage.setItem('USER', null);  
    }
    const handleClick2 = () => {}
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
            {!loginout && <Link  className="login" to="/login"onClick={handleClick2} >Log in</Link>}
          {!loginout && <Link className="signup" to="/signup" onClick={handleClick2}>sign up</Link>}
            { loginout && <Link  className="logout" onClick={handleClick} >Log out</Link>}
        </div>
    </header>
    );
  
  }


export default Header;