import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="nav-container flex-row-spacebetween">
			<Link to="/">
				<h2>Home Feed</h2>
			</Link>
			<Link to="/statistics">
				<h2>Statistics</h2>
			</Link>
			<Link to="/upload">
				<h2>Upload</h2>
			</Link>
		</div>
	);
};

export default Nav;
