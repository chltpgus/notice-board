import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory  } from 'react-router-dom';






function Update({name1}) {   
   
    return (
        <div className="Writepage">
           <p>{name1}</p>
        </div>
    );

  }

export default Update;