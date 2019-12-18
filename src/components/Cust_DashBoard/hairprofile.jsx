import React from "react";
import firebase from "../auth/base";
import firedatabase from "../auth/base";
import Moment from "react-moment";
import "../../Stylesheets/global.css";
import "../../Stylesheets/hairprofile.css";

import picOfgirl from "../../images/selena3.jpg";
import picOfgirlOne from "../../images/sel1.jpg";

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
      <section className="dashSections container profile">
        <div className="row profile-row">
          <div class="col-sm-5 col-md-6 col-lg-12">
            {/* <img
              src={picOfgirl}
              className="img-resposive profile-pic "
              alt="profilepic"
            /> */}
            <h2>You hair profile </h2>
          </div>
        </div>
        <div className="row profile-info">
          <div className="col-sm-12 col-md-6 col-lg-4 profile-box  profile-basicInfo">
            {myprofile.map(myprofiles => (
              <>
                <p className="profile">
                  <span className="profile-text">Full Name:</span>
                  {myprofiles.firstname} {myprofiles.lastname}
                </p>
                <p>
                  <span className="profile-text">Birthday:</span>
                  <Moment unix format="MMMM DD, YYYY">
                    {myprofiles.bday.seconds}
                  </Moment>
                </p>
                <p>
                  <span className="profile-text">Gender:</span>
                  {myprofiles.Gender}
                </p>
              </>
            ))}
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 profile-box  profile-HairInfo">
            {myprofile.map(myprofiles => (
              <>
                <p className="profile">
                  <span className="profile-text">Type:</span>{" "}
                  {myprofiles.hairType}
                </p>
                <p>
                  <span className="profile-text">Color:</span>
                  {myprofiles.NowColor}
                </p>
                <p>
                  <span className="profile-text">Length:</span>
                  {myprofiles.length}
                </p>
              </>
            ))}
          </div>
        </div>

        {/* <table class="table">
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
        </table> */}
      </section>
    );
  }
}
export default HairProfile;
