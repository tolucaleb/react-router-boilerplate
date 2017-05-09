import React from 'react';
import { NavLink } from 'react-router-dom';

const Features = () => (
  <div className="row">
    <div className="marginalized-2x">
      <div className="main">
      This is the Feature Page <br />
        <NavLink to="/">
          <button className="btn btn-color-primary submit">
            <i className="fa fa-home fa-2x" /> Home
          </button>
        </NavLink>
      </div>
    </div>
  </div>
    );

export default Features;
