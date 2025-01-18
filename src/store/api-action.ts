import type { History } from 'history';
import type { AxiosInstance, AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Film } from '../types/films.js';
import { User, UserAuth, UserData } from '../types/user-data.js';
import { ApiRoute, AppRoute, HttpCode } from '../const';
import { saveToken } from '../token';


type Extra = {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  FETCH_FILMS: 'films/fetchFilms',
  FETCH_FILM: 'film/fetchFilm',
  FETCH_FAVORITE_FILMS: 'films/fetch-favorite',
  LOGIN_USER: 'user/login',
  FETCH_USER_STATUS: 'user/fetch-status'
};

export const fetchFilms = createAsyncThunk<Film[], undefined, { extra: Extra }>(
  Action.FETCH_FILMS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Film[]>(ApiRoute.Films);

    return data;
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

export const fetchUserStatus = createAsyncThunk<User, undefined,  { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<User>(ApiRoute.Login);

    return data;
  });

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<UserData>(ApiRoute.Login, { email, password });
    const { token } = data;

    saveToken(token);
    history.back();

    return email;
  });
