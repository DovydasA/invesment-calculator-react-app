import Input from "./Input";

function UserInput({updateUserQuery}) {
	const handleInput = (e) => {
		const {name, value} = e.target;
		updateUserQuery(name, value);
	};

	return (
		<>
			<section id="user-input">
				<div className="input-group">
					<Input name="initialInvestment">Initial Investment</Input>
					<Input name="annualInvestment">Annual Investment</Input>
				</div>
				<div className="input-group">
					<Input name="expectedReturn">Expected Return</Input>
					<Input name="duration">Duration</Input>
				</div>
			</section>
		</>
	);
}

export default UserInput;
