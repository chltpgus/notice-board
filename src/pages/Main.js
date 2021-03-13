import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Postsprint({nickname, title, date, maintext}){
    return( 
        <div className="contents-2">
            <h3>{title}</h3>
            <p>{nickname}  {date}</p>
            <p>{maintext}</p>
        </div>
        );
}



function Main() {   
    let users = [/*
        {
            id: "chltpgus@naver.com",
            date: "2021-10-21",
            title: "점심",
            string: "오늘은 맛있는 밥을 먹었다 맛있었다 암냠냠"
        },
        {
            id: "tjdbsdk@naver.com",
            date: "2021-09-03",
            title: "아 배아프다",
            string: "님덜 똥마려운데 회사째고 집으로 똥싸러 갈까요?"
        },
        {
            id: "skatlsdnr@naver.com",
            date: "2021-05-18",
            title: "인천 월미도",
            string: "월미도 바이킹 재밌네 여자친구랑도 가야지 물론 여자친구 만저 사겨야지함"
        }*/
    ]

    let [users2, users2change] = useState(users);
    let user = JSON.parse(sessionStorage.getItem('USER'));
 
    __.once = function(func){
        let flag, result;
        return function(){
            if(flag){return result};
            flag = true;
            return result = func.apply(this, arguments);
        }
    }

    function datafetch() {
        fetch('https://noticeboardserverr.herokuapp.com/written')
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                users = res;
                users2change(users);
            });
    }

    setTimeout(sayHi, 500);

    return (
        <div className="contents" >
            <div className="contents-1">
                <div className="postlist">
                    <Link to="/mytext" className="mainbtn" >내가 쓴 글 목록</Link>
                </div>
                <div className="newpost">
                    <Link to="/write" className="mainbtn">새로운 글 작성</Link>
                </div>
            </div>
            {users2.map(posts => <Postsprint nickname={posts.nickname} title={posts.title} date={posts.date} maintext={posts.maintext} />)}
        </div>
    );

  }

export default Main;