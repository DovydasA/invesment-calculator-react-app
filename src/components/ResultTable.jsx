const tableHead = [
	"Year",
	"Investment Value",
	"Interest (Year)",
	"Total Interest",
	"Invested Capital",
];

import {calculateInvestmentResults} from "../util/investment";

// {
//     initialInvestment,
//     annualInvestment,
//     expectedReturn,
//     duration,
//   }

function ResultTable({data}) {
	//const result = calculateInvestmentResults(data);
	return (
		<section>
			<table id="result">
				<tr className="thead">
					{tableHead.map((col) => (
						<th key={col}>{col}</th>
					))}
				</tr>
			</table>
		</section>
	);
}

export default ResultTable;
