import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="nav-container flex-row-spacebetween">
			<h2>Home Feed</h2>

			<h2>Statistics</h2>
			<h2>Find By User</h2>
		</div>
	);
};

export default Nav;
