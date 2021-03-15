import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory,   } from 'react-router-dom';






function Update() {   
   const getParms = location.state;

    return (
        <div className="Writepage">
        <p>{getParms}</p>
        </div>
    );

  }

export default Update;