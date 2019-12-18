import React from "react";
import firebase from "../auth/base";
import firedatabase from "../auth/base";
import Moment from "react-moment";
import PastAnAppts from "./PastAppts";

class PastUpComing extends React.Component {
  state = {
    uid: "",
    usersA: [],
    docId: []
  };
  componentDidMount = () => {
    this.fetchCurrentUser();
  };
  fetchCurrentUser = async () => {
    var user = firedatabase.auth().currentUser;
    var uid;
    if (user != null) {
      //   name = user.displayName;
      //   email = user.email;
      //   photoUrl = user.photoURL;
      //   emailVerified = user.emailVerified;
      uid = user.uid;
    }
    this.setState({
      uid: user.uid
    });
    // Getting the current data to view the past appts
    const today = new Date();
    firebase
      .firestore()
      .collection("appointments")
      .where("UserId", "==", user.uid)
      .where("Date_of_Appt", ">=", today)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ usersA: data });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };

  render() {
    const { usersA } = this.state;
    return (
      <>
        <section class="dashSections">
          <h1>UpComing Appointments</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Stylist</th>
              </tr>
            </thead>

            <tbody
              class="pastAppt)}s-data"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
            >
              {usersA.map(userA => (
                <tr key={userA.id} onclick="moreInfo">
                  <td>
                    <Moment unix format="YYYY/MM/DD">
                      {userA.Date_of_Appt.seconds}
                    </Moment>
                  </td>
                  <td>{userA.Type}</td>
                  <td>{userA.Stylist}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            class="modal fade"
            id="exampleModalScrollable"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalScrollableTitle">
                    Stylist Notes
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  class="modal-body"
                  style={{
                    "max-height": "calc(100vh - 210px)",
                    "overflow-y": "auto"
                  }}
                >
                  {usersA.map(userA => (
                    <div
                      className="moreInfo"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <p>{userA.Stylist_notes}</p>
                      <p>{userA.Cust_Notes}</p>
                    </div>
                  ))}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PastAnAppts />
      </>
    );
  }
}

export default PastUpComing;
