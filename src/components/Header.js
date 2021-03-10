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
                {!loginout && <div>
                    <Link className="login" to="/login" >Log in</Link>
                    <Link className="signup" to="/signup" >sign up</Link>
                </div>}
                {loginout && <div>
                    <Link className="logout" > {user.nickname}님  </Link>
                    <Link className="logout" onClick={handleClick} >Log out</Link>
                </div>}
          
        </div>
    </header>
    );
  
  }


export default Header;