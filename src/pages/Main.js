import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Pagination from 'rc-pagination';

function Postsprint({nickname, title, date, maintext}){
    return( 
        <div className="contents-2">
            <div className="titledate">
                <h3 className="posttitle">{title}</h3>
                <p className="postp">{nickname}  {date}</p>
            </div>
            <div>
                <p>{maintext}</p>
            </div>
        </div>
    );
}




function Main() {   
    let users = [] //users 전역변수 배열 선언
    const history = useHistory();
    let [users2, users2change] = useState(users); //fetch로 가져온 유저 값을 저장하는 useState 선언
    let [users3, users3change] = useState(users); //눈에 보이는 역할을 하는 변수 users3를 useState 선언


    let user = JSON.parse(sessionStorage.getItem('USER')); //세션 스토리지의 값을 user 변수에 가져온다.
 
    const [pageSize, setPageSize] = useState(4);   //페이지네이션에 사용되는 상태들을 선언
    const [totalCount, setTotalCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('https://noticeboardserverr.herokuapp.com/written')  //웹서버에서 작성했던 글들을 가져온다.
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            let t=[];
            users = res;      //가져온 값들을 users에 넣어준다
            users.reverse();
            for(let a=0; a <pageSize; a++){  //페이지 네이션의 페이지에 따라서 게시글들의 페이지를 나눠서 보여주기 위해서 t 배열에 게시글을 나눠서 넣어준다.
                if(users[a]!==undefined){   t.push(users[a]);}
            }
            users2change(users);    //users2에 fetch로 가져온 전체값을 넣어준다.
           users3change(t);         //users3에 출력하려고 저장한 t배열을 넣어준다.
            setTotalCount(users.length); 
        });
      }, []);

      useEffect(() => { //페이지네이션의 페이지가 바뀌면 실행된다.
         
        let t=[];
          for (let a = (pageSize * currentPage - 4); a < (pageSize * currentPage ); a++) { //페이지에 따라서 배열에 저장될 수 있게 for문을 작성한다.
           if(users2[a]!==undefined){  t.push(users2[a]);}  //users2에는 처음에 fetch로 가져온 값들이 들어있다.
          }
          
        users3change(t); //변경된 t 배열을 users3에 저장해서 값들을 실제로 출력한다.
        window.scrollTo(0, 0);

      }, [currentPage]);



    
     

    const writehandleClick = () => { //새로운 글 작성 버튼을 눌렀는데 로그인이 안되어 있으면 로그인 컴포넌트로 이동
        if(user === null){
            history.push('/login');
        } else{
            history.push('/write');
        }
    }
    const mytexthandleClick = () => { //내가 쓴 글 버튼을 눌렀는데 로그인이 안되어 있으면 로그인 컴포넌트로 이동
        if(user === null){
            history.push('/login');
        } else{
            history.push('/mytext');
        }
    }

    return (
        <div className="contents" >
            <div className="contentss">
                <div className="contents-1">
                    <div className="postlist">
                        <Link onClick={mytexthandleClick} className="mainbtn" >내가 쓴 글 목록</Link>
                    </div>
                    <div className="newpost">
                        <Link onClick={writehandleClick} className="mainbtn">새로운 글 작성</Link>
                    </div>
                </div>
                {users3.map(posts => <Postsprint nickname={posts.nickname} title={posts.title} date={posts.date} maintext={posts.maintext} />)}

                <div className="contents-3">
                    <Pagination total={totalCount} current={currentPage} pageSize={pageSize} onChange={(page) => setCurrentPage(page)} />
                </div>
            </div>
        </div>
    );

  }

export default Main;