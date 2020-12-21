import React from 'react';

const FilmDetails = ({ film }) => (
  <div key={film.imdbID} className='tile'>
    <h2>{film.Title}</h2>
    <h2>{film.Year}</h2>
    <img src={film.Poster} alt={film.Title} />
  </div>
);

export default FilmDetails;
