import React, { useState } from "react";
import { useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {

    const { store, actions } = useContext(Context);

    const handleFavourite = (item) => {
        actions.addFavourite(item)
    }

    return (
        <div className="container">
            <h1 className="d-flex justify-content-start text-primary">Planets</h1><br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-nowrap overflow-auto">
                {store.planets.map((p, index) => {
                    const planetImage = `https://starwars-visualguide.com/assets/img/planets/${p.uid}.jpg`
                    return (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <img src={planetImage} className="card-img-top" alt={p.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <Link to={`/PlanetLearnMore/${p.uid}`}>
                                        <button type="button" className="btn btn-outline-primary">Learn more</button>
                                    </Link>
                                    <button type="button" className="btn btn-outline-primary" onClick={() => handleFavourite(p.name)}><i className="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}