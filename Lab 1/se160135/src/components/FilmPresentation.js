import React from 'react';
import { Films } from '../shared/ListOfFilms';
import './Film.css';

export default function FilmPresentation() {
    return (
        <div className='container m-2 columns-3 gap-2 w-auto'>
            {Films.map((film) => (
                <div className='column hover:col-span-3'>
                    <div className='card'>
                        <img className='filmImg' src={film.image} alt={film.Title} />
                        <h3 className='title font-bold text-xl'>{film.Title} ({film.Year})</h3>
                        <p className='nation'>Country: {film.Nation}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
