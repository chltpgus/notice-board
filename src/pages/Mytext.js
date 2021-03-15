import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory  } from 'react-router-dom';
import Signup from './Signup';

function Postsprint({nickname, title, date, maintext}){
    console.log(title);
    return( 
        <div className="contents-2">
            <li className="titlediv">
                <h3>{title}</h3>
                <Link className="mainbtn">수정</Link>
                <Link  className="mainbtn">삭제</Link>
            </li>
            <p>{nickname}  {date}</p>
            <p>{maintext}</p>
        </div>
        );
}

function Mytext() {
    let users = [];
    let [users01, users01change] = useState(users);
    let user = JSON.parse(sessionStorage.getItem('USER'));


    useEffect(() => {
        fetch('https://noticeboardserverr.herokuapp.com/written')
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            users = [];
            for (let a = 0; a < res.length; a++) {
                if(user.nickname === res[a].nickname){
                    users.push(res[a]);
                }
               
            }
            users.reverse();
            users01change(users);
        });
      }, []);

  

    return (
        <div className="contents" >
            <div className="contents-1">
                <div className="postlist">
                    <Link to="/" className="mainbtn" >모든 글 목록</Link>
                </div>
                <div className="newpost">
                    <Link to="/write" className="mainbtn">새로운 글 작성</Link>
                </div>
            </div>
            {users01.map(posts => <Postsprint nickname={posts.nickname} title={posts.title} date={posts.date} maintext={posts.maintext} />)}
        </div>
    );
  
  }

export default Mytext;