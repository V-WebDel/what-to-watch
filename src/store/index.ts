import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import { createAPI } from '../api';
import { fetchFilms, fetchUserStatus } from './api-action';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        history
      },
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchFilms());

export default store;
