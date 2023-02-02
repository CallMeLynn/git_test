import React from 'react';
import { Films } from '../../shared/ListOfFilms';
import './Film.css';

export default function FilmPresentation() {
    return (
        <div className='container m-1 flex flex-wrap w-auto xs:columns-1 gap-5 lg:columns-2 xl:columns-3'>
            {Films.map((film) => (
                <div className='column'>
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
