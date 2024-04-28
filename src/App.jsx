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
		initialInvestment: null,
		annualInvestment: null,
		expectedReturn: null,
		duration: null,
	});
	const areAllArgsSet = !hasNullValue(userArgs);

	const handleUserInput = (property, value) => {
		setUserArgs((prev) => ({
			...prev,
			[property]: parseFloat(value),
		}));
	};

	return (
		<>
			<Header />
			<main>
				<UserInput updateUserQuery={handleUserInput} />
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
