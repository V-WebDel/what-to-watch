import FilmList from '../../components/filmList/filmList';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { Films } from '../../types/films';

type FilmCardProps = {
  films: Films;
}

function MyList({ films }:FilmCardProps): JSX.Element {
  return (
    <div className="user-page">

      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
