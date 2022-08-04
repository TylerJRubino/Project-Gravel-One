import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import GenericLogo from './app/assets/img/generic-logo.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar dark color="primary" sticky="top" expand="md">
				<Container>
					<NavbarBrand href="/">
						<img src={GenericLogo} alt="nucamp logo" />
						<h3>Project Gravel One</h3>
					</NavbarBrand>
				</Container>
			</Navbar>
			<h1>Any Text Goes Here</h1>
		</div>
	);
}

export default App;
