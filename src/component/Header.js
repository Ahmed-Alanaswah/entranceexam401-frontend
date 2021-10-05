import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
export class Header extends Component {
	render() {
		return (
			<div>
				<Nav>
					<NavLink to="/">home</NavLink>

					<NavLink to="/favourite">favourite</NavLink>
				</Nav>
			</div>
		);
	}
}

export default Header;
