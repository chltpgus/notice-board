import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );

}


export default App;
