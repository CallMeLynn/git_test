import React from 'react';
import { Films } from '../shared/ListOfFilms';


export default function FilmPresentation() {
    return (
        <div className='container'>
            {Films.map((film) => (
                <div className='column'>
                    <div className='card'>
                        <img src="../shared/assets/Minions.jpg" alt={film.Title} />
                        <h3 className='title'>{film.Title} ({film.Year})</h3>
                        <p className='nation'>Country: {film.Nation}</p>
                        {/* <p><button>Detail</button></p> */}
                    </div>
                </div>
            ))}
        </div>
    )
}
