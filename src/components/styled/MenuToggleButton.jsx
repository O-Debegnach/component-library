import React, { useState } from "react";
import styled, { css } from "styled-components";

const Animations = css`
	@keyframes topBar {
	}
`;

const StyledToggle = styled.button`
	position: relative;
	cursor: pointer;
	width: ${(props) => props.size + "px" || "50px"};
	height: ${(props) => props.size + "px" || "50px"};
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	padding: 10px;
	border: none;
	border-radius: 20%;
	box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-x: hidden;

	> span {
		position: absolute;
		width: 70%;
		height: 5%;
		background-color: ${(props) => props.color || "#000"};
		border-radius: 50vh;
	}

	> span:nth-child(1) {
		transition-delay: 2s;
		transition: transform 0.5s;
		transform: translateY(
				${(props) =>
					props.size
						? props.active
							? "0"
							: -props.size / 5 + "px"
						: props.active
						? "0px"
						: "-10px"}
			)
			rotate(${(props) => (props.active ? "45deg" : "0deg")});
	}

	> span:nth-child(2) {
		transition: transform 0.5s;
		transform: ${(props) => props.active === true && "translateX(150%)"};
	}

	> span:nth-child(3) {
		transition-delay: 2s;
		transform: translateY(
				${(props) =>
					props.size
						? props.active
							? "0"
							: props.size / 5 + "px"
						: props.active
						? "0px"
						: "10px"}
			)
			rotate(${(props) => (props.active ? "-45deg" : "0deg")});
		transition: transform 0.5s;
	}
`;

const MenuToggleButton = (props) => {
	const [active, setActive] = useState(false);
	const size = parseInt(props.size);
	const handleActivation = (e) => {
		setActive(!active);
	};
	return (
		<StyledToggle
			onClick={handleActivation}
			bgColor={props.bgColor}
			active={active}
			color={props.color}
			size={size}
		>
			<span />
			<span />
			<span />
		</StyledToggle>
	);
};

export default MenuToggleButton;
