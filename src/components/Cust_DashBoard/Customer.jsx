import React, { Component } from "react";

class Customer extends Component {
	render() {
		return (
			<>
				<div>
					<h1>Hello Customer</h1>
					{/*  {customer.name} from database  */}
				</div>
				<div>
					<h2>Images</h2>{" "}
					{/* display 3-5? Can link to stylist and maybe a modal to enlarge image */}
				</div>
			</>
		);
	}
}

export default Customer;
