import React from 'react'
import { NavLink } from "react-router-dom";

const NavigationBar = () => (
  <header className="nav">
    <NavLink to="/" activeClassName="is-active" exact={true} className="link">
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="is-active" className="link">
      About
    </NavLink>
  </header>
);


export default NavigationBar