import React,  { useState } from 'react';



function Header() {

    return (
        <header className="nav">
        <div className="nav-1">
            <i class="fas fa-frog"></i>
            <a href="">자유 게시판</a>
        </div>
        <div className="nav-2">
            <button  className="login">Log in</button>

            <button className="signup">sign up</button>
           
        </div>
    </header>
    );
  
  }


export default Header;