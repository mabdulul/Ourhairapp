import React, { Component } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import FileUploader from "react-firebase-file-uploader";



class ProfilePage extends Component {
	state = {
		avatar: "",
		isUploading: false,
		progress: 0,
		avatarURL: ""
	};

	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
	handleProgress = progress => this.setState({ progress });
	handleUploadError = error => {
		this.setState({ isUploading: false });
		console.error(error);
	};
	

	render() {
		return (
			<div>
				<form>
					<label
						style={{
							borderRadius: 4,
							cursor: "pointer"
						}}>
						{this.state.isUploading && (
							<p>Progress: {this.state.progress}</p>
						)}
						{/* {this.state.avatarURL && <img src={this.state.avatarURL} />} */}
						<FileUploader
							accept="image/*"
							name="avatar"
							randomizeFilename
							storageRef={firebase.storage().ref("Quiz_Images")}
							onUploadStart={this.handleUploadStart}
							onUploadError={this.handleUploadError}
							onUploadSuccess={this.props.handleUploadSuccess}
							onProgress={this.handleProgress}
						/>
					</label>
				</form>
			</div>
		);
	}
}

export default ProfilePage;

// const ExampleFireStore = () => {
//   const [user, setName] = useState([]);

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection("user")
//       .onSnapshot(snapshot => {
//         const newUser = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setName(newUser);
//       });
//   }, []);

//   console.log(user);
//   return (
//     <div>
//       {user.map(users => (
//         <div key={users.id}>
//           <p>{users.user}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExampleFireStore;
