import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory  } from 'react-router-dom';
import Signup from './Signup';

function Mytext() {
    

    return (
        <div className="contents" >
            <div className="contents-1">
                <div className="postlist">
                    <Link to="/" className="mainbtn" >모든 글 목록</Link>
                </div>
                <div className="newpost">
                    <Link to="/write" className="mainbtn">새로운 글 작성</Link>
                </div>
            </div>
        </div>
    );
  
  }

export default Mytext;