import React,  { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';



function Header() {
    let user = JSON.parse(sessionStorage.getItem('USER'));
    let state;

      
    if(user === null){
        state = false;
    }
    else{
        state = true;
    }
    const [loginout, setLoginout] = useState(state);
    
    

    const handleClick = () => {
        sessionStorage.setItem('USER', null);  
        let user = JSON.parse(sessionStorage.getItem('USER'));

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
          { loginout && <p> {user.nickname}님  </p> }
            { loginout && <Link  className="logout" onClick={handleClick} >Log out</Link>}
        </div>
    </header>
    );
  
  }


export default Header;