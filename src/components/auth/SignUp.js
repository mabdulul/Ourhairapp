import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firedatabase from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password, name } = event.target.elements;
      try {
        await firedatabase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(data => {
            const { user } = data;

            if (user) {
              user
                .updateProfile({
                  displayName: name
                })
                .then(console.log("an error message"));
            }
          })
          .then(data => console.log(data));
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <label>
          Name
          <input name="name" type="text" placeholder="First Name" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
