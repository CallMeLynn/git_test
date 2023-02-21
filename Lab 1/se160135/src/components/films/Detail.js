import { useParams } from "react-router-dom";
import { Films } from "../../shared/ListOfFilms";

import React from 'react'

export default function Detail() {
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    console.log(film)
    return (
        <div className="container">
            <div className="film-details">
                <h1 className="title text-5xl uppercase font-bold text-red-400 mb-5">{film.Title}</h1>
                <div className="image lg:flex flex-row mx-10 gap-10">
                    <img className="imageDetail sm:max-h-screen" src={`../${film.image}`} alt={film.Title} />
                    <div className="film-detail">
                        <p className="text-left text-2xl m-2">From: <b>{film.Nation}</b></p>
                        <p className="text-left text-2xl m-2">Release: <b>{film.Year}</b></p>
                        <p className="text-left text-2xl m-2">Running time: <b>{film.Duration} minutes</b></p>
                        <p className="text-left text-2xl m-2">Description:</p>
                        <p className="text-left text-xl m-2">{film.Description}</p>
                    </div>
                </div>

            </div>
        </div>
    )

}
