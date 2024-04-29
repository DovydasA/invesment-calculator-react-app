// import {useState} from "react";

function Input({children, ...props}) {
	// const [input, setInput] = useState("");
	// const handleInputChange = (e) => {
	// 	const {name, value} = e.target;
	// 	setInput(value);
	// 	onInputUpdate(name, value);
	// };

	return (
		<div>
			<label>{children}</label>
			<input
				required
				type="number"
				{...props}
			/>
		</div>
	);
}

export default Input;
