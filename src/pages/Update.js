import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory, useLocation  } from 'react-router-dom';






function Update() {   
   const getParms = this.props.location.state.detail;
   const location = useLocation();
   const getParms = location.state.detail;
    return (
        <div className="Writepage">
           <p>{getParms}</p>
        </div>
    );

  }

export default Update;