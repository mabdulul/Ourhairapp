import React from "react";
import firebase from "../auth/base";
import firedatabase from "../auth/base";
import Moment from "react-moment";
// import Modal from "../../Cust_DashBoard/modal";

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

		return (
			<>
				<section>
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
							{users.map(user => (
								<tr key={user.id} onclick="moreInfo">
									<td>
										<Moment unix format="YYYY/MM/DD">
											{user.Date_of_Appt.seconds}
										</Moment>
									</td>
									<td>{user.Type}</td>
									<td>{user.Stylist}</td>
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
						<div
							class="modal-dialog modal-dialog-scrollable"
							role="document"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="exampleModalScrollableTitle"
									>
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
									{users.map(user => (
										<div
											className="moreInfo"
											data-toggle="modal"
											data-target="#exampleModal"
										>
											<p>{user.Stylist_notes}</p>
											<p>{user.Cust_Notes}</p>
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
									<button
										type="button"
										class="btn btn-primary"
									>
										Save changes
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default PastAnAppts;
