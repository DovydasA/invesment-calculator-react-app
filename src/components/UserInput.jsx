import Input from "./Input";

function UserInput({updateUserQuery}) {
	return (
		<>
			<section id="user-input">
				<div className="input-group">
					<Input
						name="initialInvestment"
						onInputUpdate={updateUserQuery}>
						Initial Investment
					</Input>
					<Input
						name="annualInvestment"
						onInputUpdate={updateUserQuery}>
						Annual Investment
					</Input>
				</div>
				<div className="input-group">
					<Input
						step="0.5"
						name="expectedReturn"
						onInputUpdate={updateUserQuery}>
						Expected Return
					</Input>
					<Input
						name="duration"
						onInputUpdate={updateUserQuery}>
						Duration
					</Input>
				</div>
			</section>
		</>
	);
}

export default UserInput;
