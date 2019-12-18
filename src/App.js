import React, { useContext } from "react";
import "./Stylesheets/MyNav.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Client from "./components/Cust_DashBoard/client";
import { AuthContext } from "./components/auth/Auth";
import Stylist_Quiz_List from "./components/Stylist_DashBoard/notification";
import Home from "./components/auth/Home";
import List from "./components/consultation_form/cons_list";
import MakingApts from "./components/Cust_DashBoard/makingapts";
import Cut from "./components/terminology/Cut";
import Dye from "./components/terminology/Dye";
import Style from "./components/terminology/Style";
import PastAnAppts from "./components/Cust_DashBoard/PastAppts";
import HairProfile from "./components/Cust_DashBoard/hairprofile";
// import Dashboard from "./components/Cust_DashBoard/dashboard";
//import "./Stylesheets/App.css";

// Icons
import quiz from "./images/quiz.png";
import past from "./images/past.png";
import appt from "./images/appt.png";
import terms from "./images/terms.png";
import logo from "./images/logo.svg";
import navlogo from "./images/topnav2.svg";
//import signup from "./images/signup.png";
//import signin from "./images/signin.png";
//import stylist from "./images/style.png";
//import signout from "./images/signoff.png";
//import home from "./images/home.png";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Router>
      {/* This is the top nav */}
      <div className="app">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="nav-box">
              <a className="navbar-brand">
                <img src={logo} alt="logo" height="36" width="36" />
                Ease
              </a>
            </div>
            <button
              className="navbar-toggler topnav-menu"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="topnav-menu">
                <img src={navlogo} alt="menu" height="22" width="22" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse navbar-right"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                {!!currentUser ? (
                  <>
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item nav-up">
                      <Link className="nav-link" component={Home}>
                        Sign Out
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        Sign Up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Members Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>

          {/* This is the side nav */}
          {!!currentUser ? (
            <nav className="menu menu-hiddme" tabindex="0">
              <ul>
                <>
                  <li class="icon-me">
                    <span>
                      <Link className="nav-link" to="/quiz">
                        Quiz
                      </Link>
                    </span>
                  </li>
                  <li class="icon-pastappointment">
                    <span>
                      <Link className="nav-link" to="/pastAppts">
                        Past Appointments
                      </Link>
                    </span>
                  </li>
                  <li class="icon-appointment">
                    <span>
                      <Link class="nav-link" to="/MakingApts">
                        Make an Appointment
                      </Link>
                    </span>
                  </li>
                  <li className="nav-icon" class="icon-terms">
                    <div class="dropdown">
                      <span>
                        <Link class="dropbtn nav-link">Terminology</Link>
                      </span>
                      <div class="dropdown-content">
                        <a href="/cut">Cut</a>
                        <a href="/dye">Dye</a>
                        <a href="/style">Style</a>
                      </div>
                    </div>
                  </li>
                </>
              </ul>
            </nav>
          ) : (
            <></>
          )}
        </div>
        <div className="container" className="content-container">
          {!!currentUser && <Route exact path="/profile" component={Client} />}
          {!!currentUser && (
            <Route exact path="/MakingApts" component={MakingApts} />
          )}
          {!!currentUser && (
            <Route exact path="/pastAppts" component={PastAnAppts} />
          )}
          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={List} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/stylist" component={Stylist_Quiz_List} />
          {!!currentUser && <Route exact path="/cut" component={Cut} />}
          {!!currentUser && <Route exact path="/dye" component={Dye} />}
          {!!currentUser && <Route exact path="/style" component={Style} />}
        </div>
      </div>
    </Router>
  );
};
export default App;
