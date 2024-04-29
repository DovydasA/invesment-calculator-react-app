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
	const render = result.length > 0 && result[0].interest > 0 ? true : false;

	return (
		<section>
			<table id="result">
				<thead>
					<tr className="thead">
						{tableHead.map((col) => (
							<th key={col}>{col}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{render &&
						result.map((row) => (
							<TableRow
								key={crypto.randomUUID()}
								data={{initialInvestment: query.initialInvestment, ...row}}
							/>
						))}
				</tbody>
			</table>
		</section>
	);
}

export default ResultTable;
