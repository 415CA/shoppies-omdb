import React from 'react';
import { useSelector } from 'react-redux';
import { nominationSelector } from '../../redux/slices/nomination';

const Nominations = () => {
  const { films } = useSelector(nominationSelector);
  return (
    <div>
      <div>Nominations</div>
      {films.map((film) => (
        <div key={film.imdbID} className='tile'>
          <h2>{film.Title}</h2>
          <h2>{film.Year}</h2>
          <img src={film.Poster} alt={film.Title} />
        </div>
      ))}
    </div>
  );
};

export default Nominations;
