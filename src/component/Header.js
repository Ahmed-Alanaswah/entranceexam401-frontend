import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

import LogoutButton from "./LogoutButton";
export class Header extends Component {
	render() {
		return (
			<div>
				<Nav style={{ paddin: "30px", backgroundColor: "#777", color: "#fff" }}>
					<NavLink
						style={{ margin: "20px", color: "#fff", textDecoration: "none" }}
						to="/"
					>
						home
					</NavLink>

					<NavLink
						style={{ margin: "20px", color: "#fff", textDecoration: "none" }}
						to="/favourite"
					>
						favourite
					</NavLink>
					<LogoutButton />
				</Nav>
			</div>
		);
	}
}

export default Header;
