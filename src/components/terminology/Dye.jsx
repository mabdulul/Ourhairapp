import React, { Component } from "react";
import "../../Stylesheets/terms.css";
import dye from "../../images/dye.png";

class Dye extends Component {
	render() {
		return (
			<div className="terms">
				<div className="container">
					<div className="row mt-5">
						<div className="col-sm-12">
							<div className="title">
								<h1>Hair Dye Terminology</h1>
								<img
									src={dye}
									className="icons-dye"
									alt="dye"
								/>
							</div>
							<ul>
								<li className="list">
									<h4>Base Color </h4>The main color applied
									all over the head or at the root area,
									before a more dimensional color technique is
									applied. If you usually just get highlights,
									your base color is your natural haircolor.
									If you choose to color your base, you’ll be
									back to the salon sooner, as your roots will
									show faster than if you used a highlighting
									technique.
								</li>
								<li className="list">
									<h4>Balayage </h4>A French word meaning to
									sweep or paint. A colorist will area-paint
									highlights onto the hair in a sweeping
									motion. This gives a much more natural,
									sun-kissed look, as opposed to streaky,
									top-to-bottom highlights. With balayage,
									regrowth lines are less noticeable, so the
									color still looks great long after your
									appointment.
								</li>
								<li className="list">
									<h4>Ombré</h4>Hair color that is dark at the
									root and gradually fades to lighter towards
									the ends of the hair. There are variations
									on this theme, including “sombré,” a more
									subtle version of ombré.
								</li>
								<li className="list">
									<h4>Sombré</h4>Consider Sombre the subtler,
									softer sister of Ombre. With this method,
									there’s a lower contrast between the hair at
									the roots and the hair at the ends, and the
									dark shade at the roots subtly gradates into
									the color at the ends for a more seamless
									blend.
								</li>
								<li className="list">
									<h4>Dip Dye</h4>This hair coloring style
									involves dipping the ends of the hair into
									dye. The dye used can be either a naturally
									colored dye or a bright colored dye.
									Dip-dyeing and the ombré hairstyle are
									similar.
								</li>
								<li className="list">
									<h4>Tortoiseshell</h4>Also known as Ecaille
									(French for tortoiseshell) Balayage, this is
									a multi-dimensional haircolor that combines
									Sombre and Balayage techniques and uses a
									color palette of caramels, golden blondes,
									chestnuts and chocolates. Just like with
									Ombre haircolor, hair at the roots is
									colored slightly darker than your natural
									color, while hair at the ends is lighter.
									Then hair painting is used to create
									different tones in the hair.
								</li>
								<li className="list">
									<h4>Highlights</h4>Highlights are sections
									of hair dyed lighter than your natural
									shade. They can be used to give hair
									dimension, accentuate facial features or
									slim down your face. They’re the opposite of
									lowlights. To add highlights to your hair,
									your colorist may use one of two techniques:
									foil highlighting and Balayage.
								</li>
								<li className="list">
									<h4>Lowlights</h4> Strands of hair that are
									dyed two or three shades darker than your
									base hair color. Lowlights are intended to
									give your hair depth, volume, and texture.
									They are also perfect for when your hair
									becomes too dull and light due to regular
									dyeing. As long as the correct shade is
									applied, lowlights have a subtle effect to
									make your hair look thicker than it actually
									is.
								</li>
								<li className="list">
									<h4>Babylights</h4>Delicate, extremely
									subtle highlights that are applied to very
									thin wisps of hair, as opposed to large
									sections. Babylights add a shimmer of color,
									look natural, and will be placed
									strategically.
								</li>
								<li className="list">
									<h4>Fluid Hair Painting</h4>Similar to
									Balayage, fluid hair painting also involves
									painting the surface of the hair. The only
									difference is that with fluid hair painting,
									haircolor is applied with your head leaned
									back against a table. With your hair fanned
									out on the surface, your colorist will have
									more control over the look of your hair
									since they will be able to see how the
									haircolors melt with each other.
								</li>
								<li className="list">
									<h4>Permanent Hair Color</h4>If you're going
									for a dramatic 'do or a more long-term
									change, opt for permanent color. This
									permanently alters the color of your hair
									and covers gray one hundred percent.
								</li>
								<li className="list">
									<h4>Semi-Permanent Hair Color</h4>If you
									want change without commitment,
									semi-permanent dye is a non-ammonia based
									hair color that is not permanent and lasts
									up to 10 shampoos.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dye;
