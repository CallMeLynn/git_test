import React from 'react';
import { Films } from '../../shared/ListOfFilms';
import './Film.css';

export default function FilmPresentation() {
    return (
        <div className='container m-1 flex flex-wrap w-auto 2xl:columns-2 gap-5 3xl:columns-3'>
            {Films.map((film) => (
                <div className='column p-2 border border-black' key={film.id}>
                    <div className='card'>
                        <img className='filmImg xl:min-h-screen' src={film.image} alt={film.Title} />
                        <h3 className='title font-bold text-2xl mt-4 hover:underline'>{film.Title} ({film.Year})</h3>
                        <p className='nation mb-2'>Country: {film.Nation}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
