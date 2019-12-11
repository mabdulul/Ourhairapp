import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/auth/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthContext } from "./components/auth/Auth";
import Stylist_Quiz_List from "./components/Stylist_DashBoard/notification";


const App = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("right here ", currentUser);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {!!currentUser ? (
              <>
                <li>
                  <Link to="/">DashBoard</Link>
                </li>
              </>
            ) : (
                <>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Members Login</Link>
                  </li>
                </>
              )}
          </ul>
          <li>
            <Link to="/stylist">Stylist</Link>
          </li>

        </nav>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/stylist" component={Stylist_Quiz_List} />
      </div>
    </Router>
  );
};

export default App;
