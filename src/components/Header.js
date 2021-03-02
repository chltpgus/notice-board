import React,  { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


function Header() {

    return (
        <header className="nav">
        <div className="nav-1">
            <i className="fas fa-frog"></i>
            <Link className="logo" to="/">자유 게시판</Link>
        </div>
        <div className="nav-2">
            <Link  className="login" to="/login" >Log in</Link>

            <Link className="signup" to="/signup" >sign up</Link>
           
        </div>
    </header>
    );
  
  }


export default Header;