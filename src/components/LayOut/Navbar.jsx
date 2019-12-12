import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <Router>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Members Login</Link>
          </li>
        </ul>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Router>
    </nav>
  );
};

export default NavBar;
