import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory,   } from 'react-router-dom';
import {useLocation} from "react-router";





function Update(props) {   
  const location = useLocation();
  //const detail = location.state.detail;
  //console.log(location.state.userCell);
  console.log(location);
  

    return (
        <div className="Writepage">
        <p></p>
        </div>
    );

  }

export default Update;