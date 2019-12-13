import React from "react";
import * as firebase from "firebase/app";
import firedatabase from "../auth/base";

class Client extends React.Component {
  state = {
    fullName: "",
    password: "",
    birthday: "",
    uid: ""
  };

  componentDidMount = () => {
    this.fetchCurrentUser();
  };

  fetchCurrentUser = async () => {
    var user = firedatabase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
      uid = user.uid;
    }
    console.log(user.uid);
  };

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    const userRef = db.collection("client").add({
      fullname: this.state.fullname,
      password: this.state.password,
      birthday: this.state.birthday
    });
  };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // if (user) {
    // console.log(user);
    // }
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="birthday"
          placeholder="MM-DD-YYYY"
          onChange={this.updateInput}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Client;
