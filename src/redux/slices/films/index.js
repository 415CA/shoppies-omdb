import { createSlice } from '@reduxjs/toolkit';

// Initial State
export const initialState = {
  loading: false,
  hasErrors: false,
  films: [],
  query: '',
};

// Slice for Reducers
const omdbSlice = createSlice({
  name: 'omdb',
  initialState,
  reducers: {
    getOmdb: (state, query) => {
      state.loading = true;
      state.query = query;
    },
    getOmdbSuccess: (state, { payload }) => {
      state.films = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getOmdbFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Actions
export const { getOmdb, getOmdbSuccess, getOmdbFailure } = omdbSlice.actions;

// Selector
export const omdbSelector = (state) => state.omdb;

// Reducer
export default omdbSlice.reducer;

// Async Fetch Action
export const fetchOmdb = (query) => async (dispatch) => {
  dispatch(getOmdb(query));

  try {
    const response = await fetch(`http://localhost:3001/omdb/${query}`);
    const data = await response.json();
    dispatch(getOmdbSuccess(data));
  } catch (error) {
    dispatch(getOmdbFailure());
  }
};
