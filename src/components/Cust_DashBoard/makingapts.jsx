import React from "react";
import * as firebase from "firebase/app";
import firedatabase from "../auth/base";
import Calendar from "react-calendar";

class MakingApts extends React.Component {
  state = {
    appointment: "",
    notes: "",
    uid: ""
  };
  componentDidMount = () => {
    this.fetchCurrentUser();
  };
  fetchCurrentUser = async () => {
    var user = firedatabase.auth().currentUser;
    var uid, photoUrl;
    if (user != null) {
      uid = user.uid;
    }
    this.setState({
      uid: user.uid
    });
  };
  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    const userRef = db.collection("appointments").add({
      Cust_Notes: this.state.notes,
      Date_of_Appt: this.state.appointment,
      UserId: this.state.uid
    });
  };
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="appointments"
          placeholder="MM-DD-YYYY"
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="notes"
          placeholder="notes"
          onChange={this.updateInput}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MakingApts;
