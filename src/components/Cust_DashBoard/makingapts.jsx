import React from "react";
import * as firebase from "firebase/app";
import firedatabase from "../auth/base";
import Calendar from "react-calendar";
import "../../Stylesheets/global.css";

import "../../Stylesheets/makingapts.css";

class MakingApts extends React.Component {
  state = {
    date: new Date(),
    notes: "",
    uid: ""
  };
  componentDidMount = () => {
    this.fetchCurrentUser();
  };
  fetchCurrentUser = async () => {
    var user = firedatabase.auth().currentUser;
    var uid;
    // var photoUrl;
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
      Date_of_Appt: this.state.date,
      UserId: this.state.uid
    });
  };
  onChange = date => this.setState({ date });
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <section className="dashSections">
        <form onSubmit={this.addUser}>
          {/* <input
          type="text"
          name="appointments"
          placeholder="MM-DD-YYYY"
          onChange={this.updateInput}
        /> */}
          <Calendar
            name="appointments"
            onChange={this.onChange}
            value={this.state.date}
          />
          <input
            type="text"
            name="notes"
            placeholder="notes"
            onChange={this.updateInput}
          />
          <button className="makingapt-button" type="submit">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default MakingApts;
