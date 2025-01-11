import {createReducer} from '@reduxjs/toolkit';
import {changeGenres, getFilmsByGenres} from './action';
import {fetchFilms} from './api-action';

import { Film } from '../types/films';


type State = {
  genre: string,
  filmsList: Film[],
  filmsFilter: Film[],
  isFilmsLoading: boolean,
}

const initialState: State = {
  genre: 'All genres',
  filmsList: [],
  filmsFilter: [],
  isFilmsLoading: false,
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
    });
});

export {reducer};
