import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNomination, nominationSelector } from '../../../redux/slices/nomination';
import { Button, Form } from '../../Form';
import { Error, Loading } from '../../Notifications';
import FilmDetails from '../Details';

const FilmList = ({ films, loading, hasErrors }) => {
  const nominees = useSelector(nominationSelector);
  const dispatch = useDispatch();

  if (loading) return <Loading />;
  if (hasErrors) return <Error />;

  const onSubmit = (event, film) => {
    dispatch(addNomination(film));
    event.preventDefault();
  };

  console.log(nominees.films);

  return films.map((film) => (
    <div key={film.imdbID}>
      <FilmDetails film={film} />
      <Form onSubmit={(event) => onSubmit(event, film)}>
        {films.length === 5 || nominees.films.includes(film) ? (
          <Button type='submit' disabled>
            Nominate
          </Button>
        ) : (
          <Button type='submit'>Nominate</Button>
        )}
      </Form>
    </div>
  ));
};

export default FilmList;
