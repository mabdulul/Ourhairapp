import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import firebase from "firebase";
import firedatabase from "../auth/base";
import "../../Stylesheets/quiz.css";

const List = ({history}) => {
	useEffect(() => {
		fetchUserId();
	}, []);

	const fetchUserId = () => {
		let user = firedatabase.auth().currentUser;
	
	};
	const [firstname, setUser] = useState("");
	const [lastname, lastUser] = useState("");
	const [hairType, setHairType] = useState("");
	const [length, setLength] = useState("");
	const [porosity, setPorosity] = useState("");
	const [colored, setColored] = useState("");
	const [pro, setPro] = useState("");
	const [date, setDate] = useState("");
	// const [picture, setPicture] = useState(""); We will use it later
	const [notes, setNotes] = useState("");

	const SubmitData = e => {
		e.preventDefault();
		const user = firedatabase.auth().currentUser;
		const db = firebase.firestore();
	   
		try{
		const userRef = db.collection("Quiz_list").add({
			userid: user.uid,
			firstname,
			hairType,
			lastname,
			length,
			porosity,
			dye: colored,
			pro,
			date,
			file: null,
			notes
			
		})
		history.push("/");
	}catch(error){
		console.log(error)
	}

	};

	return (
		<div className="container Quizform">
			<div className="row mt-5">
				<div className="col-sm-12">
					<h1>Build your hair profile</h1>
					<form onSubmit={SubmitData}>
						<h2>
							Hair Type
						</h2>
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
						</div>
					
							<h6>Straight</h6>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"1a"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "1a"}
										className="form-check-input"
									/>
									1A Straight (Fine/Thin) Hair tends to be
									very soft, thin, shiny, and oily.
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"1b"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "1b"}
										className="form-check-input"
									/>
									1B Straight (Medium) Hair characterized by
									volume and body.
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"1c"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "1c"}
										className="form-check-input"
									/>
									1C Straight (Coarse) Hair tends to be
									bone-straight and coarse.
								</label>
							</div>
							<h6>Wavy</h6>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"2a"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "2a"}
										className="form-check-input"
									/>
									2A Wavy (Fine/Thin) Hair has definite "S"
									pattern, can easily be shaped.
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"2b"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "2b"}
										className="form-check-input"
									/>
									2B Wavy (Coarse) Can tend to be frizzy and a little resistant to styling.
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"2c"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "2c"}
										className="form-check-input"
									/>
									2C Wavy (Coarse) Fairly coarse, frizzy with thicker waves and resistant to styling.
								</label>
							</div>
							<h6>Curly</h6>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"3a"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "3a"}
										className="form-check-input"
									/>
									3A Curly (Loose) Presents a definite "S"
									pattern, tends to have volume,.
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"3b"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "3b"}
										className="form-check-input"
									/>
									3B Curly (Tight) Presents a definite "S" pattern, curls ranging from spirals to corkscrew
								</label>
							</div>
							<h6>Kinky</h6>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"4a"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "4a"}
										className="form-check-input"
									/>
									4A Kinky (Soft) Hair tends to be very wiry and fragile, tightly coiled has a curly.
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="type"
										value={"4b"}
										onChange={e =>
											setHairType(e.target.value)
										}
										checked={hairType === "4b"}
										className="form-check-input"
									/>
									4B Kinky (Wiry) As 4a but with less defined pattern of curls, looks more like a "Z".
								</label>
							</div>
						</div>
{/* The Lenght of Your Hair */}
						<h6>Length of hair</h6>
						<div className="form-check">
							<label>
								<input
									type="radio"
									name="hairL"
									value={"option2"}
									onChange={e => setLength(e.target.value)}
									checked={length === "option2"}
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
									value={"option3"}
									onChange={e => setLength(e.target.value)}
									checked={length === "option3"}
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
									value={"long"}
									onChange={e => setLength(e.target.value)}
									checked={length === "long"}
									className="form-check-input"
								/>
								Long
							</label>
						</div>

						<h6>Hair porosity</h6>
						<div className="form-group">
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="porosity"
										value={"low"}
										onChange={e =>
											setPorosity(e.target.value)
										}
										checked={porosity === "low"}
										className="form-check-input"
									/>
									Low
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="porosity"
										value={"medium"}
										onChange={e =>
											setPorosity(e.target.value)
										}
										checked={porosity === "medium"}
										className="form-check-input"
									/>
									Medium
								</label>
							</div>
							<div className="form-check">
								<label>
									<input
										type="radio"
										name="porosity"
										value={"high"}
										onChange={e =>
											setPorosity(e.target.value)
										}
										checked={porosity === "high"}
										className="form-check-input"
									/>
									High
								</label>
							</div>
						</div>
						<div className="form-group">
							<h6>
								Has your hair been colored in the last two
								years?
							</h6>
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
								<div className="form-group">
									<div className="form-check">
										<h6>How was it done?</h6>
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
								<div className="form-group">
									<div className="form-calendar">
										<p>When was your last color date?</p>
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
							{/* <p>What is your ideal hair?</p>
							<label>
								<input
									type="file"
									name="hair pics"
									onChange={e => setPicture(e.target.value)}
								/>
							</label> */}
							<label>
								<input
									type="text"
									name="notes"
									placeholder="Any more notes?"
									value={notes}
									onChange={e => setNotes(e.target.value)}
									className="form-text-input"
								/>
							</label>
						</div>
						<div className="form-group">
							<button
								className="btn btn-primary mt-2"
								type="submit">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default List;
