import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import MyList from '../../pages/myList/myList';
import AddReview from '../../pages/addReview/addReview';
import Player from '../../pages/player/player';
import LogIn from '../../pages/logIn/logIn';
import NotFound from '../../pages/notFound/notFound';
import PrivateRoute from '../privateRoute/privateRoute';

import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

type AppProps = {
  cardsCount: number;
  dataFilm: {
    name: string;
    genre: string;
    year: number;
  };
}

function App({cardsCount, dataFilm}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main cardsCount={cardsCount} name={dataFilm.name} genre={dataFilm.genre} year={dataFilm.year} />}/>
        <Route path={AppRoute.Login} element={<LogIn />}/>
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<Film />}/>
        <Route path={AppRoute.AddReview} element={<AddReview />}/>
        <Route path={AppRoute.Player} element={<Player />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
