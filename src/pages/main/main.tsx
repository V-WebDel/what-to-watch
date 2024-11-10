import FilmsGenresList from '../../components/filmsGenresList/filmsGenresList';
import FilmTop from '../../components/filmTop/filmTop';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

import { Link } from 'react-router-dom';

import { Films } from '../../types/films';

type MainProps = {
  name: string;
  poster: string;
  background: string;
  genre: string;
  year: number;
  films: Films;
}

function Main({ name, poster, background, genre, year, films }: MainProps): JSX.Element {

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={background} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">

          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link" to="/logIn">Sign out</Link>
            </li>
          </ul>
        </header>

        <FilmTop name={name} poster={poster} genre={genre} year={year}/>

      </section>

      <div className="page-content">

        <FilmsGenresList />

        <Footer />
      </div>
    </>);
}

export default Main;
