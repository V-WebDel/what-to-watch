import {createReducer} from '@reduxjs/toolkit';
import {changeGenres, getFilmsByGenres} from './action';
import {films} from './../mocks/films';

const initialState = {
  genre: 'All genres',
  filmsList: films,
  filmsFilter: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenres, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenres,(state, action) => {
      state.filmsFilter = state.filmsList.filter((filmItem) =>
        (action.payload !== 'All genres') ? filmItem.genre === action.payload : true );
    });
});

export {reducer};
