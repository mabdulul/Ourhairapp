import React from "react";
import firebase from "../auth/base";
import firedatabase from "../auth/base";
import Moment from "react-moment";
class PastAnAppts extends React.Component {
  state = {
    uid: "",
    users: [],
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
      .where("Date_of_Appt", "<=", today)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ users: data });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };

  render() {
    const { users } = this.state;

    return (
      <section>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
              <th scope="col">Stylist</th>
            </tr>
          </thead>
          <tbody class="pastAppts-data">
            {users.map(user => (
              <tr key={user.id}>
                {/* <div>{user.Cust_Notes}</div> */}
                <td>
                  <Moment unix format="YYYY/MM/DD">
                    {user.Date_of_Appt.seconds}
                  </Moment>
                </td>
                <td>{user.Type}</td>
                <td>{user.Stylist}</td>

                {/* <div>{user.Stylist_notes}</div> */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}
export default PastAnAppts;
