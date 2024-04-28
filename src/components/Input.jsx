import {useState} from "react";

function Input({children, onInputUpdate, ...props}) {
	const [input, setInput] = useState("");
	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setInput(value);
		onInputUpdate(name, value);
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
