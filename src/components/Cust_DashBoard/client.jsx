// import React from "react";
// // import firestore from "./firestore";
// import firebase from "./firestore";

// class Client extends React.Component {
//   addUser = e => {
//     e.preventDefault();
//     const db = firebase.firestore();
//     db.settings({
//       timestampsInSnapshots: true
//     });
//     const userRef = db.collection("client").add({
//       fullname: this.state.fullname,
//       email: this.state.email,
//       password: this.state.password,
//       birthday: this.state.birthday
//     });
//     this.setState({
//       fullName: "",
//       email: "",
//       password: "",
//       birthday: ""
//     });
//   };

//   updateInput = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.addClient}>
//         <input
//           type="text"
//           name=" full name"
//           placeholder="Full Name"
//           onChange={this.updateInput}
//           value={this.state.fullname}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Place Email Here"
//           onChange={this.updateInput}
//           value={this.state.email}
//         />
//         <input
//           type="text"
//           name="password"
//           placeholder="Password"
//           onChange={this.updateInput}
//           value={this.state.password}
//         />
//         <input
//           type="text"
//           name="birthday"
//           placeholder="MM-DD-YYYY"
//           onChange={this.updateInput}
//           value={this.state.birthday}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }
// export default Client;
