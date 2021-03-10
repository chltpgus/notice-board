import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';






function Write() {   
 
    return (
        <div className="Writepage">
            <div>
                <input type="text" id="name" className="INPUT03" placeholder="제목" />
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