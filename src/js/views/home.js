import React from "react";
import "../../styles/home.css";
import { Characters } from "./characters";
import { Planets } from "./planets";
import { Vehicles } from "./vehicles";
import { useContext } from 'react';
import { Context } from "../store/appContext";

const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Characters />
			<br></br>
			<Planets />
			<br></br>
			<Vehicles />
		</div>
	)
};

export default Home;
