import { createSlice } from '@reduxjs/toolkit';

// Initial State
export const initialState = {
  loading: false,
  hasErrors: false,
  films: [],
  hasFiveNominees: false,
};

// Slice for Reducers
const nominationSlice = createSlice({
  name: 'nomination',
  initialState,
  reducers: {
    getNomination: (state) => {
      state.loading = true;
    },
    getNominationSuccess: (state, { payload }) => {
      state.films = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getNominationFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    addNomination: (state, { payload }) => {
      const { Title, Year, imdbID, Type, Poster } = payload;
      state.push({ Title, Year, imdbID, Type, Poster });
    },
    removeNomination: (state, { payload }) => {
      state.films = state.filter((nominee) => nominee.imdbID !== payload);
    },
  },
});

// Actions
export const {
  getNomination,
  getNominationSuccess,
  getNominationFailure,
  addNomination,
  removeNomination,
} = nominationSlice.actions;

// Selector
export const nominationSelector = (state) => state.nomination;

// Reducer
export default nominationSlice.reducer;

// Async Fetch Action
export const fetchNomination = (query) => async (dispatch) => {
  dispatch(getNomination(query));

  try {
    const response = await fetch(
      `http://www.nominationapi.com/?apikey=${API_KEY}&s=${query}&r=json`,
    );
    const data = await response.json();
    dispatch(getNominationSuccess(data.Search));
  } catch (error) {
    dispatch(getNominationFailure());
  }
};
