import Button from '../../common/Button';

const AuthLoginForm = () => {
	return (
		<div>
			<br />
			<h3 id="h3-authuser">Sign In</h3>
			<br />
			<input name="username" type="text" id="authuserlogin" placeholder="Test User" label="User Name" />
			<br />
			<input
				className="input"
				name="User Password"
				type="Password"
				id="authuserpassword"
				placeholder="Password"
				label="Password"
			/>
			<br />
			<Button name="btn-submit" type="btn" id="btn-authuserpayload" label="Sign-in">
				Sign-in
			</Button>
		</div>
	);
};
export default AuthLoginForm;
