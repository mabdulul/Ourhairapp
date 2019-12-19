import React from "react";
import firebase from "../auth/base";
import firedatabase from "../auth/base";
import Moment from "react-moment";
import "../../Stylesheets/global.css";
import "../../Stylesheets/hairprofile.css";
import person from "../../images/person.png";

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
			<section className="dashSections">
				<div className="profile-box ">
					<img className="img-fluid" src={person} alt="person" />
					{myprofile.map(myprofiles => (
						<>
							<ul className="profile">
								<li>
									<span class="profile-text">Full Name</span>
									<span className="caps">
										{myprofiles.firstname}{" "}
										{myprofiles.lastname}
									</span>
								</li>
								<li>
									<span className="profile-text">
										Hair Type
									</span>
									<span className="caps">
										{myprofiles.hairType}
									</span>
								</li>
								<li>
									<span className="profile-text">
										Hair Color
									</span>
									<span className="caps">
										{myprofiles.NowColor}
									</span>
								</li>
								<li>
									<span className="profile-text">
										Hair Length
									</span>
									<span className="caps">
										{myprofiles.length}
									</span>
								</li>
							</ul>
						</>
					))}
				</div>
			</section>
		);
	}
}
export default HairProfile;
