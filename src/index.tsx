import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';

import {films} from './mocks/films';

import {store} from './store/index';

const DATA_FILM = {
  name: 'The Grand Budapest Hotel',
  poster: 'img/the-grand-budapest-hotel-poster.jpg',
  background: 'img/bg-the-grand-budapest-hotel.jpg',
  genre: 'Drama',
  year: 2014,
  runTime: 100,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App dataFilm={DATA_FILM} films={films} />
    </Provider>
  </React.StrictMode>
);
