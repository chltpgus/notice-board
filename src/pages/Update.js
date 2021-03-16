import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory,   } from 'react-router-dom';
import {useLocation} from "react-router";





function Update(props) {   
  const location = useLocation();
  //let user = location.state;
  const [user, userInputChange] = useState(location.state);
console.log(user);
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
/*
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
*/
      
  }
  return (
      <div className="Writepage">
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
              <Link className="savebtn" >저장</Link>
              <Link className="cancelbtn" to = "/mytext">취소</Link>
          </div>
      </div>
  );

}

  

export default Update;