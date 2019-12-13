import React, { useContext } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from "react-router-dom";
import Home from "./components/auth/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import PrivateRoute from "./components/auth/PrivateRoute";
import firebase from "./components/auth/base";
import Client from "./components/Cust_DashBoard/client";
import { AuthContext } from "./components/auth/Auth";
import Stylist_Quiz_List from "./components/Stylist_DashBoard/notification";
import List from "./components/consultation_form/cons_list";
// Icons
import home from "./images/home.png";
import quiz from "./images/quiz.png";
import stylist from "./images/style.png";
import signup from "./images/signup.png";
import signin from "./images/signin.png";

// import Navbar from "./components/LayOut/Navbar"

const App = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<Router>
			<div className="app">
				<nav className="nav-bar">
					<ul class="nav flex-column">
						{!!currentUser ? (
							<>
								<li class="nav-item" className="nav-icon">
									<img
										src={home}
										className="icons"
										alt="home"
									/>
									<Link class="nav-link" to="/">
										DashBoard
									</Link>
								</li>
								<li class="nav-item" className="nav-icon">
									<img
										src={quiz}
										className="icons"
										alt="quiz"
									/>
									<Link class="nav-link" to="/quiz">
										Quiz
									</Link>
								</li>
							</>
						) : (
							<>
								<li class="nav-item" className="nav-icon">
									<img
										src={signup}
										className="icons"
										alt="sign up"
									/>
									<Link class="nav-link" to="/signup">
										Sign Up
									</Link>
								</li>
								<li class="nav-item" className="nav-icon">
									<img
										src={signin}
										className="icons"
										alt="sign in"
									/>
									<Link class="nav-link" to="/login">
										Members Login
									</Link>
								</li>
							</>
						)}
						<li class="nav-item" className="nav-icon">
							<img
								src={stylist}
								className="icons"
								alt="stylist"
							/>
							<Link class="nav-link" to="/stylist">
								Stylist
							</Link>
						</li>
					</ul>
				</nav>

				{!!currentUser && (
					<Route exact path="/profile" component={Client} />
				)}
				{!!currentUser && <Route exact path="/" component={Home} />}

				<Route exact path="/login" component={Login} />
				<Route exact path="/quiz" component={List} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/stylist" component={Stylist_Quiz_List} />
			</div>
			{/* <List /> */}
		</Router>
	);
};

export default App;
