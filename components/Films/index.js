import React from 'react';
import { Button } from '../Form';
import { Error, Loading } from '../Notifications';

const FilmList = ({ films, loading, hasErrors }) => {
  if (loading) return <Loading />;
  if (hasErrors) return <Error />;

  return films.map((film) => (
    <div key={film.imdbID} className='tile'>
      <h2>{film.Title}</h2>
      <h2>{film.Year}</h2>
      <img src={film.Poster} alt={film.Title} />
      <Button>Nominate</Button>
    </div>
  ));
};

export default FilmList;
