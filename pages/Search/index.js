import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Form/Button';
import { FilmList } from '../../components/Films';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input';
import { fetchOmdb, omdbSelector } from '../../redux/slices/films';

const Search = () => {
  const dispatch = useDispatch();
  const { query, films, loading, hasErrors } = useSelector(omdbSelector);
  const [searchQuery, setSearchQuery] = useState('');
  console.log('Omdb: ', query.payload);

  const onSubmit = (event) => {
    if (searchQuery) {
      dispatch(fetchOmdb(searchQuery));
      setSearchQuery(searchQuery);
    }
    event.preventDefault();
  };

  return (
    <section>
      <h1> Omdb </h1>
      <Form onSubmit={onSubmit}>
        <Input type='text' value={searchQuery} onChange={setSearchQuery} />
        <Button type='submit'>Search</Button>
      </Form>
      <div className='content'>
        {/* {renderOmdb()} */}
        <FilmList films={films} loading={loading} hasErrors={hasErrors} />
      </div>
    </section>
  );
};

export default Search;
