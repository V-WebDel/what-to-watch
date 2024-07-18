import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const CARDS_COUNT = 20;

const DATA_FILM = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardsCount={CARDS_COUNT} dataFilm={DATA_FILM} />
  </React.StrictMode>,
);
