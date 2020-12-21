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
      state.films.push(payload);
    },
    removeNomination: (state, { payload }) => {
      state.films = state.films.filter((nominee) => nominee.imdbID !== payload);
      console.log(state.films);
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
