import {useState} from "react";

function Input({children, ...props}) {
	const [input, setInput] = useState("");
	const handleInputChange = (e) => {
		const {value} = e.target;
		setInput(value);
	};

	return (
		<div>
			<label>{children}</label>
			<input
				type="number"
				value={input}
				onChange={handleInputChange}
				{...props}
			/>
		</div>
	);
}

export default Input;
