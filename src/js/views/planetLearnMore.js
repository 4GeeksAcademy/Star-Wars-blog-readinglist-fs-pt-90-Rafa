import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PlanetLearnMore = () => {

    const { id } = useParams()
    const { store, actions } = useContext(Context)
    const planetImage = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`


    useEffect(() => {
        actions.planetDetails(id)
    }, [])

    return (
        <div>
            <div className="card mb-3 text-bg-dark  container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={planetImage} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{store.planetDetailView.name}
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
                                    <b>Gravity:</b> {store.planetDetailView.gravity}</li>
                                <li> <i className="fa-solid fa-book-journal-whills fa-lg me-2" style={{ color: "#f4c10b" }}></i>
                                    <b>Population:</b> {store.planetDetailView.population}</li>
                                <li> <i className="fa-solid fa-book-journal-whills fa-lg me-2" style={{ color: "#f4c10b" }}></i>
                                    <b>Climate:</b> {store.planetDetailView.climate}</li>
                                <li> <i className="fa-solid fa-book-journal-whills fa-lg me-2" style={{ color: "#f4c10b" }}></i>
                                    <b>Terrain:</b> {store.planetDetailView.terrain}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};