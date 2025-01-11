import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import { createAPI } from '../api';
import { fetchFilms } from './api-action';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});


store.dispatch(fetchFilms());

export default store;
