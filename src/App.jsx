import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import {useState} from "react";

function App() {
	const [userQuery, setuserQuery] = useState({
		initialInvestment: 10000,
		annualInvestment: 200,
		expectedReturn: 4.5,
		duration: 10,
	});
	const handleUserInput = (e) => {
		const {name, value} = e.target;
		setuserQuery((prev) => ({
			...prev,
			[name]: +value,
		}));
	};

	return (
		<>
			<Header />
			<main>
				<UserInput
					query={userQuery}
					updateUserQuery={handleUserInput}
				/>
				<ResultTable query={userQuery} />
			</main>
		</>
	);
}

export default App;
