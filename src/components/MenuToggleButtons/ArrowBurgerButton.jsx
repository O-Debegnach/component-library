import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";

const StyledArrowBurger = styled(Burger)`
	span {
		left: 1%;
		width: 99%;
	}
	span:nth-child(1) {
		position: absolute;
		left: 1%;
		width: 99%;
		top: ${(props) => (props.active ? "45%" : 0)};
		transform-origin: right;
		transition: top 0.5s, width ${(props) => (props.active ? ".1s" : ".2s")},
			transform 0.5s;
		transition-delay: ${(props) =>
			props.active ? "10ms, 0ms" : "0ms, 100ms"};
		transform: translateX(${(props) => (props.active ? "-100%" : "0px")})
			rotate(${(props) => (props.active ? "150deg" : "0deg")});

		width: ${(props) => props.active && "40%"};
	}

	span:nth-child(3) {
		position: absolute;
		bottom: ${(props) => (props.active ? "45%" : 0)};
		transform-origin: right;
		transition: bottom 0.5s,
			width ${(props) => (props.active ? ".1s" : ".2s")}, transform 0.5s;
		transition-delay: ${(props) =>
			props.active ? "10ms, 0ms" : "0ms, 100ms"};
		transform: translateX(${(props) => props.active && "-100%"})
			rotate(${(props) => (props.active ? "-150deg" : "0deg")});

		width: ${(props) => props.active && "40%"};
	}
`;
const ArrowBurgerButton = (props) => {
	const [active, setActive] = useState(false);
	const size = parseInt(props.size);
	const handleActivation = (e) => {
		setActive(!active);
	};

	return (
		<StyledArrowBurger
			className={props.className}
			onClick={handleActivation}
			bgColor={props.bgColor}
			active={active}
			color={props.color}
			size={size}
		></StyledArrowBurger>
	);
};

export default ArrowBurgerButton;
