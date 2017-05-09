import React from 'react';
import { NavLink } from 'react-router-dom';

const App = () => (
  <div className="row">
    <div className="marginalized-2x">
      <div className="main">
   Navigation with react router 4x is sweet <i className="fa fa-handshake-o" />
      </div>
      <NavLink to="/features">
        <button className="btn btn-color-primary submit">
           Goto our Feature Page
           <i className="fa fa-chevron-circle-right" />
        </button>
      </NavLink>
    </div>
  </div>
    );

export default App;
