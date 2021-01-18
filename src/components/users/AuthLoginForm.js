import React, { Component } from 'react';

const initialState = {
	username: '',
	password: ''
};

export default class AuthLoginForm extends Component {
	state = initialState;

	handleChange = (stateKey) => (event) => {
		this.setState({ [stateKey]: event.target.value });
	};

	submitForm = (event) => {
		event.preventDefault();
		alert(`Your details have been submitted for registration`);
	};

	render() {
		const { username, password } = this.state;
		return (
			<form onSubmit={this.submitForm}>
				<h3 id="h3-authuser">Sign In</h3>
				<label>User Name</label>
				<input
					name="username"
					type="text"
					id="authuserlogin"
					placeholder="Test User"
					label="User Name"
					value={username}
					onChange={this.handleChange('username')}
				/>
				<p>{username}</p>
				<br />
				<label>Password</label>
				<input
					className="input"
					name="User Password"
					type="Password"
					id="authuserpassword"
					placeholder="Password"
					label="Password"
					value={password}
					onChange={this.handleChange('password')}
				/>
				<p>{password}</p>
				<br />
				<button
					name="btn-submit"
					type="btn"
					id="btn-authuserpayload"
					label="Sign-in"
					onSubmit={this.submitForm}
				>
					Sign-in
				</button>
			</form>
		);
	}
}
