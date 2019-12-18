import React, { Component } from "react";
import firebase from "../auth/base";
import firedatabase from "../auth/base";
import "../../Stylesheets/terms.css";

class Dashboard extends Component {
	state = {
		uid: "",
		users: []
	};
	componentDidMount = () => {
		this.fetchCurrentUser();
	};
	fetchCurrentUser = async () => {
		var user = firedatabase.auth().currentUser;
		var uid;
		var firstname;
		if (user != null) {
			firstname = user.firstname;
			uid = user.uid;
		}
		this.setState({
			uid: user.uid,
			firstname: user.firstname
		});
		firebase
			.firestore()
			.collection("Quiz_list")
			.where("userid", "==", user.uid)
			.get()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data(user.id));
				this.setState({ users: data });
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
	};

	render() {
		const { users } = this.state;
		return (
			<div>
				{users.map(user => (
					<>
						<h1 key={user.id}>
							Welcome,{" "}
							<span className="capitalize">{user.firstname}</span>
							!
						</h1>
					</>
				))}
			</div>
		);
	}
}

export default Dashboard;
