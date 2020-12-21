import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { nominationReducer, omdbReducer } from '../slices';

export default configureStore({
  reducer: {
    omdb: omdbReducer,
    nomination: nominationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
