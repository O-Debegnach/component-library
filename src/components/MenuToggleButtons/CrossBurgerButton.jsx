import { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";

const StyledCrossBurger = styled(Burger)`
	> span:nth-child(1) {
		position: absolute;
		transition: 0.5s;
		transform: rotate(${(props) => props.active && "45deg"});
		top: ${(props) => (props.active ? "45%" : 0)};
	}

	> span:nth-child(2) {
		transition: transform 0.5s;
		transform: ${(props) => props.active === true && "translateX(150%)"};
	}

	> span:nth-child(3) {
		position: absolute;
		transform: rotate(${(props) => (props.active ? "-45deg" : "0deg")});
		transition: 0.5s;
		bottom: ${(props) => (props.active ? "45%" : 0)};
	}
`;

const CrossBurgerButton = (props) => {
	const [active, setActive] = useState(false);
	const size = parseInt(props.size);
	const handleActivation = (e) => {
		setActive(!active);
		console.log(active);
	};

	return (
		<StyledCrossBurger
			className={props.className}
			onClick={handleActivation}
			bgColor={props.bgColor}
			active={active}
			color={props.color}
			size={size}
		/>
	);
};

export default CrossBurgerButton;
