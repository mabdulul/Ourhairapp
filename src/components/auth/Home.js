import React from "react";
import firedatabase from "./base";
//import firebase from "./base";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firedatabase.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
