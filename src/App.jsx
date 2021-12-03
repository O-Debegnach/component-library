import styled, { createGlobalStyle } from "styled-components";
import ArrowBurgerButton from "./components/MenuToggleButtons/ArrowBurgerButton";
import Burger from "./components/MenuToggleButtons/Burger";
import CrossBurgerButton from "./components/MenuToggleButtons/CrossBurgerButton";
// import Burger from "./components/MenuToggleButtons/Burger";

const Grid = styled.div`
	display: grid;
	column-count: 5;
	column-width: 1fr;
	column-fill: balance;
`;

const GlobalStyle = createGlobalStyle`
	.hola{
		margin: 2rem;
		width: 100px;
		height: 100px;
	}
`;

const App = () => {
	return (
		<div className="App" style={{ margin: "0 20%" }}>
			<GlobalStyle />
			<h1>Pruebas de Componentes</h1>
			<Grid>
				<CrossBurgerButton className="hola" />
				<ArrowBurgerButton
					direction="left"
					className="hola"
					color="#456"
					size="300px"
				/>
			</Grid>
		</div>
	);
};

export default App;
