import {formatter} from "../util/investment";

function TableRow({
	data: {initialInvestment, year, interest, valueEndOfYear, annualInvestment},
}) {
	const investedCapital = Math.round(
		initialInvestment + year * annualInvestment
	);
	const totalInterest = Math.round(valueEndOfYear - investedCapital);
	return (
		<tr>
			<td>{year}</td>
			<td>{formatter.format(Math.round(valueEndOfYear))}</td>
			<td>{formatter.format(Math.round(interest))}</td>
			<td>{formatter.format(totalInterest)}</td>
			<td>{formatter.format(investedCapital)}</td>
		</tr>
	);
}

export default TableRow;
