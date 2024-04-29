import Input from "./Input";

function UserInput({query, updateUserQuery}) {
	return (
		<>
			<section id="user-input">
				<div className="input-group">
					<Input
						name="initialInvestment"
						value={query.initialInvestment}
						onChange={(e) => updateUserQuery(e)}>
						Initial Investment
					</Input>
					<Input
						name="annualInvestment"
						value={query.annualInvestment}
						onChange={(e) => updateUserQuery(e)}>
						Annual Investment
					</Input>
				</div>
				<div className="input-group">
					<Input
						step="0.5"
						name="expectedReturn"
						value={query.expectedReturn}
						onChange={(e) => updateUserQuery(e)}>
						Expected Return
					</Input>
					<Input
						name="duration"
						value={query.duration}
						onChange={(e) => updateUserQuery(e)}>
						Duration
					</Input>
				</div>
			</section>
		</>
	);
}

export default UserInput;
