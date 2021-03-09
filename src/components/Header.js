import React,  { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


function Header() {
    const [loginout, setLoginout] = useState(false);
    

    const handleClick = () => {
        let user = JSON.parse(sessionStorage.getItem('USER'));
        sessionStorage.setItem('USER', null);  

        if(user === null){
            setLoginout(false);
        }
        else{
            setLoginout(true);
        }
        console.log(user);
    }
    const handleClick2 = () => {
        let user = JSON.parse(sessionStorage.getItem('USER'));
        if(user === null){
            setLoginout(false);
        }
        else{
            setLoginout(true);
        }
        console.log(user);
    }

    return (
        <header className="nav">
        <div className="nav-1">
            <i className="fas fa-frog"></i>
            <Link className="logo" to="/" onClick={handleClick2}>자유 게시판</Link>
        </div>
        <div className="nav-2">
            {!loginout && <Link  className="login" to="/login" >Log in</Link>}
          {!loginout && <Link className="signup" to="/signup" >sign up</Link>}
            { loginout && <Link  className="logout" onClick={handleClick} >Log out</Link>}
        </div>
    </header>
    );
  
  }


export default Header;