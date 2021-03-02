import React, { useState } from 'react';


function Content() {
    let [글제목, 글제목변경] = useState('내가 쓴 글 목록');
   
    return (
        <div className="contents">
                <div className="contents-1">
                    글 목록
                </div>
                <div className="contents-2">
                    {글제목}
                </div>
            </div>
    );
  
  }

export default Content;