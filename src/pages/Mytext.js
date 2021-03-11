import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory  } from 'react-router-dom';
import Signup from './Signup';

function Postsprint({nickname, title, date, maintext}){
    return( 
        <div className="contents-2">
            <h3>{title}</h3>
            <p>{nickname}  {date}</p>
            <p>{maintext}</p>
        </div>
        );
}

function Mytext() {
    let users = [
        /*{
            nickname: "chltpgus@naver.com",
            title: "2021-10-21",
            date: "점심",
            maintext: "오늘은 맛있는 밥을 먹었다 맛있었다 암냠냠"
        },
        {
            nickname: "tjdbsdk@naver.com",
            title: "2021-09-03",
            date: "아 배아프다",
            maintext: "님덜 똥마려운데 회사째고 집으로 똥싸러 갈까요?"
        },
        {
            nickname: "skatlsdnr@naver.com",
            title: "2021-05-18",
            date: "인천 월미도",
            maintext: "월미도 바이킹 재밌네 여자친구랑도 가야지 물론 여자친구 만저 사겨야지함"
        }*/
    ]

    fetch('https://noticeboardserverr.herokuapp.com/written')
   .then(function (res) {
       return res.json();
   })
   .then(function (res) {
       users = res;
       console.log(users);
   });

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
            {users.map(posts => <Postsprint nickname={posts.nickname} title={posts.title} date={posts.date} maintext={posts.maintext} />)}
        </div>
    );
  
  }

export default Mytext;