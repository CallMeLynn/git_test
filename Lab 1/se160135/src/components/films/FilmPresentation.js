import React, { useState } from 'react';
import { Films } from '../../shared/ListOfFilms';
import './Film.css';

export default function FilmPresentation() {
    const [film, setFilm] = useState([])
    return (
        <div className='container m-1 flex flex-wrap w-auto 2xl:columns-2 gap-5 3xl:columns-3'>
            {Films.map((film) => (
                <div className='column p-2 border border-black' key={film.id}>
                    <div className='card'>
                        <img className='filmImg xl:min-h-screen' src={film.image} alt={film.Title} />
                        <h3 className='title font-bold text-2xl mt-4 hover:underline' onClick={() => { setFilm(film) }}>
                            <a href='#detailPopup' id='openPopup'>{film.Title} ({film.Year})</a>
                        </h3>
                        <p className='nation mb-2'>Country: {film.Nation}</p>
                    </div>
                </div>
            ))}

            <div id='detailPopup' className='overlay'>
                <div className='popup'>
                    <div className='header'>
                        <a className='close' href='#'>&times;</a>
                        <h2 className='uppercase text-4xl text-emerald-400 font-mono font-bold'>{film.Title}</h2>
                    
                    </div>
                    
                    <div className='content'>
                        <img className='filmImgDetail p-1' src={film.image} alt={film.Title} /> <br />
                        Release on: {film.Year} <br />
                        Country: {film.Nation}
                    </div>
                </div>
            </div>
        </div>
    )
}
