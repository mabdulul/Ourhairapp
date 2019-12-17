import React, { Component } from "react";
import "../../Stylesheets/terms.css";
import cut from "../../images/cut.png";

class Cut extends Component {
	render() {
		return (
			<div className="container">
				<div className="row mt-5">
					<div className="col-sm-12">
						<div className="title">
							<h1>Hair Cut Terminology</h1>
							<img src={cut} className="icons-cut" alt="cut" />
						</div>
						<p>
							<b>Here's a tip:</b> When talking to your stylist
							about length, don’t use inches. Everyone’s “inch”
							looks different. Instead, show your stylist where
							you want to see your overall length, using your body
							as reference points, e.g., collar bone, shoulder, or
							chin length are great points of reference.
						</p>
						<ul>
							<li className="list">
								<h4>Blunt Cut </h4>A straight haircut at the
								bottom. Hair is not layered.
							</li>
							<li className="list">
								<h4>Tapering or Feathering</h4>Shortening the
								hair in a graduated effect. This expression is
								used for very short hair cuts.
							</li>
							<li className="list">
								<h4>Choppy</h4> A choppy cut involves your
								stylist “point cutting” different lengths into
								your hair. This helps product to do its magic,
								and can help your hair look fuller.
							</li>
							<li className="list">
								<h4>Graduated or Stacked Hair</h4> A graduated
								cut involves layers, which for the hairstylist,
								means cutting at an angle of less than 90
								degree. Thanks to this technique, there is more
								control for stylists to shape the desired
								outline of a cut. With this look, the layers
								stack closely on top of another, often adding a
								bit of needed bulk or weight to the style in
								specific areas.
							</li>
							<li className="list">
								<h4>Overdirecting</h4> This is a cutting
								technique where hair is lifted and cut over the
								head to create extra body and volume.
								Essentially, the end result is a ton of
								exaggerated layers. Think: shaggy, rockstar
								cuts.
							</li>
							<li className="list">
								<h4>Pixie</h4> This is one of the most extreme
								short haircut styles. A pixie cut is extremely
								short and close-cropped. It’s typically
								considered a boyish cut, but works well on
								anyone with small, delicate facial features
								(making them look pixies, hence its name).
							</li>
							<li className="list">
								<h4>Fringe</h4> This is another term for bangs
								that lie atop the forehead. Bangs can be worn in
								a number of ways: lash-grazing, above the
								eyebrows, arched (longer on the sides), parted
								(like open curtains), or side swept.
							</li>
							<li className="list">
								<h4>Layers</h4> This cutting technique is used
								to remove varying amounts of hair weight or
								volume. Longer layers leave more weight in the
								hair, while short layers take more out.
								<b>A side benefit for men:</b> if your hair is
								thinning, layers can give the appearance of
								thicker hair.
							</li>
							<li className="list">
								<h4>Face-Framing Layers</h4> This can go very
								wrong, if you don’t let your stylist know how
								short she can go for your shortest layer and
								what length would keep you comfortable. For
								example, if you have long hair and want
								face-framing layers, you need to decide how
								short the shortest layer can be; maybe it
								brushes the collar bone.
							</li>
							<li className="list">
								<h4>Razoring </h4> Using a straight razor to
								trim the ends of your hair instead of scissors
								(don’t try this at home) helps hair lay flat and
								reduces puffiness. This is especially beneficial
								for curly hair.
							</li>
							<li className="list">
								<h4>Texture</h4> Many modern styles incorporate
								some kind of texture or layering. Getting the
								right texture means knowing your hair type. Is
								it really thick and voluminous? Your stylist can
								help you tame it by thinning it out. Have curly
								hair? Razoring the edges (see above) can make
								your morning routine a whole lot easier.
							</li>
							<li className="list">
								<h4>Thinned</h4> Thinning is for men and women
								with extra thick, bushy hair. Your stylist will
								use thinning shears to remove some of the volume
								from your hair.
							</li>
							<li className="list">
								<h4>Asymmetry</h4>
								Angular hairstyles that do not boast the same
								lengths across the whole head.
							</li>
							<li className="list">
								<h4>Wedge Haircut</h4>A variation of the bob
								where longer dimensions are towards the front of
								the face.
							</li>
							<li className="list">
								<h4>Dusting</h4>Dusting means you aren’t really
								changing your hairstyle, but rather getting a
								trim. It’s for people who want only the split or
								dead ends cut off, but keep everything else as
								is.
							</li>
							<li className="list">
								<h4>Dry Cutting</h4>A technique used by hair
								stylists where they cut the hair without
								dampening it. A useful technique for indicating
								how your hair will look after the cut.
							</li>
							<li className="list">
								<h4>Bowl Cut</h4>
								An unfortunate hairstyle where straighter hair
								is cut evenly across the whole head
								traditionally just above the eyebrows;
								resembling the eating utensil it is named after.
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Cut;
