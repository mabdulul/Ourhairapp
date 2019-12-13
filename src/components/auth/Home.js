import React from "react";
import firedatabase from "./base";
//import firebase from "./base";

const Home = () => {
	var user = firedatabase.auth().currentUser;
	console.log("this users home", user.uid);
	return (
		<>
			<h1>Home</h1>
			<button onClick={() => firedatabase.auth().signOut()}>
				Sign out
			</button>
		</>
	);
};

export default Home;
