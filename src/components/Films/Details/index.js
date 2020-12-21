import React from 'react';

const FilmDetails = ({ Title, Year, Poster, imdbID }) => (
  <div key={imdbID} className='tile'>
    <h2>{Title}</h2>
    <h2>{Year}</h2>
    <img src={Poster} alt={Title} />
  </div>
);

export default FilmDetails;
