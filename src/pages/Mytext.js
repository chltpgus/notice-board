import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory  } from 'react-router-dom';
import Signup from './Signup';
import Update from './Update';




function Postsprint({nickname01, title01, date01, maintext01}){
    const history = useHistory();
    const handleClick = () => {
        
        fetch("https://noticeboardserverr.herokuapp.com/written/delete", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            nickname: nickname01,
                                            title: title01,
                                            date: date01,
                                            maintext: maintext01
                                        }),
                                    })
                                        .then(res => res.json())
                                        
                                        history.push('/mytext');
                                        alert("삭제 완료");

    }

    const handleClick2 = () => {
        
        history.push({
            pathname: '/update',
            state: {  detail: nickname01}
        });

    }
    
    return( 
        <div className="contents-2">
            <div className="titlediv">
                <h3>{title01}</h3>
                <div>
                    <Update detail= {nickname01}></Update>
                <Link onClick={handleClick2} className="mainbtn">수정</Link>
                <Link onClick={handleClick}  className="mainbtn">삭제</Link>
                </div>
            </div>
            <p>{nickname01}  {date01}</p>
            <p>{maintext01}</p>
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
      }, [users01]);

  

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
            {users01.map(posts => <Postsprint nickname01={posts.nickname} title01={posts.title} date01={posts.date} maintext01={posts.maintext} />)}
        </div>
    );
  
  }

export default Mytext;