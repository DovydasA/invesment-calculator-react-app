import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import {useState} from "react";

// {
//     initialInvestment,
//     annualInvestment,
//     expectedReturn,
//     duration,
//   }

function App() {
	const [userArgs, setUserArgs] = useState({
		initialInvestment: null,
		annualInvestment: null,
		expectedReturn: null,
		duration: null,
	});

	const handleUserInput = (property, value) => {
		setUserArgs((prev) => ({
			[property]: value,
			...prev,
		}));
	};
	return (
		<>
			<Header />
			<main>
				<UserInput updateUserQuery={handleUserInput} />
				<ResultTable />
			</main>
		</>
	);
}

export default App;
