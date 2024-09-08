import Main from '../../pages/main/main';
import MovePage from '../../pages/movePage/movePage';
import MyList from '../../pages/myList/myList';
import AddReview from '../../pages/addReview/addReview';
import Player from '../../pages/player/player';
import LogIn from '../../pages/logIn/logIn';
import NotFound from '../../pages/notFound/notFound';
import PrivateRoute from '../privateRoute/privateRoute';

import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

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
    <BrowserRouter>
      <Routes>
        <Route index element={<Main name={dataFilm.name} poster={dataFilm.poster} background={dataFilm.background} genre={dataFilm.genre} year={dataFilm.year} films={films} />}/>
        <Route path={AppRoute.Login} element={<LogIn />}/>
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Film}/:id`} element={<MovePage films={films} />}/>
        <Route path={AppRoute.AddReview} element={<AddReview name={dataFilm.name} poster={dataFilm.poster} />}/>
        <Route path={AppRoute.Player} element={<Player name={dataFilm.name} poster={dataFilm.poster} runTime={dataFilm.runTime} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
