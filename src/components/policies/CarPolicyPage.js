const CarPolicyPage = () => {
	return (
		<div>
			<br />
			<h3 id="h3-authuser">My Policy</h3>
			<br />
			<input name="pol-ref" type="text" id="pol-ref" placeholder="Policy Ref" label="Policy Reference" />
			<br />
			<input name="cov-type" type="text" id="cov-type" placeholder="Cover Type" label="Cover Type" />
			<br />
			<input name="make-model" type="text" id="make-model" placeholder="Car make and model" label="Car" />
			<br />
			<input name="address" type="text" id="address" placeholder="Address" label="Address" />
			<br />
		</div>
	);
};
export default CarPolicyPage;
