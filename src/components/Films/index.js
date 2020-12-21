import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from '../Form';
import { Error, Loading } from '../Notifications';
import { addNomination } from '../../redux/slices/nomination';

const FilmList = ({ films, loading, hasErrors }) => {
  const dispatch = useDispatch();

  if (loading) return <Loading />;
  if (hasErrors) return <Error />;

  const onSubmit = (event, film) => {
    dispatch(addNomination(film));
    event.preventDefault();
  };

  return films.map((film) => (
    <div key={film.imdbID} className='tile'>
      <h2>{film.Title}</h2>
      <h2>{film.Year}</h2>
      <img src={film.Poster} alt={film.Title} />
      <Form onSubmit={(event) => onSubmit(event, film)}>
        <Button type='submit'>Nominate</Button>
      </Form>
    </div>
  ));
};

export default FilmList;
