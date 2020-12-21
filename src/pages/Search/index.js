import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmList } from '../../components/Films';
import { Button, Form, Input } from '../../components/Form';
import { fetchOmdb, omdbSelector } from '../../redux/slices/films';

const Search = () => {
  const dispatch = useDispatch();
  const { films, loading, hasErrors } = useSelector(omdbSelector);
  const [searchQuery, setSearchQuery] = useState('');

  const onSubmit = (event) => {
    if (searchQuery) {
      dispatch(fetchOmdb(searchQuery));
      setSearchQuery(searchQuery);
    }
    event.preventDefault();
  };

  return (
    <section>
      <h1> OMDB </h1>
      <Form onSubmit={onSubmit}>
        <Input type='text' value={searchQuery} onChange={setSearchQuery} />
        <Button type='submit'>Search</Button>
      </Form>
      <div className='content'>
        {films && <FilmList films={films} loading={loading} hasErrors={hasErrors} />}
      </div>
    </section>
  );
};

export default Search;
