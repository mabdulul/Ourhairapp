import React, { Component } from "react";
import "../../Stylesheets/terms.css";
import style from "../../images/hairstyle.png";

class Style extends Component {
	render() {
		return (
			<div className="terms">
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
									<h4>Teasing </h4>Back-combing the hair
									toward the scalp.
								</li>
								<li className="list">
									<h4>Perm </h4>Permanently curling the hair
									achieved by setting the hair with chemical
									treatment.
								</li>
								<li className="list">
									<h4>Blow Dry </h4>
									Drying the hair while combing it through
									with a round bristle brush, lending bounce
									and volume to the hair.
								</li>
								<li className="list">
									<h4>Blowout</h4>A proper blowout can add
									fullness and volume to the hair, can
									straighten curls, and can even add shine.
								</li>
								<li className="list">
									<h4>Rough Blow Dry</h4>Hair that is dried
									with a hair dryer without styling it;
									typically done by running your fingers
									through your mane as you dry.
								</li>
								<li className="list">
									<h4>Heat styling</h4>When you hear a stylist
									referring to heat styling, she's talking
									about the use of heat tools to do your hair.
									Curling irons, blow dryers, flat irons —
									anything that requires, you guessed it,
									heat!
								</li>
								<li className="list">
									<h4>Curling</h4>There are many techniques
									and tools available for curling your hair.
									Your stylist will be able to give you
									examples of what tecnige to use based on the
									type of curl you're after. Most commonly, a
									flat iron or curling iron are used.
								</li>
								<li className="list">
									<h4>Straightening</h4>A hair styling
									technique involving the flattening and
									straightening of hair in order to give it a
									smooth, streamlined, and sleek appearance.
								</li>
								<li className="list">
									<h4>Finger styling</h4>Only fingers (no
									styling tools) are used while blow-drying
									and styling the hair. Usually with short or
									curly hair.
								</li>
								<li className="list">
									<h4>Scrunch Dry</h4>Once you've cleansed
									your hair and removed any excess water, flip
									your head upside down and gather sections of
									hair in your hands, then scrunch it to
									accentuate any natural curl. It's best to do
									this when your hair is about 50 percent dry
									— and spritz on a sea salt spray beforehand.
								</li>
								<li className="list">
									<h4>Braid</h4>Also known as a plait, it's a
									type of hairstyle in which all or part of
									one's hair is separated into strands,
									normally three, and then plaited or braided
									together. The typical style is to form one
									braid hanging down at the back of the head
									or two braids hanging down on either side of
									the head. Braids can also be strengthened or
									lengthened with the addition of weaving
									hair. Braids may also serve as the base for
									sewing on additional weave hair on top of
									the braid for additional hair styling
									options.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Style;
