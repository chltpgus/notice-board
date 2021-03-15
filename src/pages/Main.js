import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


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
    let users = []
    const history = useHistory();
    let [users2, users2change] = useState(users);
    let user = JSON.parse(sessionStorage.getItem('USER'));
 
    useEffect(() => {
        fetch('https://noticeboardserverr.herokuapp.com/written')
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            users = res;
            users2change(users);
        });
      }, []);

   

    const writehandleClick = () => {
        if(user === null){
            history.push('/login');
        } else{
            history.push('/write');
        }
    }
    const mytexthandleClick = () => {
        if(user === null){
            history.push('/login');
        } else{
            history.push('/mytext');
        }
    }

    return (
        <div className="contents" >
            <div className="contents-1">
                <div className="postlist">
                    <Link onClick = {mytexthandleClick} className="mainbtn" >내가 쓴 글 목록</Link>
                </div>
                <div className="newpost">
                    <Link onClick={writehandleClick} className="mainbtn">새로운 글 작성</Link>
                </div>
            </div>
            {users2.map(posts => <Postsprint nickname={posts.nickname} title={posts.title} date={posts.date} maintext={posts.maintext} />)}
        </div>
    );

  }

export default Main;