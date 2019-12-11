import React from "react";
import app from "./base";
import Customer from "../Cust_DashBoard/Customer";
import UpcomingAppts from "../Cust_DashBoard/UpcomingAppts";
import PastAppts from "../Cust_DashBoard/PastAppts";

const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<button onClick={() => app.auth().signOut()}>Sign out</button>
			<div>
				<Customer />
			</div>
			<div>
				<UpcomingAppts />
			</div>
			<div>
				<PastAppts />
			</div>
		</>
	);
};

export default Home;
