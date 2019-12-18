import React from "react";
import { Link, Route } from "react-router-dom";
import firedatabase from "./base";
import Login from "../../components/auth/Login";

const Home = () => {
	const user = firedatabase.auth().currentUser;
	//console.log("this users home", user.uid);
	return (
		<>
			<Link
				to="/login"
				className="nav-link"
				onClick={() => firedatabase.auth().signOut()}>
				Sign Out
			</Link>
			<Route exact path="/login" component={Login} />
		</>
	);
};

export default Home;
