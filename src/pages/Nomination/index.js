import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilmDetails from '../../components/Films/Details';
import { Button, Form } from '../../components/Form';
import { nominationSelector, removeNomination } from '../../redux/slices/nomination';

const Nominations = () => {
  const { films } = useSelector(nominationSelector);
  const dispatch = useDispatch();

  const onSubmit = (event, film) => {
    dispatch(removeNomination(film.imdbID));
    event.preventDefault();
  };

  return (
    <div>
      <div>Nominations</div>
      {films.map((film) => (
        <div key={film.imdbID}>
          <FilmDetails key={film.imdbID} film={film} />
          <Form onSubmit={(event) => onSubmit(event, film)}>
            <Button type='submit'>Remove</Button>
          </Form>
        </div>
      ))}
    </div>
  );
};

export default Nominations;
