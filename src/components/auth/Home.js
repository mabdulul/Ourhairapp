import React from "react";
import { Link } from "react-router-dom";
//import { BrowserRouter as Route, Link } from "react-router-dom";
import firedatabase from "./base";
//import firebase from "./base";

const Home = () => {
	const user = firedatabase.auth().currentUser;
	//console.log("this users home", user.uid);
	return (
		<>
			<Link
				to="/"
				className="nav-link"
				onClick={() => firedatabase.auth().signOut()}>
				Sign Out
			</Link>
		</>
	);
};

export default Home;
