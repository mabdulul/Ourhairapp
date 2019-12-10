import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/auth/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { AuthProvider } from "./components/auth/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";
import List from './components/consultation_form/cons_list'
import ExampleFireStore from "./components/example";

//import firebase from "./components/auth/base";

// firebase
//   .firestore()
//   .collection("user")
//   .add({
//     user: "Mulk"
//   });

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <List />
        </div>
        <ExampleFireStore />
      </Router>
    </AuthProvider>
  );
};

export default App;
