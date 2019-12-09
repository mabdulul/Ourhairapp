import React from "react";
import { NavLink } from "react-router-dom";
const LoginInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Make An Appointment </NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          Mulk Abdulhadi
        </NavLink>
      </li>
    </ul>
  );
};

export default LoginInLinks;
