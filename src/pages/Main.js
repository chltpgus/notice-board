import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Postsprint({id, date, title, string}){
    return( 
        <div className="contents-2">
            <p>제목 : {title}</p>
            <p>글쓴이 : {id} 날짜 : {date}</p>
            <p>{string}</p>
        </div>
        );
}



function Main() {   
    let users = [
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
        }
    ]

    let [글제목, 글제목변경] = useState(users);
    //console.log(글제목);

    let user = JSON.parse(sessionStorage.getItem('USER'));
   // console.log(user);

    return (
        <div className="contents" >
            <div className="contents-1">
                <div className="postlist">
                    <Link className="mainbtn" >전체 글 목록</Link>
                    <Link className="mainbtn" >내가 쓴 글 목록</Link>
                </div>
                <div className="newpost">
                    <Link to="/write" className="mainbtn">새로운 글 작성</Link>
                </div>
            </div>
            {users.map(posts => <Postsprint id={posts.id} date={posts.date} title={posts.title} string={posts.string} />)}
        </div>
    );

  }

export default Main;