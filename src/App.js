import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Client from "./components/Cust_DashBoard/client";
import { AuthContext } from "./components/auth/Auth";
import Stylist_Quiz_List from "./components/Stylist_DashBoard/notification";
import LogOut from "./components/ourAuth/LogOut";
import Home from "./components/auth/Home";
import List from "./components/consultation_form/cons_list";
import MakingApts from "./components/Cust_DashBoard/makingapts";

// Icons
import home from "./images/home.png";
import quiz from "./images/quiz.png";
import signup from "./images/signup.png";
import signin from "./images/signin.png";
import stylist from "./images/style.png";
import signout from "./images/signoff.png";

import Navbar from "./components/LayOut/Navbar";

import PastAnAppts from "./components/Cust_DashBoard/PastAppts";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Router>
      <div className="app">
        <div>
          <Navbar />
          <nav className="nav-bar">
            <ul class="nav flex-column">
              {!!currentUser ? (
                <>
                  <li className="nav-item" className="nav-icon">
                    <img src={home} className="icons" alt="home" />
                    <Link className="nav-link" to="/">
                      DashBoard
                    </Link>
                  </li>
                  <li className="nav-item" className="nav-icon">
                    <img src={quiz} className="icons" alt="quiz" />
                    <Link className="nav-link" to="/quiz">
                      Quiz
                    </Link>
                  </li>
                  <li className="nav-item" className="nav-icon">
                    <img src={signout} className="icons" alt="sign out" />
                    <Link className="nav-link" component={Home}>
                      Sign Out
                    </Link>
                    <Link className="nav-link" to="/pastAppts">
                      pastAppts
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item" className="nav-icon">
                    <img src={signup} className="icons" alt="sign up" />
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item" className="nav-icon">
                    <img src={signin} className="icons" alt="sign in" />
                    <Link className="nav-link" to="/login">
                      Members Login
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item" className="nav-icon">
                <img src={stylist} className="icons" alt="stylist" />
                <Link className="nav-link" to="/stylist">
                  Stylist
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container" className="content-container">
          {!!currentUser && <Route exact path="/profile" component={Client} />}
          {!!currentUser && <Route exact path="/" component={Home} />}
          {!!currentUser && (
            <Route exact path="/pastAppts" component={PastAnAppts} />
          )}

          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={List} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/stylist" component={Stylist_Quiz_List} />
        </div>
      </div>

      {/* <List /> */}
    </Router>
  );
};
export default App;
