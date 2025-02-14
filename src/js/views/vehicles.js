import React, { useState } from "react";
import { useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    const handleFavourite = (item) => {
        actions.addFavourite(item)
    }

    return (
        <div className="container">
            <h1 className="d-flex justify-content-start text-primary">Vehicles</h1><br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-nowrap overflow-auto">
                {store.vehicles.map((v, index) => {
                    const vehicleImage = `https://starwars-visualguide.com/assets/img/vehicles/${v.uid}.jpg`

                    return (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <img src={vehicleImage} className="card-img-top" alt={v.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{v.name}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <Link to={`/VehicleLearnMore/${v.uid}`}>
                                        <button type="button" className="btn btn-outline-primary">Learn more</button>
                                    </Link>
                                    <button type="button" className="btn btn-outline-primary" onClick={() => handleFavourite(v.name)}><i className="fa-regular fa-heart"></i></button>
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