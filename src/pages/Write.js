import React, { useState } from 'react';
import { Link } from 'react-router-dom';






function Write() {   
 
    return (
        <div className="Writepage">
            <div>
            <input type="text" id="name" className="INPUT03" placeholder="제목" />
            <input type="text" id="name" className="INPUT03" placeholder="본문 내용" />
            <Link className="logout">저장</Link>
            <Link className="logout">취소</Link>
            </div>
            <div>
            <Link className="logout">저장</Link>
            <Link className="logout">취소</Link>
            </div>
        </div>
    );

  }

export default Write;