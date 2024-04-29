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
	const result = calculateInvestmentResults(query);

	return (
		<section>
			<table id="result">
				<tr className="thead">
					{tableHead.map((col) => (
						<th key={col}>{col}</th>
					))}
				</tr>
				{result.map((row) => (
					<TableRow data={{initialInvestment: query.initialInvestment, ...row}} />
				))}
			</table>
		</section>
	);
}

export default ResultTable;
