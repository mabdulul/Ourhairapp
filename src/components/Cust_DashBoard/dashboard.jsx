import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Customer from "./Customer";
import UpcomingAppts from "./UpcomingAppts";
import PastAppts from "./PastAppts";

class Dashboard extends Component {
	state = {};
	render() {
		const isLoggedIn = this.state.isLoggedIn;
		return (
			<div>
				{isLoggedIn ? (
					// Is logged in
					<React.Fragment>
						<div>
							<Customer />
						</div>
						<div>
							<UpcomingAppts />
						</div>
						<div>
							<PastAppts />
						</div>
					</React.Fragment>
				) : (
					// Is NOT logged in
					<React.Fragment>
						<div>
							<h1>Welcome!</h1>
							<p>Log in or sign up to gain access to our site!</p>
						</div>
						<div>
							<Link to="/login">
								<button>Log In</button>
							</Link>
						</div>
						<div>
							<Link to="/signup">
								<button>Sign Up</button>
							</Link>
						</div>
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default Dashboard;
