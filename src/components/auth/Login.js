import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firedatabase from "./base.js";
import { AuthContext } from "./Auth.js";
import "../../Stylesheets/Login.css";

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				const userAuth = await firedatabase
					.auth()
					.signInWithEmailAndPassword(email.value, password.value);
				history.push("/");
				console.log("user auth is", userAuth.user.uid);
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/login" />;
	}

	return (
		<section className="container">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12 login-section">
					<div className="form login-box">
						<form
							className="form-login Login"
							onSubmit={handleLogin}>
							<label htmlFor="Email">
								<p className="login-header">
									Log in to see your past, present, and future
									self.
								</p>
								<input
									className="login-input"
									name="email"
									type="email"
									placeholder="Email"
								/>
							</label>
							<label>
								<input
									className="login-input"
									name="password"
									type="password"
									placeholder="Password"
								/>
							</label>
							<button className="login-button" type="submit">
								Log in
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default withRouter(Login);
