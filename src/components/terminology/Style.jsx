import React, { Component } from "react";
import "../../Stylesheets/terms.css";
import style from "../../images/hairstyle.png";

class Style extends Component {
	render() {
		return (
			<div className="container">
				<div className="row mt-5">
					<div className="col-sm-12">
						<div className="title">
							<h1>Hair Style Terminology</h1>
							<img
								src={style}
								className="icons-style"
								alt="style"
							/>
						</div>

						<ul>
							<li className="list">
								<h4>Teasing </h4>Back-combing the hair toward
								the scalp.
							</li>
							<li className="list">
								<h4>Perm </h4>Permanently curling the hair
								achieved by setting the hair with chemical
								treatment.
							</li>
							<li className="list">
								<h4>Blow Dry </h4>
								Drying the hair while combing it through with a
								round bristle brush, lending bounce and volume
								to the hair.
							</li>
							<li className="list">
								<h4>Finger styling</h4>Only fingers (no styling
								tools) are used while blow-drying and styling
								the hair. Usually with short or curly hair.
							</li>
							<li className="list">
								<h4>Rough Blow Dry</h4>Hair that is dried with a
								hair dryer without styling it; typically done by
								running your fingers through your mane as you
								dry.
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Style;
