import {createAction} from '@reduxjs/toolkit';

export const changeGenres = createAction('films/changeGenges', (value: string) => ({
  payload: value,
}));

export const getFilmsByGenres = createAction('films/getFilmGenres', (value: string) => ({
  payload: value,
}));
