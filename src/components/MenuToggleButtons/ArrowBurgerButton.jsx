import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import PropTypes from "prop-types";

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
		transform-origin: ${(props) =>
			props.direction == "left" ? "right" : "left"};
		transition: top 0.5s, width ${(props) => (props.active ? ".1s" : ".2s")},
			transform 0.5s;
		transition-delay: ${(props) =>
			props.active ? "10ms, 0ms" : "0ms, 100ms"};
		transform: translateX(
				${(props) =>
					props.direction == "left"
						? props.active && "-100%"
						: props.active && "240%"}
			)
			rotate(
				${(props) => props.direction == "right" && props.active && "-"}${(props) => props.active && "150deg"}
			);

		width: ${(props) => props.active && "40%"};
	}

	span:nth-child(3) {
		position: absolute;
		bottom: ${(props) => (props.active ? "45%" : 0)};
		transform-origin: ${(props) =>
			props.direction == "left" ? "right" : "left"};
		transition: bottom 0.5s,
			width ${(props) => (props.active ? ".1s" : ".2s")}, transform 0.5s;
		transition-delay: ${(props) =>
			props.active ? "10ms, 0ms" : "0ms, 100ms"};
		transform: translateX(
				${(props) =>
					props.direction == "left"
						? props.active && "-100%"
						: props.active && "240%"}
			)
			rotate(
				${(props) => props.direction == "left" && props.active && "-"}${(props) => props.active && "150deg"}
			);

		width: ${(props) => props.active && "40%"};
	}
`;
const ArrowBurgerButton = ({ className, color, direction }) => {
	const [active, setActive] = useState(false);
	const handleActivation = (e) => {
		setActive(!active);
	};

	return (
		<StyledArrowBurger
			direction={direction}
			className={className}
			onClick={handleActivation}
			active={active}
			color={color}
		></StyledArrowBurger>
	);
};

ArrowBurgerButton.propTypes = {
	direction: PropTypes.oneOf(["left", "right"]),
	style: PropTypes.object,
	className: PropTypes.string,
};

export default ArrowBurgerButton;
