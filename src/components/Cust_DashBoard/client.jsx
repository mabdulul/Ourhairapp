// import React from "react";
// import * as firebase from "firebase/app";
// import firedatabase from "../auth/base";

// class Client extends React.Component {
//   state = {
//     fullName: "",
//     password: "",
//     birthday: "",
//     uid: ""
//   };
//   componentDidMount = () => {
//     this.fetchCurrentUser();
//   };
//   fetchCurrentUser = async () => {
//     var user = firedatabase.auth().currentUser;
//     var name, email, photoUrl, uid, emailVerified;
//     if (user != null) {
//       uid = user.uid;
//     }
//     this.setState({
//       uid: user.uid
//     });
//   };
//   addUser = e => {
//     e.preventDefault();
//     const db = firebase.firestore();
//     const userRef = db.collection("client").add({
//       userId: this.state.uid,
//       fullname: this.state.fullname,
//       password: this.state.password,
//       birthday: this.state.birthday
//     });
//   };
//   updateInput = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <form onSubmit={this.addUser}>
//         <input
//           type="text"
//           name="fullname"
//           placeholder="Full Name"
//           onChange={this.updateInput}
//         />
//         <input
//           type="text"
//           name="password"
//           placeholder="Password"
//           onChange={this.updateInput}
//         />
//         <input
//           type="text"
//           name="birthday"
//           placeholder="MM-DD-YYYY"
//           onChange={this.updateInput}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }
// export default Client;
