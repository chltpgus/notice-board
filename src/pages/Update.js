import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory  } from 'react-router-dom';






function Update(props) {   
   const getParms = this.props.location.state.detail;
    return (
        <div className="Writepage">
           <p>{getParms}</p>
        </div>
    );

  }

export default Update;