import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const VehicleLearnMore = () => {

    const { id } = useParams()
    const { store, actions } = useContext(Context)
    const vehicleImage = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`

    useEffect(() => {
        actions.characterDetails(id)
    }, [])


    return (
        <div>
            <div className="card mb-3 text-bg-dark  container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={vehicleImage} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{store.vehicleDetailView.name}
                            </h1>
                            <div className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean et efficitur elit. Nulla euismod semper dolor, non molestie ligula sodales non.
                                Morbi rhoncus ante id condimentum maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla viverra laoreet tincidunt. Suspendisse sagittis nisi orci, aliquet efficitur magna consectetur sit amet.
                                Praesent porttitor sem non arcu tristique, eu placerat erat laoreet. Cras sit amet urna quis mi hendrerit pulvinar.
                                Sed finibus felis id elit interdum, condimentum hendrerit lectus condimentum.</div>
                            <br></br>
                            <ul style={{ listStyleType: 'none' }}>
                                <li> <i className="fa-solid fa-book-journal-whills fa-lg me-2" style={{ color: "#f4c10b" }}></i>
                                    <b>Model:</b> {store.vehicleDetailView.model}</li>
                                <li> <i className="fa-solid fa-book-journal-whills fa-lg me-2" style={{ color: "#f4c10b" }}></i>
                                    <b>Crew:</b> {store.vehicleDetailView.crew}</li>
                                <li> <i className="fa-solid fa-book-journal-whills fa-lg me-2" style={{ color: "#f4c10b" }}></i>
                                    <b>Passengers:</b> {store.vehicleDetailView.passengers}</li>
                                <li> <i className="fa-solid fa-book-journal-whills fa-lg me-2" style={{ color: "#f4c10b" }}></i>
                                    <b>Pilots:</b> {store.vehicleDetailView.pilots}</li>
                                <li> <i className="fa-solid fa-book-journal-whills fa-lg me-2" style={{ color: "#f4c10b" }}></i>
                                    <b>Consumables:</b> {store.vehicleDetailView.consumables}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};