import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header_container">
			<NavLink activeClass="active" exact to="/">
				<button>Album</button>
			</NavLink>
			<NavLink activeClass="active" exact to="/music">
				<button>Music</button>
			</NavLink>
		</div>
	);
};

export default Header;
