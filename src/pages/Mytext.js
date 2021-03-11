import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory  } from 'react-router-dom';
import Signup from './Signup';

function Mytext() {
    
    let [users2, users2change] = useState(users);
    let user = JSON.parse(sessionStorage.getItem('USER'));

    return (
        <div className="contents" >
        <div className="contents-1">
            <div className="postlist">
                <Link  className="mainbtn" >내가 쓴 글 목록</Link>
            </div>
            <div className="newpost">
                <Link to="/write" className="mainbtn">새로운 글 작성</Link>
            </div>
        </div>
        {users2.map(posts => <Postsprint nickname={posts.nickname} title={posts.title} date={posts.date} maintext={posts.maintext} />)}
    </div>
    );
  
  }

export default Mytext;