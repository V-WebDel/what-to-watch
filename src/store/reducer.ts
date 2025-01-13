import {createReducer} from '@reduxjs/toolkit';
import {changeGenres, getFilmsByGenres} from './action';
import {fetchFilms, fetchUserStatus, loginUser} from './api-action';

import { Film } from '../types/films';
import { User } from '../types/user-data';
import { AuthorizationStatus } from '../const';

type State = {
  genre: string,
  filmsList: Film[],
  filmsFilter: Film[],
  isFilmsLoading: boolean,
  authorizationStatus: AuthorizationStatus,
  user: User['email'],
}

const initialState: State = {
  genre: 'All genres',
  filmsList: [],
  filmsFilter: [],
  isFilmsLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenres, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenres,(state, action) => {
      state.filmsFilter = state.filmsList.filter((filmItem) =>
        (action.payload !== 'All genres') ? filmItem.genre === action.payload : true );
    })
    .addCase(fetchFilms.pending, (state, action) => {
      state.isFilmsLoading = true;
    })
    .addCase(fetchFilms.fulfilled, (state, action) => {
      state.filmsList = action.payload;
      state.isFilmsLoading = false;
    })
    .addCase(fetchFilms.rejected, (state, action) => {
      state.isFilmsLoading = false;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});

export {reducer};
