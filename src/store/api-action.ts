import type { History } from 'history';
import type { AxiosInstance, AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, State } from '../types/state.js';

import { Film } from '../types/films.js';
import { ApiRoute, AppRoute, HttpCode } from '../const';

type Extra = {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  FETCH_FILMS: 'films/fetchFilms',
  FETCH_FILM: 'film/fetchFilm',
  FETCH_FAVORITE_FILMS: 'films/fetch-favorite',
};

export const fetchFilms = createAsyncThunk<Film[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_FILMS,
  async (_, { extra: api }) => {
    // const { api } = extra;
    try {
      const { data } = await api.get<Film[]>(ApiRoute.Films);
      return data;
    } catch (error) {
      console.error('Ошибка при загрузке фильмов:', error);
      throw error;
    }
  });

export const fetchFavoriteFilms = createAsyncThunk<Film[], undefined, { extra: Extra }>(
  Action.FETCH_FAVORITE_FILMS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Film[]>(ApiRoute.Favorite);

    return data;
  });

export const fetchFilm = createAsyncThunk<Film, Film['id'], { extra: Extra }>(
  Action.FETCH_FILM,
  async (id, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.get<Film>(`${ApiRoute.Films}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(error);
    }
  });

