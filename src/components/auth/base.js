import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firedatabase = firebase.initializeApp({
	apiKey: "AIzaSyB_-z4RLeaiFtkSvAzN0X1yuDFx99xmfgk",
	authDomain: "ourhairapp-2e419.firebaseapp.com",
	databaseURL: "https://ourhairapp-2e419.firebaseio.com",
	projectId: "ourhairapp-2e419",
	storageBucket: "ourhairapp-2e419.appspot.com",
	messagingSenderId: "842940372106",
	appId: "1:842940372106:web:f699b79e89c65458bd4973"
});
export default firebase;
