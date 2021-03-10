import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';






function Write() {   
 
    return (
        <div className="Writepage">
            <div>
                <p className="writetext">새로운 글을 작성합니다. </p>
            </div>
            <div className="inputdiv">
                <input type="text" id="name" className="INPUT03" placeholder="제목" />
            </div>
            <div className="inputdiv2">
                <input type="text" id="name" className="INPUT03" placeholder="본문 내용" />
            </div>
            <div className="Writebtn">
                <Link className="savebtn">저장</Link>
                <Link className="cancelbtn">취소</Link>
            </div>
        </div>
    );

  }

export default Write;