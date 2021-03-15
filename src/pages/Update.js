import React, { useState, Component  } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BrowserRouter, Route, useHistory,   } from 'react-router-dom';






class Update extends Component {   
   static getParms = this.props.location.state.detail;

   render(){
    return (
        <div className="Writepage">
           <p></p>
        </div>
    );
    }
  }

export default Update;