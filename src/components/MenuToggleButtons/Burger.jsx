import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";

const BurgerStyle = styled.div`
	position: relative;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	overflow: hidden;

	> span {
		width: 100%;
		height: 10%;
		background-color: ${(props) => props.color || "#000"};
		border-radius: 50vh;
	}
`;

const Burger = ({ color, style, className, onClick }) => {
	return (
		<BurgerStyle style={style} className={className} onClick={onClick}>
			<span style={{ backgroundColor: color }} />
			<span style={{ backgroundColor: color }} />
			<span style={{ backgroundColor: color }} />
		</BurgerStyle>
	);
};

Burger.defaultProps = {
	color: "#000",
};

Burger.propTypes = {
	color: (props, propName, componentName) => {
		let res = !/^#(?:[0-9A-F]{3}){1,2}$/i.test(props[propName]);
		console.log(
			`${componentName} -> ${propName}(Value:${props[propName]}) -> ${res}`
		);
		if (res) {
			return new Error(
				"Invalid prop `" +
					propName +
					"` supplied to" +
					" `" +
					componentName +
					"`. Validation failed. Must be a valid hex color"
			);
		}
	},
};

export default Burger;
