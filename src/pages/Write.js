import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';






function Write() {   
    const [titleInput, titleInputChange] = useState('');
    const [maintextInput, maintextInputChange] = useState('');

    const emailonChange = (e) => {
        titleInputChange(e.target.value);
    }
    const passonChange = (e) => {
        maintextInputChange(e.target.value);
    }
    
    const handleClick = () => {

    }
    return (
        <div className="Writepage">
            <div>
                <p className="writetext">새로운 글을 작성합니다. </p>
            </div>
            <div className="inputdiv">
                <input type="text" onChange={titleInputChange} value={titleInput} id="name" className="INPUT03" placeholder="제목" />
            </div>
            <div className="inputdiv2">
                <textarea type="text" onChange={maintextInputChange} value={maintextInput} id="name" className="INPUT04" placeholder="본문 내용" />
            </div>
            <div className="Writebtn">
                <Link className="savebtn" onClick={handleClick}>저장</Link>
                <Link className="cancelbtn">취소</Link>
            </div>
        </div>
    );

  }

export default Write;