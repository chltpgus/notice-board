import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useHistory  } from 'react-router-dom';






function Write() {   
    const history = useHistory();
    const [titleInput, titleInputChange] = useState('');      //제목, 글 내용 input 데이터 useState를 선언
    const [maintextInput, maintextInputChange] = useState('');

    const [titleError, setTitleError] = useState(false);       //에러를 출력하기 위한 useState를 선언
    const [maintextError, setMaintextError] = useState(false);
    
    const titleonChange = (e) => {
        titleInputChange(e.target.value);
    }
    const maintextonChange = (e) => {
        maintextInputChange(e.target.value);
    }
    
    const handleClick = () => { //저장 버튼을 클릭하면

        if(titleInput === ""){  //에러들을 출력
            setTitleError(true);
        }else{
            setTitleError(false);
        }
        
        if(maintextInput === ""){
            setMaintextError(true);
        }else{
            setMaintextError(false);
        }

        if (titleInput !== "" && maintextInput !== "") { //에러들이 없으면
            let user = JSON.parse(sessionStorage.getItem('USER'));
            let today = new Date();
            let year = today.getFullYear(); // 년도
            let month = today.getMonth() + 1;  // 월
            let nal = today.getDate();

            fetch("https://noticeboardserverr.herokuapp.com/written", {  //fetch로 post 전송을 한다.
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({          //닉네임, 제목, 날짜, 글 내용을 json 객체로 전송한다.
                    nickname: user.nickname,
                    title: titleInput,
                    date: (year + "-" + month + "-" + nal),
                    maintext: maintextInput
                }),
            })
                .then(res => res.json())

            history.push('/');
            alert("글 작성 완료");
           
        }
    }
    return (
        <div className="Writepage">
            <div className="writediv">
            <div>
                <p className="writetext">새로운 글을 작성합니다. </p>
            </div>
            <div className="inputdiv">
                <input type="text" onChange={titleonChange} value={titleInput} id="name" className="INPUT03" placeholder="제목" />
                {titleError && <p style={{ color: 'red' }}>제목을 입력하세요.</p>}
            </div>
            <div className="inputdiv2">
                <textarea type="text" onChange={maintextonChange} value={maintextInput} id="name" className="INPUT04" placeholder="본문 내용" />
                {maintextError && <p style={{ color: 'red' }}>본문 내용을 입력하세요.</p>}
            </div>
            <div className="Writebtn">
                <Link className="savebtn" onClick={handleClick}>저장</Link>
                <Link className="cancelbtn" to = "/">취소</Link>
            </div>
            </div>
        </div>
    );

  }

export default Write;