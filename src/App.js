import React from "react";
import "./App.css";
// import firebase from "./firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/auth/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { AuthProvider } from "./components/auth/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";
import firebase from "./components/auth/base";
import Client from "./components/Cust_DashBoard/client";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
