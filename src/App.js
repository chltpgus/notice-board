import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Write from './pages/Write';
import Mytext from './pages/Mytext';
import Update from './pages/Update';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/write" exact component={Write}/>
        <Route path="/mytext" exact component={Mytext}/>
        <Route path="/update" exact component={Update}/>
       
        <Footer/>
      </div>
    </BrowserRouter>
  );

}


export default App;
