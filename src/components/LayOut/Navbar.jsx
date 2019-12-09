import React from "react";
import { Link } from "react-router-dom";
import LoginInLinks from "./LoginInLinks";
import SignOutLinks from "./SignOutLinks";
const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          monroe's salon
        </Link>
        <LoginInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default NavBar;
