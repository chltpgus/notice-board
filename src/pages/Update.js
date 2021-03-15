import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory  } from 'react-router-dom';






function Update(props) {   
   
    return (
        <div className="Writepage">
           <p>{props.key1}</p>
        </div>
    );

  }

export default Update;