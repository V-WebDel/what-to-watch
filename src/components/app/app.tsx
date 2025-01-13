import Main from '../../pages/main/main';
import MovePage from '../../pages/movePage/movePage';
import MyList from '../../pages/myList/myList';
import AddReview from '../../pages/addReview/addReview';
import Player from '../../pages/player/player';
import LogIn from '../../pages/logIn/logIn';
import NotFound from '../../pages/notFound/notFound';
import PrivateRoute from '../privateRoute/privateRoute';

import {AppRoute} from '../../const';
import { Route, BrowserRouter, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from '../../history';

import { Films } from '../../types/films';

type AppProps = {
  dataFilm: {
    name: string;
    poster: string;
    background: string;
    genre: string;
    year: number;
    runTime: number;
  };
  films: Films;
}

function App({dataFilm, films}: AppProps): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route index element={<Main name={dataFilm.name} poster={dataFilm.poster} background={dataFilm.background} genre={dataFilm.genre} year={dataFilm.year} films={films} />}/>
        <Route path={AppRoute.Login} element={<LogIn />}/>
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList films={[]} />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Film}/:id`} element={<MovePage films={films} />}/>
        <Route path={AppRoute.AddReview} element={<AddReview name={dataFilm.name} poster={dataFilm.poster} />}/>
        <Route path={AppRoute.Player} element={<Player name={dataFilm.name} poster={dataFilm.poster} runTime={dataFilm.runTime} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
