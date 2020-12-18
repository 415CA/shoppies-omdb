import { configureStore } from '@reduxjs/toolkit';
import { omdbReducer } from '../slices';

export default configureStore({
  reducer: {
    omdb: omdbReducer,
  },
});
