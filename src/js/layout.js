import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import injectContext from "./store/appContext";
import { Characters } from "./views/characters";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharacterLearnMore } from "./views/characterLearnMore";
import { PlanetLearnMore } from "./views/planetLearnMore";
import { VehicleLearnMore } from "./views/vehicleLearnMore";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characterLearnMore/:id" element={<CharacterLearnMore />} />
						<Route path="/planetLearnMore/:id" element={<PlanetLearnMore />} />
						<Route path="/vehicleLearnMore/:id" element={<VehicleLearnMore />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
