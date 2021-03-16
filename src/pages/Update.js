import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory,   } from 'react-router-dom';






function Update(props) {   

  console.log(props.detail);
  

    return (
        <div className="Writepage">
        <p>{props.detail}</p>
        </div>
    );

  }

export default Update;