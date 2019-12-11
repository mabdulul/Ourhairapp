import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../auth/base";

const Stylist_Quiz_List = () => {
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("Quiz")
      .onSnapshot(snapshot => {
        const quiz = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuiz(quiz);
      });
  }, []);
  return (
    <>
      {quiz.map(quizs => (
        <Link to="/full-details" key={quizs.id}>
          <div>
            <p>{quizs.User_Id}</p>
            <p>{quizs.name}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Stylist_Quiz_List;
