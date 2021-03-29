import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';






function Postsprint({nickname01, title01, date01, maintext01}){

    const handleClick = () => {
        
        fetch("https://noticeboardserverr.herokuapp.com/written/delete", { //삭제 버튼을 누르면 fetch로 json으로 객체를 post 전송으로 보내 삭제한다.
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ //닉네임, 제목, 날짜, 글 내용 을 보낸다.
                                            nickname: nickname01,
                                            title: title01,
                                            date: date01,
                                            maintext: maintext01
                                        }),
                                    })
                                        .then(res => res.json())

                                        alert("삭제 완료");
                                        window.location.reload();

    }

   
    
    return( 
        <div className="contents-2">

            <div className="titlediv">
                <div>
                    <Link to={{
                        pathname: '/update',
                        state: {
                            nickname: nickname01,
                            title: title01,
                            date: date01,
                            maintext: maintext01
                        }
                    }} className="upbtn">수정</Link>
                    <Link onClick={handleClick} to="" className="delbtn">삭제</Link>
                </div>
            </div>
            <div className="titledate">
                <h3 className="posttitle">{title01}</h3>
                <p className="postp">{nickname01}  {date01}</p>
            </div>
            <p>{maintext01}</p>
        </div>
        );
}





function Mytext() {
    let users = [];  //fetch로 가져온 값을 임시로 저장할 배열을 선언
    let [users01, users01change] = useState(users); //fetch로 가져온 값을 저장할 상태 선언
    let user = JSON.parse(sessionStorage.getItem('USER')); //로그인 정보가 담여있는 세션 스토리지를 가져온다.


    useEffect(() => {
        fetch('https://noticeboardserverr.herokuapp.com/written') //fetch로 작성된 글들을 가져온다.
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            users = [];
            for (let a = 0; a < res.length; a++) {
                if(user.nickname === res[a].nickname){ //로그인 된 닉네임으로 작성된 글들을 분류해서 users 배열에 넣는다.
                    users.push(res[a]);
                }
               
            }
            users.reverse();
            users01change(users); // 저장된 값들을 user01 useState에 넣는다.
        
        });
      }, []);

  

    return (
        <div className="contents" >
            <div className="contentss">
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
        </div>
    );
  
  }

export default Mytext;