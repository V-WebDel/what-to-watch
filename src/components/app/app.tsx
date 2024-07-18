import Main from '../../pages/main/main';

type AppProps = {
  cardsCount: number;
  dataFilm: {
    name: string;
    genre: string;
    year: number;
  };
}

function App({cardsCount, dataFilm}: AppProps): JSX.Element {
  return <Main cardsCount={cardsCount} name={dataFilm.name} genre={dataFilm.genre} year={dataFilm.year} />;
}

export default App;
