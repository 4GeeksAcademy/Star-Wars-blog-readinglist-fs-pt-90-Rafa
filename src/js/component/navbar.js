import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	const handleDelete = (index) => {
		actions.deleteFavourite(index)
	}

	return (
		<nav className="navbar navbar-light bg-dark mb-3 container-fluid">
			<Link to="/">
				<img src="https://starwarsintrocreator.kassellabs.io/7c5d6e394048c4ebb66f.svg" style={{ width: "20%", height: "20%" }} />
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
						Favourites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favourites?.map((fav, index) => {
							return (
								<li className="mx-3" key={index}>{fav || "Unnamed"}
									<button onClick={() => handleDelete(index)} className="mx-2 border border-0 bg-transparent">
										<i className="fa-solid fa-trash-can fa-sm"></i>
									</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
