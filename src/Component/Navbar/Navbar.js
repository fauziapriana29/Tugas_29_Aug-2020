import React from "react";
import Logo from "./logo.jpeg";
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
        <img src={Logo} className="d-inline-block align-top imgLogo" alt="" loading="lazy"/>
          <span className="titleSpan">TODO LIST APP</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
