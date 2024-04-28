const tableHead = [
	"Year",
	"Investment Value",
	"Interest (Year)",
	"Total Interest",
	"Invested Capital",
];

import {calculateInvestmentResults} from "../util/investment";
import TableRow from "./TableRow";

function ResultTable({query}) {
	let result;
	let render = false;
	if (!hasNullValue(query)) {
		result = calculateInvestmentResults(query);
		render = true;
		console.table(result);
	}
	return (
		<section>
			<table id="result">
				<tr className="thead">
					{tableHead.map((col) => (
						<th key={col}>{col}</th>
					))}
				</tr>
				{result &&
					result.map((row) => (
						<TableRow data={{initialInvestment: query.initialInvestment, ...row}} />
					))}
			</table>
		</section>
	);
}

export default ResultTable;
