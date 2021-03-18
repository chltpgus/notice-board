import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory,   } from 'react-router-dom';
import {useLocation} from "react-router";





function Update(props) {   
  const location = useLocation();
  const [user, userInputChange] = useState(location.state);

  const history = useHistory();
  const [titleInput, titleInputChange] = useState(user.title);
  const [maintextInput, maintextInputChange] = useState(user.maintext);

  const [titleError, setTitleError] = useState(false);
  const [maintextError, setMaintextError] = useState(false);


  const titleonChange = (e) => {
      titleInputChange(e.target.value);
  }
  const maintextonChange = (e) => {
      maintextInputChange(e.target.value);
  }
  
  
  const handleClick = () => {

      if(titleInput === ""){
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

        fetch("https://noticeboardserverr.herokuapp.com/written/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
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