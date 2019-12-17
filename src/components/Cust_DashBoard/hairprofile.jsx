import React from "react";
import firebase from "../auth/base";
import firedatabase from "../auth/base";
import Moment from "react-moment";
class HairProfile extends React.Component {
	state = {
		myprofile: [],
		uid: " "
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
		firebase
			.firestore()
			.collection("Quiz_list")
			.where("userid", "==", user.uid)
			.get()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				this.setState({ myprofile: data });
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
	};

	render() {
		const { myprofile } = this.state;

		return (
			<section>
				<table class="table">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Type of Hair</th>
							<th scope="col">Stylist</th>
							<th scope="col">Your hair is</th>
						</tr>
					</thead>
					<tbody class="pastAppts-data">
						{myprofile.map(myprofiles => (
							<tr key={myprofiles.id}>
								<td>
									<Moment unix format="YYYY/MM/DD">
										{myprofiles.date.seconds}
									</Moment>
								</td>
								<td>{myprofiles.Type}</td>
								<td>{myprofiles.hairType}</td>
								<td>{myprofiles.length}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		);
	}
}
export default HairProfile;
