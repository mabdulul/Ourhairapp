import React, { useEffect, useState } from "react";
import firedatabase from "./base.js";
import app from "./base.js";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		firedatabase.auth().onAuthStateChanged(setCurrentUser);
	}, []);
	return (
		<AuthContext.Provider
			value={{
				currentUser
			}}>
			{children}{" "}
		</AuthContext.Provider>
	);
};
