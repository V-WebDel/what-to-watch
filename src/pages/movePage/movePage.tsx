import { Link, useNavigate, useParams } from 'react-router-dom';
import FilmList from '../../components/filmList/filmList';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {AppRoute} from '../../const';

import { Films } from '../../types/films';

type FilmCardProps = {
  films: Films;
}

function MovePage({ films }:FilmCardProps): JSX.Element {
  const { id } = useParams<{ id: string }>(); // Извлекаем ID из параметров
  const film = films.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.background} alt={film.name} />
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

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(AppRoute.Player)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={() => navigate(AppRoute.MyList)} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.poster} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a className="film-nav__link" href='/'>Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a className="film-nav__link" href='/'>Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a className="film-nav__link" href='/'>Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{film.scores} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                {film.description}

                <p className="film-card__director"><strong>Director: {film.releaseDate}</strong></p>

                <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={films} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MovePage;
