import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firedatabase from "./base";
import "../../Stylesheets/SignUp.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firedatabase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then()
          .then(data => console.log(data));
        history.push("/quiz");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <section className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 signup-section">
          <div className="form signup-box">
            <form className="form-login Login" onSubmit={handleSignUp}>
              <label htmlFor="Email">
                <input
                  className="signup-input"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </label>
              <label>
                <input
                  className="signup-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </label>
              <button className="signup-button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(SignUp);
