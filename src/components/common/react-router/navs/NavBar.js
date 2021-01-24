import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<div>
					<Link to="/login">Login</Link>
				</div>
			</div>
		);
	}
}

export default NavBar;
