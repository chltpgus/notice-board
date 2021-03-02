import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('내가 쓴 글 목록');

  return (
    <div className="App">

      <header className="nav">
        <div className="nav-1">
          <i class="fas fa-frog"></i>
          <a href="">자유 게시판</a>
        </div>
        <div className="nav-2">
          <a className="login" href="">log in</a>
          <a className="signup" href="">sign up</a>
        </div>
      </header>

      <div className="contents">
        <div className="contents-1">
          글 목록
        </div>
        <div className="contents-2">
          { 글제목 }
        </div>
      </div>

    </div>
  );

}

export default App;
