import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import {useState} from "react";

function hasNullValue(obj) {
	for (let key in obj) {
		if (obj[key] === null) {
			return true;
		}
	}
	return false;
}

function App() {
	const [userArgs, setUserArgs] = useState({
		initialInvestment: 10000,
		annualInvestment: 200,
		expectedReturn: 4.5,
		duration: 10,
	});
	const areAllArgsSet = !hasNullValue(userArgs);

	const handleUserInput = (e) => {
		const {name, value} = e.target;
		setUserArgs((prev) => ({
			...prev,
			[name]: value ? parseFloat(value) : 0,
		}));
	};

	return (
		<>
			<Header />
			<main>
				<UserInput
					query={userArgs}
					updateUserQuery={handleUserInput}
				/>
				{areAllArgsSet ? (
					<ResultTable query={userArgs} />
				) : (
					<p className="center">All inputs must be filled.</p>
				)}
			</main>
		</>
	);
}

export default App;
