import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import firedatabase from "./base";
//import firebase from "./base";

const Home = () => {
	const user = firedatabase.auth().currentUser;
	console.log("this users home", user.uid);
	return (
		<>
			<Link onClick={() => firedatabase.auth().signOut()}>Sign Out</Link>
		</>
	);
};

export default Home;
