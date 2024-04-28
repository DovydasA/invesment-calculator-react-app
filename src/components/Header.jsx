import logo from "../assets/investment-calculator-logo.png";

function Header() {
	return (
		<header id="header">
			<img
				src={logo}
				alt="app logo"
			/>
			<h1>Investment App</h1>
		</header>
	);
}

export default Header;
