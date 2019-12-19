import React, { Component, useState, useEffect } from "react";
import Calendar from "react-calendar";
import firebase from "firebase";
import firedatabase from "../auth/base";
import ProfilePage from "../example";
import DbButton from "./dbButton";
import "../../Stylesheets/quiz.css";
import "../../Stylesheets/global.css";

const List = ({ history }) => {
	// grabbing user reference
	useEffect(() => {
		fetchUserId();
	}, []);

	const fetchUserId = async () => {
		let user = await firedatabase.auth().currentUser;
	};

	//setting state hooks
	const [firstname, setUser] = useState("");
	const [lastname, lastUser] = useState("");
	const [hairType, setHairType] = useState("");
	const [length, setLength] = useState("");
	const [porosity, setPorosity] = useState("");
	const [colored, setColored] = useState("");
	const [pro, setPro] = useState("");
	const [date, setDate] = useState("");
	const [born, setBorn] = useState("");
	const [NowColor, setNowColor] = useState("");
	const [notes, setNotes] = useState("");
	const [image, setImage] = useState([]);
	// const [picture, setPicture] = useState(""); We will use it later

	const handleUploadedSuccess = filename => {
		setImage({
			...image,
			avatar: filename,
			progress: 100,
			isUploading: false
		});
		firebase
			.storage()
			.ref("Quiz_Images")
			.child(filename)
			.getDownloadURL()
			.then(url => this.setState({ avatarURL: url }));
	};

	const SubmitData = e => {
		e.preventDefault();
		const user = firedatabase.auth().currentUser;
		const db = firebase.firestore();

		//defining parameters for collection from form
		try {
			const userRef = db.collection("Quiz_list").add({
				userid: user.uid,
				firstname,
				hairType,
				porosity,
				lastname,
				length,
				dye: colored,
				pro,
				bday: born,
				date,
				file: null,
				NowColor,
				notes
			});
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};
	//start of form
	return (
		<div className="container dashSections">
			<div className="row mt-5">
				<div className="col-sm-12">
					<form onSubmit={SubmitData}>
						<h1>Hair Questionaire</h1>
						<div className="form-group">
							<div className="Quizform-name">
								<label>
									First Name:
									<input
										type="text"
										name="firstname"
										placeholder="Jane"
										value={firstname}
										onChange={e => setUser(e.target.value)}
										className="form-text-input"
									/>
								</label>
								<label>
									Last Name:
									<input
										type="text"
										name="lastname"
										placeholder="Doe"
										value={lastname}
										onChange={e => lastUser(e.target.value)}
										className="form-text-input"
									/>
								</label>
								<label>
									Hair Color:
									<input
										type="text"
										name="color"
										placeholder="Color"
										value={NowColor}
										onChange={e =>
											setNowColor(e.target.value)
										}
										className="form-text-input"
									/>
								</label>
							</div>
							{/* hair types section */}
							<h5>Type 1: Straight</h5>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Straight: Fine/Thin"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={
											hairType === "Straight: Fine/Thin"
										}
										className="form-check-input"
									/>
									<i>1a Straight</i> (<b>Fine</b>/<b>Thin</b>)
									Hair tends to be very soft, thin, shiny,
									oily, poor at holding curls, and difficult
									to damage
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Straight: Medium"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={
											hairType === "Straight: Medium"
										}
										className="form-check-input"
									/>
									<i>1b Straight</i> (<b>Medium</b>) Hair is
									characterized by volume and body
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Straight: Coarse"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={
											hairType === "Straight: Coarse"
										}
										className="form-check-input"
									/>
									<i>1c Straight </i>(<b>Coarse</b>) Hair
									tends to be bone-straight, thick, and
									difficult to curl
								</label>
							</div>
							<h5>Type 2: Wavy</h5>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Wavy: Fine/Thin"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "Wavy: Fine/Thin"}
										className="form-check-input"
									/>
									<i>2a Wavy</i> (<b>Fine</b>/<b>Thin</b>)
									Hair has a defined "S" pattern, can easily
									be straightened or curled, and is usually
									receptive to a variety of styles
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Wavy: Medium"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "Wavy: Medium"}
										className="form-check-input"
									/>
									<i>2b Wavy</i> (<b>Medium</b>) Hair tends to
									be frizzy and a little resistant to styling
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Wavy: Coarse"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "Wavy: Coarse"}
										className="form-check-input"
									/>
									<i>2c Wavy </i>(<b>Coarse</b>) Hair is
									fairly thick, frizzy or very frizzy with
									thicker waves, and often more resistant to
									styling
								</label>
							</div>
							<h5>Type 3: Curly</h5>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Curly: Loose"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "Curly: Loose"}
										className="form-check-input"
									/>
									<i>3a Curly</i> (<b>Loose</b>) Presents a
									definite "S" pattern, tends to combine
									thickness, volume, and/or frizziness
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Curly: Tight"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "Curly: Tight"}
										className="form-check-input"
									/>
									<i>3b Curly</i> (<b>Tight</b>) Hair has a
									defined "S" pattern with curls ranging from
									loose spirals to spiral-shaped corkscrew
								</label>
							</div>
							<h5>Type 4: Kinky</h5>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Kinky: Soft"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "Kinky: Soft"}
										className="form-check-input"
									/>
									<i>4a Kinky</i> (<b>Soft</b>) Hair tends to
									be very wiry and fragile, tightly coiled and
									can feature curly patterning
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"Kinky: Wiry"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "Kinky: Wiry"}
										className="form-check-input"
									/>
									<i>4b Kinky</i> (<b>Wiry</b>) Hair has a
									less defined pattern of curls, looks more
									like a "Z" with sharp angles
								</label>
							</div>
						</div>
						{/* The Lenght of Your Hair */}
						<h5>Length of hair</h5>
						<div className="form-check">
							<label>
								<input
									type="radio"
									name="hairL"
									value={"Short"}
									onChange={e => setLength(e.target.value)}
									checked={length === "Short"}
									className="form-check-input"
								/>
								Short
							</label>
						</div>
						<div className="form-check">
							<label>
								<input
									type="radio"
									name="hairL"
									value={"Medium"}
									onChange={e => setLength(e.target.value)}
									checked={length === "Medium"}
									className="form-check-input"
								/>
								Medium
							</label>
						</div>
						<div className="form-check">
							<label>
								<input
									type="radio"
									name="hairL"
									value={"Long"}
									onChange={e => setLength(e.target.value)}
									checked={length === "Long"}
									className="form-check-input"
								/>
								Long
							</label>
						</div>
						{/* hair dye section which leads into a turnary */}
						<div className="form-group">
							<h5>
								Has your hair been colored in the last two
								years?
							</h5>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="colored?"
										value={"colored"}
										onChange={e =>
											setColored(e.target.value)
										}
										checked={colored === "colored"}
										className="form-check-input"
									/>
									Yes
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="colored?"
										value={"virgin"}
										onChange={e =>
											setColored(e.target.value)
										}
										checked={colored === "virgin"}
										className="form-check-input"
									/>
									No
								</label>
							</div>
						</div>
						{colored === "colored" ? (
							<>
								{/* turnary and dye process */}
								<div className="form-group">
									<div className="form-check">
										<h5>How was it dyed?</h5>
										<label>
											<input
												type="radio"
												name="process"
												value={"box"}
												onChange={e =>
													setPro(e.target.value)
												}
												checked={pro === "box"}
												className="form-check-input"
											/>
											Box dyed
										</label>
									</div>
									<div className="form-check">
										<label>
											<input
												type="radio"
												name="process"
												value={"solon"}
												onChange={e =>
													setPro(e.target.value)
												}
												checked={pro === "solon"}
												className="form-check-input"
											/>
											Professionally
										</label>
									</div>
								</div>
								{/* color date section */}
								<div className="form-group">
									<div className="form-calendar">
										<h6>When was your last color date?</h6>
										<Calendar
											value={date}
											onChange={date => setDate(date)}
										/>
									</div>
								</div>{" "}
							</>
						) : (
							""
						)}
						<div className="form-group">
							<div className="form-calendar">
								<h5>What is your birthday?</h5>
								<Calendar
									value={born}
									onChange={born => setBorn(born)}
								/>
							</div>
						</div>
						{/* photo upload section and notes section */}
						<div className="form-group">
							<h5>What is your ideal hair?</h5>
							<label>
								<ProfilePage
									handleUploadedSuccess={
										handleUploadedSuccess
									}
								/>
							</label>
							<label>
								<input
									type="text"
									name="notes"
									placeholder="Any other notes?"
									value={notes}
									onChange={e => setNotes(e.target.value)}
									className="form-text-input"
								/>
							</label>
						</div>
						{/* end of questionaire and submit */}
						<div className="form-group">
							<button
								className="btn btn-primary mt-2"
								type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default List;
