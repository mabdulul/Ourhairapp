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
            <img
              src={picOfgirl}
              className="img-resposive profile-pic "
              alt="profilepic"
            />
          </div>
        </div>
        <div className="row profile-info">
          <div class="col-sm-12 col-md-6 col-lg-4 profile-box  profile-basicInfo">
            {myprofile.map(myprofiles => (
              <>
                <span className="profile">
                  {" "}
                  <h6>Full Name:</h6>
                  {myprofiles.firstname} {myprofiles.lastname}
                </span>
                <p>
                  <span>
                    <h6>Birthday</h6>
                  </span>
                  <Moment unix format="MMMM DD, YYYY">
                    {myprofiles.bday.seconds}
                  </Moment>
                </p>
                <p>
                  <span>
                    <h6>Gender:</h6>
                  </span>
                  {myprofiles.Gender}
                </p>
              </>
            ))}
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 profile-box  profile-HairInfo">
            {myprofile.map(myprofiles => (
              <>
                <p className="profile">
                  <span>
                    <h6>Type:</h6>
                  </span>{" "}
                  {myprofiles.hairType}
                </p>
                <p>
                  <span>
                    <h6>Color</h6>
                  </span>
                  {myprofiles.NowColor}
                </p>
                <p>
                  <span>
                    <h6>Length:</h6>
                  </span>
                  {myprofiles.length}
                </p>
              </>
            ))}
          </div>
        </div>
        <div className="row profile-hairpics ">
          <div class="col-sm-12 col-md-12 col-lg-12 profile-hairpics-col">
            <img src={picOfgirlOne} className="img-resposive" alt="past-hair" />
            <img src={picOfgirlOne} className="img-resposive" alt="past-hair" />
            <img src={picOfgirlOne} className="img-resposive" alt="past-hair" />
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
