import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory  } from 'react-router-dom';
import {useLocation} from "react-router";





function Update(props) {   
  const location = useLocation();
  const [user, userInputChange] = useState(location.state); //Mytent.js에서 이동하면서 전송한 데이터를 저장한다.

  const history = useHistory();
  const [titleInput, titleInputChange] = useState(user.title); // 받은 제목을 input에 보이게 저장한다.
  const [maintextInput, maintextInputChange] = useState(user.maintext); // 받은 글 내용을 input에 보이게 저장한다.

  const [titleError, setTitleError] = useState(false);     //에러들을 관리할 상태들을 선언
  const [maintextError, setMaintextError] = useState(false);


  const titleonChange = (e) => {     //input데이터가 보일 수 있게 함수들을 선언
      titleInputChange(e.target.value);
  }
  const maintextonChange = (e) => {
      maintextInputChange(e.target.value);
  }
  
  
  const handleClick = () => {

      if(titleInput === ""){  //에러들이 출력될 수 있게 상태들을 조건에따라 바꿔준다.
          setTitleError(true);
      }else{
          setTitleError(false);
      }
      
      if(maintextInput === ""){
          setMaintextError(true);
      }else{
          setMaintextError(false);
      }

    
      
      if (titleInput !== "" && maintextInput !== "") {

        fetch("https://noticeboardserverr.herokuapp.com/written/update", {  //fetch로 post전송
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ // 닉네임, 기존 제목, 날짜, 기존 글 내용, 새 제목, 새 글 내용 을 json 객체로 보낸다.
                nickname: user.nickname,
                title: user.title,
                date: user.date,
                maintext: user.maintext,
                title2: titleInput,
                maintext2: maintextInput
            }),
        })
            .then(res => res.json())

        history.push('/mytext');
        alert("글 수정 완료");
      
    }

      
  }
  return (
      <div className="Writepage">
          <div className="writediv">
          <div>
              <p className="writetext">글을 수정합니다. </p>
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
              <Link className="savebtn" onClick={handleClick} >저장</Link>
              <Link className="cancelbtn" to = "/mytext">취소</Link>
          </div>
          </div>
      </div>
  );

}

  

export default Update;