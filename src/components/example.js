import React, { useState, useEffect } from "react";

import firebase from "./auth/base";

const ExampleFireStore = () => {
  const [user, setName] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("user")
      .onSnapshot(snapshot => {
        const newUser = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setName(newUser);
      });
  }, []);

  console.log(user);
  return (
    <div>
      {user.map(users => (
        <div key={users.id}>
          <p>{users.user}</p>
        </div>
      ))}
    </div>
  );
};

export default ExampleFireStore;
